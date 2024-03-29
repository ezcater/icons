import React from 'react';
import Head from 'next/head';
import Search from '../components/Search';
import IconGrid from '../components/IconGrid';
import * as iconsPackage from '@ezcater/icons';

const allIcons = Object.keys(iconsPackage).map(key => iconsPackage[key]);

const Home = () => {
  const [query, setQuery] = React.useState('');
  const [icons, setIcons] = React.useState(allIcons);

  React.useEffect(() => {
    const id = setTimeout(() => {
      const queryLower = query.toLowerCase();
      const subset = allIcons.filter(each =>
        each.name.toLowerCase().replace(/^svg/i, '').includes(queryLower)
      );
      setIcons(subset);
    }, 25);
    return () => {
      clearTimeout(id);
    };
  }, [query]);

  return (
    <div className="flex min-h-screen flex-row justify-center bg-kale-green py-24 antialiased">
      <Head>
        <title>@ezcater/icons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base font-semibold leading-6 tracking-wide text-ez-green">
              @ezcater/icons
            </p>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl sm:leading-10">
              Icons for every occasion
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-400 lg:mx-auto">
              Our talented marketing folks have created hundreds of branded icons.
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-400 lg:mx-auto">
              For each SVG icon, import the respective React component using the{' '}
              <a href="https://github.com/ezcater/icons" className="text-ez-green hover:underline">
                @ezcater/icons
              </a>{' '}
              package, or click any icon below to copy the SVG source.
            </p>
          </div>

          <Search value={query} onChange={e => setQuery(e.target.value)} />

          <div className="mt-10">
            <IconGrid icons={icons} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
