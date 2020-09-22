# Babel

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Installing Babel](#installing-babel)
- [Babel configuration example](#babel-configuration-example)
- [Babel presets](#babel-presets)
- [Babel with Webpack](#babel-with-webpack)


## Introduction

- Babel is a JS transcompiler used to convert latest JS code into a backwards compatible version of JS that can be run by older JS engines
- **arrow function** is introduced in ES6:

  ```JS
  [1, 2, 3].map((num) => num + 1);
  ```

- configure Babel to transpile modern ES6 into ES5 syntax
  - this must be done during build time, we must setup a workflow (Webpack) that handles this for us

  ```js
  [1, 2, 3].map(function(num) {
    return num + 1;
  });
  ```


## Installing Babel

- install Babel using `npm`, locally in a project:

  ```sh
  $ npm install --save-dev @babel/core @babel/cli
  ```

- installing `babel-cli` globally is possible, but it is now discouraged by the Babel maintainers
  - because by using it locally we can have different versions of Babel in each project
  - and checking in babel in our repository is better for team work
- npm now comes with npx, locally installed CLI packages can run by typing the command in the project folder:

  ```sh
  $ npx babel script.js
  ```


## Babel configuration example

- Babel out of the box does not do anything useful, we need to configure it and add plugins
- [list of Babel plugins](https://babeljs.io/docs/en/plugins)
- to convert ES6 arrow function into ES5 function syntax, download the package in the `node_modules` folder

  ```sh
  $ npm install --save-dev @babel/plugin-transform-arrow-functions
  ```

- create a `.babelrc` file in the root folder, and add:

  ```js
  {
    "plugins": ["@babel/plugin-transform-arrow-functions"]
  }
  ```


## Babel presets

- we can add more plugins, but adding configuration features one by one, is not practical
- this is why Babel offers **presets**
  - most popular presets are `env` and `react`
- **Note**: Babel 7 deprecated (and removed) yearly presets like `preset-es2017`, and stage presets, use `@babel/preset-env` instead
- **env preset**
  - `env` preset allows us to tell it which environments we want to support, and it does everything for us, **supporting all modern JS features**
  - e.g., "support the last 2 versions of every browser, but for Safari let's support all versions since Safari 7"

    ```js
    {
      "presets": [
        ["env", {
          "targets": {
            "browsers": ["last 2 versions", "safari >= 7"]
          }
        }]
      ]
    }
    ```

  - or "don't need browser support, just work with Node.js 6.10"

    ```js
    {
      "presets": [
        ["env", {
          "targets": {
            "node": "6.10"
          }
        }]
      ]
    }
    ```

- **react preset**
  - `react` preset is very convenient when writing React apps: adding `preset-flow`, `syntax-jsx`, `transform-react-jsx`, `transform-react-display-name`
    - by including those, we are now ready to go developing React apps, with JSX transforms and Flow support


## Babel with Webpack

- Babel is not enough, we also need to bundle the code using Webpack tool
- modern JS needs two different stages: a compile stage, and a runtime stage
  - because some ES6+ features need a polyfill or a runtime helper
- install the Babel polyfill runtime functionality

  ```sh
  $ npm install @babel/polyfill @babel/runtime @babel/plugin-transform-runtime
  ```

- in `webpack.config.js` file add:

  ```js
  entry: [
    'babel-polyfill',
    // your app scripts should be here
  ],

  module: {
    loaders: [
      // Babel loader compiles ES2015 into ES5 for
      // complete cross-browser support
      {
        loader: 'babel-loader',
        test: /\.js$/,
        // only include files present in the `src` subdirectory
        include: [path.resolve(__dirname, "src")],
        // exclude node_modules, equivalent to the above line
        exclude: /node_modules/,
        query: {
          // Use the default ES2015 preset
          // to include all ES2015 features
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
  ```

- by keeping the presets and plugins information inside the `webpack.config.js` file, we can avoid having a `.babelrc` file
