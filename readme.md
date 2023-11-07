# ezcater icons

Include ezcater branded icons in your React projects easily with `@ezcater/icons`, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation

Install `@ezcater/icons`. Import icons using one of these two options:

- Option 1:

```js
import { Beer, WineBottle } from '@ezcater/icons';
```

- Option 2:

```js
import Beer from '@ezcater/icons/Beer';
import WineBottle from '@ezcater/icons/WineBottle';
```

Option 1 offers the simplest developer experience, but should only be used in projects that support [Tree-shaking](https://webpack.js.org/guides/tree-shaking/), such as create-react-app or Next.js. If you're using ES6 modules and a bundler that supports tree-shaking, you can safely use named imports and get an optimized bundle size automatically.

If Tree-shaking is unavailable in your project, Option 2 requires no additional configuration to keep your bundle size to a minimum, by only including the icons imported at the specified path.

## Usage

```jsx
import { Beer } from '@ezcater/icons';

function Question() {
  return (
    <h3>
      {' '}
      Lets go for a <Beer />?{' '}
    </h3>
  );
}
```

## Icon overview

![image](https://user-images.githubusercontent.com/109814/77562593-96a88e00-6e96-11ea-8268-574ae47a38f6.png)

You can add more icons by submitting pull requests or creating issues.

### Preview

The preview site is the [`react-icons`](https://ezcater.github.io/icons) website, built in [NextJS](https://nextjs.org/).

```bash
cd packages/www
yarn dev
```

## Why React SVG components instead of fonts?

SVG is [supported by all major browsers](http://caniuse.com/#search=svg). With `@ezcater/icons`, you can serve only the needed icons instead of one big font file to the users, helping you to recognize which icons are used in your project.

## Inspiration

- [react-icons](https://github.com/react-icons/react-icons)
- [heroicons](https://heroicons.dev/)

## Licence

MIT
