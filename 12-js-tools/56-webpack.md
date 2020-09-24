# Webpack

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Webpack Configuration](#webpack-configuration)
- [Loaders](#loaders)
- [Plugins](#plugins)
- [Mode](#mode)
- [Running Webpack](#running-webpack)
- [Watching Changes](#watching-changes)


## Introduction

- Webpack is a **module bundler** tool that lets us compile JavaScript modules
- perform operations like:
  - helps us bundle our resources
  - watches for changes and re-runs the tasks
  - can run Babel transpilation to ES5, allowing us to use the latest JavaScript features without worrying about browser support
  - can transpile CoffeeScript to JavaScript
  - can convert inline images to data URIs
  - allows us to use `require()` for CSS files
  - can run a development webserver
  - can handle hot module replacement
  - can split the output files into multiple files, to avoid having a huge js file to load in the first page hit
  - can perform tree shaking
- not limited on the frontend, it's also useful in backend Node.js development
- predecessors:
  - Grunt
  - Broccoli
  - Gulp
- main difference: those predecessors are known as **task runners**, while webpack is a module bundler
- can be installed globally or locally for each project
- install globally with `yarn` or `npm`, then run `webpack-cli`
  - with npm: `npm i -g webpack webpack-cli`
  - with yarn: `yarn global add webpack webpack-cli`
  - then run `webpack-cli`
- install locally which is the recommended setup, because webpack can be updated per project
  - with npm: `npm i webpack webpack-cli --save-dev`
  - with yarn: `yarn add webpack webpack-cli -D`
  - add this to `package.json` file:

    ```json
    {
      //...
      "scripts": {
        "build": "webpack"
      }
    }
    ```

  - then run webpack in the root project:
    - with npm: `npm run build`
    - with yarn: `yarn build`


## Webpack Configuration

- by default, webpack (v4 and up) does not require any config if we respect these conventions:
  - **entry point** of app is `./src/index.js`
  - output is put in `./dist/main.js`
  - minified and optimized for production
- webpack configuration is stored in the `webpack.config.js` file, in the project root folder
- uses `./index.js` file as starting point and changes output bundle into `app.js`:

  ```js
  module.exports = {
    /* ... */
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
    },
    /* ... */
  };
  ```


## Loaders

- webpack allows us to use `import` or `require` statements in our JS code, not just include other JS, but any kind of file, e.g., CSS
- Webpack aims to handle all our dependencies, not just JavaScript, and loaders are one way to do that
- we can use `import 'style.css'` in our code, by using this loader configuration:

  ```js
  module.exports = {
    /* ... */
    module: {
      rules: [{ test: /\.css$/, use: 'css-loader' }]
    }
    /* ... */
  };
  ```

- can have options:

  ```js
  module.exports = {
    /* ... */
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }
    /* ... */
  };
  ```

- can require multiple loaders for each rule:

  ```js
  module.exports = {
    /* ... */
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
    /* ... */
  };
  ```

  - `css-loader` interprets the `import 'style.css'` directive in the CSS
  - `style-loader` is then responsible for injecting that CSS in the DOM, using a `<style>` tag
- order matters, and it's reversed
- [full list of loaders](https://webpack.js.org/loaders/)
- commonly used loader is Babel, to transpile modern JS to ES5 syntax:

  ```js
  module.exports = {
    /* ... */
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
    /* ... */
  };
  ```

- makes Babel preprocess all React/JSX files
  - see [`babel-loader` options](https://webpack.js.org/loaders/babel-loader/)

  ```js
  module.exports = {
    /* ... */
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
    /* ... */
  };
  ```


## Plugins

- plugins are the main building blocks of webpack and serve the purpose of doing anything else that loaders cannot do
- [full list of plugins](https://webpack.js.org/plugins/)
- `HTMLWebpackPlugin` plugin has the job of automatically creating an HTML file, adding the output JS bundle path, so the JavaScript is ready to be served

  ```js
  module.exports = {
    /* ... */
    plugins: [
      new HTMLWebpackPlugin()
    ]
    /* ... */
  };
  ```

- `CleanWebpackPlugin` plugin can be used to clear the `dist/` folder before creating any output, so we don't leave files around when we change the name of the output file

  ```js
  module.exports = {
    /* ... */
    plugins: [
      new CleanWebpackPlugin(['dist'])
    ]
    /* ... */
  };
  ```


## Mode

- mode sets the environment on which webpack works
  - can be set to `development` or `production` (default)

  ```js
  module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    }
  };
  ```

- development mode:
  - builds very fast
  - is less optimized than production
  - does not remove comments
  - provides more detailed error messages and suggestions
  - provides a better debugging experience
- production mode:
  - is slower to build, since it needs to generate a more optimized bundle
  - resulting JS file is smaller in size, as it removes many things that are not needed in production


## Running Webpack

- can be run from the command line manually if installed globally
- but generally we write a script inside the `package.json` file:

  ```json
  "scripts": {
    "build": "webpack"
  }
  ```

- then run webpack in the root project:
  - with npm: `npm run build`
  - with yarn: `yarn build`


## Watching Changes

- webpack can automatically rebuild the bundle when a change in our app happens, and keep listening for the next change
- add this script into `package.json` file:

  ```js
  "scripts": {
    "watch": "webpack --watch"
  }
  ```

- then run:
  - with npm: `npm run watch`
  - with yarn: `yarn watch`
- one feature of the watch mode is that the bundle is only changed if the build has no errors
  - if there are errors, `watch` will keep listening for changes, and try to rebuild the bundle, but the current working bundle is not affected by those problematic builds
