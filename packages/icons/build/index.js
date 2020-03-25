#!/usr/bin/env node
// @ts-check

const { toWords } = require('number-to-words');
const execa = require('execa');
const fastCase = require('fast-case');
const fg = require('fast-glob');
const fs = require('fs-extra');
const path = require('path');

const svgo = require('./svgo');
const svgr = require('@svgr/core').default;

const getComponentName = originalName => {
  originalName = originalName
    .replace(/^\d+/, digits => `${toWords(parseInt(digits, 10))}_`)
    .replace(/_$/, '');
  return originalName.length === 1 ? originalName.toUpperCase() : fastCase.pascalize(originalName);
};

const baseDir = process.cwd();
const buildDir = path.join(baseDir, 'built');

const pkgJSON = name => `{
  "private": true,
  "sideEffects": false,
  "main": "./${name}",
  "module": "./${name}.esm"
}
`;

const pkgJSONBuilt = name => `{
  "private": true,
  "sideEffects": false,
  "main": "./${name}.js",
  "module": "./${name}.esm.js",
  "types": "./${name}.d.ts"
}
`;

const getSource = async () => {
  const baseDir = path.dirname('../');
  const sourceFiles = await fg(path.join(baseDir, 'source/**/*.svg'));

  return sourceFiles.map(filename => {
    const match = filename.match(/([^\/]+)\.svg$/);
    return {
      filename,
      originalName: match[1].replace(/&/g, ''),
      source: fs.readFileSync(filename).toString(),
      pack: 'icons',
      width: '24',
      height: '24',
      name: ''
    };
  });
};

const generate = async () => {
  console.log('Reading icon packs...');

  const icons = await getSource();

  if (icons.length === 0) {
    console.log('Error reading icons from pack');
    process.exit(1);
  }

  console.log('Building icons...');
  const totalIcons = icons.length;

  for (const icon of icons) {
    let result = icon.source;

    icon.name = getComponentName(icon.originalName);

    result = await svgo(result);
    result = await svgr(result, { typescript: true }, { componentName: icon.name });

    result += `\n${icon.name}.componentName="${icon.name}";`;
    result += `\n${icon.name}.originalFilename="${icon.filename}";`;

    const destinationPath = path.join(buildDir, icon.name);
    await fs.mkdirp(destinationPath);
    await fs.outputFile(path.join(destinationPath, `${icon.name}.tsx`), result);
    await fs.outputFile(path.join(destinationPath, 'package.json'), pkgJSON(icon.name));
  }

  console.log('Writing index files...');

  const writeIndexFiles = async () => {
    const seenNames = new Set();

    await fs.outputFile(
      path.join(buildDir, 'index.ts'),

      icons
        .map(({ name }) => {
          // some icons exist in multiple source directories
          const seen = seenNames.has(name);
          seenNames.add(name);
          return seen ? null : `export {default as ${name}} from './${name}'`;
        })
        .filter(lines => lines)
        .join('\n')
    );
  };

  await writeIndexFiles();

  //

  console.log('Generating ESM JavaScript and TypeScript types...');

  const compilerOptions = {
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    importHelpers: true,
    jsx: 'react',
    lib: ['dom', 'es6'],
    moduleResolution: 'node',
    skipLibCheck: true,
    strict: true,
    target: 'es5',
    types: ['node'],
    outDir: './built',
    rootDir: './built'
  };

  const tsConfigEsm = {
    compilerOptions: {
      ...compilerOptions,
      declaration: true,
      module: 'es2015'
    },
    exclude: ['generate']
  };

  const tsConfigCjs = {
    compilerOptions: {
      ...compilerOptions,
      module: 'commonjs'
    },
    exclude: ['generate']
  };

  await fs.writeJSON('tsconfig.json', tsConfigEsm);
  await execa('npx', ['tsc', '--project', './tsconfig.json'], { stdio: 'inherit' });
  await fs.remove('tsconfig.json');

  console.log('Moving ESM JavaScript files...');
  const esmFiles = await fg(path.join(buildDir, '**/*.js'));
  for (const filepath of esmFiles) {
    await fs.move(
      filepath,
      path.join(path.dirname(filepath), path.basename(filepath).replace('.js', '.esm.js')),
      {
        overwrite: true
      }
    );
  }

  console.log('Building CJS JavaScript...');

  await fs.writeJSON('tsconfig.json', tsConfigCjs);
  await execa('npx', ['tsc', '--project', './tsconfig.json'], { stdio: 'inherit' });
  await fs.remove('tsconfig.json');

  console.log('Moving CJS JavaScript files...');
  const cjsFiles = await fg('built/**/*.js');
  for (const builtFile of cjsFiles) {
    const destination = path.join(baseDir, builtFile.replace('built/', 'dist/'));
    await fs.move(path.join(baseDir, builtFile), destination, { overwrite: true });
  }

  console.log('Rewriting package.json files...');
  for (const icon of icons) {
    await fs.outputFile(path.join(buildDir, icon.name, 'package.json'), pkgJSONBuilt(icon.name));
  }

  console.log('Copying files to destination...');
  const builtFiles = await fg('built/**/*');
  for (const builtFile of builtFiles) {
    if (builtFile.match(/\.tsx?$/) && !builtFile.match(/\.d\.ts$/)) {
      continue;
    }

    const destination = path.join(baseDir, builtFile.replace('built/', 'dist/'));
    await fs.move(path.join(baseDir, builtFile), destination, { overwrite: true });
  }

  console.log(`${totalIcons} icons successfully built!`);
};

generate().catch(err => {
  console.log(err.stack);
  process.exit(1);
});
