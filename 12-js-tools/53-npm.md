# npm

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [How to use npm](#how-to-use-npm)
- [Versioning](#versioning)
- [Running tasks using npm](#running-tasks-using-npm)
- [Uninstalling packages](#uninstalling-packages)
- [The package.json file](#the-packagejson-file)
- [The package-lock.json file](#the-package-lockjson-file)
- [Updating packages](#updating-packages)
- [Installed Packages Location](#installed-packages-location)
- [npx](#npx)


## Introduction

- `npm` is the standard package manager for Node.js
- started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in frontend JavaScript
- `npm` is installed when installing [Node.js](https://nodejs.org)


## How to use npm

- if a project has a `packages.json`, running `npm install` will install everything the project needs, in the `node_modules` folder 
- `npm install <PACKAGE_NAME>` will install specific package as **dependency**
- flags that can be added:
  - `--save` installs and adds the entry to the `package.json` file dependencies (default as of npm 5)
  - `--save-dev` or `-D` installs and adds the entry to the `package.json` file _devDependencies_
  - `--production` to avoid installing development dependencies
- difference between devDependencies and dependencies:
  - `devDependencies` are intended as development-only packages, e.g., testing library, webpack or Babel
  - `dependencies` are bundled with the app in production
- some packages can be installed globally using `-g` flag
  - which will be installed in a special folder, not in the current project
- main difference between local and global packages:
  - **local packages** are installed where we run `npm install <PACKAGE_NAME>`, and they are put in the `node_modules` folder on the same directory
  - **global packages** are all put in a single place in our system, regardless of where we run `npm install -g <PACKAGE_NAME>`
- both are required in the same way: `require('PACKAGE_NAME')`
- **Note**:
  - in general, **all packages should be installed locally**
    - this makes sure that applications are all running a different version of each package
    - updating a global package would make all our projects use the new release, which might break compatibility with further dependencies
  - packages **should only be installed globally** when it provides an executable command that we run from the shell (CLI), and it's reused across projects
- popular global packages:
  - `npm`
  - `create-react-app`
  - `vue-cli`
  - `grunt-cli`
  - `mocha`
  - `react-native-cli`
  - `gatsby-cli`
  - `forever`
  - `nodemon`
- `npm list -g --depth 0` to check the packages installed globally


## Versioning

- `npm` manages versioning, so we can specify any specific version of a package, or require a version higher or lower than what we need
  - follows the semantic versioning (semver) standard
- specifying an explicit version of a library helps to keep everyone on the same exact version of a package, so that the whole team runs the same version until the `package.json` file is updated
- Semantic Versioning concept: all versions have 3 digits: `x.y.z.`
  - first digit is the major version
  - second digit is the minor version
  - third digit is the patch version
- there are rules, when making a new release version:
  - up major for incompatible API changes
  - up minor for adding functionality in a backward-compatible manner
  - up patch for backward-compatible bug fixes
- rules uses symbols:
  - `^` by writing `^0.13.0`, running `npm update` will update patch and minor releases: `0.13.1`, `0.14.0` and so on
  - `~` by writing `~0.13.0`, running `npm update` will update patch releases: `0.13.1`, but not `0.14.0`
  - `*` accepts all updates, including major version upgrades
  - `>` accepts any version higher than the specified one
  - `>=` accepts any version equal to or higher than the specified one
  - `<=` accepts any version equal or lower to the specified one
  - `<` accepts any version lower to the specified one
  - `=` accepts exact version
  - `-` accepts a range of versions, e.g., `2.1.0 - 2.6.2`
  - `||` combine sets, e.g., `< 2.1 || > 2.6`
- notation symbols can be combined, e.g., `1.0.0 || >=1.1.0 <1.2.0` to either use `1.0.0` or one release from `1.1.0` up, but lower than `1.2.0`
- other rules:
  - no symbol only accepts the specific version we specified, e.g., `1.2.1`
  - `latest` will use latest version available


## Running tasks using npm

- `package.json` file supports a format for specifying command line tasks: `npm run <SCRIPT>`
  - very common when running Webpack

  ```json
  {
    "scripts": {
      "start-dev": "node lib/server-development",
      "start": "node lib/server-production",
      "watch": "webpack --watch --progress --colors --config webpack.conf.js",
      "dev": "webpack --progress --colors --config webpack.conf.js",
      "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
    },
  }
  ```

- we can just use the shorthand commands

  ```sh
  $ npm run watch
  $ npm run dev
  $ npm run prod
  ```


## Uninstalling packages

- run `npm uninstall <PACKAGE_NAME>` in the project root folder to uninstall package **locally**
- add `-S` or `--save` flag to also remove the reference in the `package.json` file
- add `-D` or `--save-dev` flag to remove the **devDependencies** package
- add `-g` or `--global` to uninstall package **globally**


## The package.json file

- `package.json` is a JSON file is used for managing the project's dependencies, scripts, version and more
  - it's where `npm` and `yarn` stores the names and versions of the package it installed

- `name` property sets the application/package name, e.g., `"name": "test-project"`
  - must be less than 214 characters, must not have spaces, it can only contain lowercase letters, hyphens (`-`) or underscores (`_`)
- `author` property lists the package author name, e.g., `"author": "Genesis Gabiola <genesisbritanicogabiola@gmail.com> (https://genesisgabiola.now.sh)"`
  - can also use different format with `name`, `email` and `url` properties

  ```json
  "author": {
    "name": "Genesis Gabiola",
    "email": "genesisbritanicogabiola@gmail.com",
    "url": "https://genesisgabiola.now.sh"
  }
  ```

- `contributors` property lists the contributors in an array, e.g., `"contributors": ["Genesis Gabiola <genesisbritanicogabiola@gmail.com> (https://genesisgabiola.now.sh)"]`
  - can also use different format with `name`, `email` and `url` properties

  ```json
  "contributors": [
    {
      "name": "Genesis Gabiola",
      "email": "genesisbritanicogabiola@gmail.com",
      "url": "https://genesisgabiola.now.sh"
    }
  ]
  ```

- `bugs` property links to the package issue tracker, like a GitHub issues page, e.g., `"bugs": "https://github.com/genesisgabiola/package/issues"`
- `homepage` property sets the package homepage, e.g., `"homepage": "https://genesisgabiola.now.sh/package"`
- `version` property indicates the current version of the package, .e.g, `"version": "1.0.0"`
  - follows the semantic versioning (semver) notation
- `license` property indicates the license of the package, e.g., `"license": "MIT"`
- `keywords` property contains an array of keywords that associate with what the package does
  - helps people to find this package when navigating to similar packages

  ```json
  "keywords": [
    "email",
    "machine learning",
    "ai"
  ]
  ```

- `description` property contains a brief description of the package, e.g., `"description": "A package to work with strings"`
  - very useful, so that people can find out what the package is all about
- `repository` property specifies where this package repository is located, e.g., `"repository": "github:genesisgabiola/testing"`
  - github prefix can be change with other popular services, like gitlab or bitbucket
  - can also explicitly set the version control system, like git or svn

  ```json
  "repository": {
    "type": "git",
    "url": "https://github.com/genesisgabiola/testing.git"
  }
  ```

- `main` property set the entry point for the application, e.g., `"main": "src/main.js"`
  - when importing this package in an application, that's where the application will search for the module exports
- `private` property if set to `true`, prevents the app/package to be accidentally published on `npm`, e.g., `"private": true`
- `scripts` property defines a set of node scripts we can run

  ```json
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  }
  ```

- `dependencies` property sets a list of `npm` packages installed as dependencies

  ```json
  "dependencies": {
    "vue": "^2.5.2"
  }
  ```

- `devDependencies` property sets a list of `npm` packages installed as development dependencies

  ```js
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1"
  }
  ```

- `engines` property sets which versions of Node.js and other commands this package/app works on

  ```json
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0",
    "yarn": "^0.13.0"
  }
  ```

- `browserslist` property is used to tell which browsers (and their versions) we want to support
  - referenced by Babel, Autoprefixer, and other tools, to only add the polyfills and fallbacks needed to the browsers we target

  ```json
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
  ```

    - this config wants to support the last 2 major versions of all browsers with at least 1% of usage, except IE8 and lower
- command-specific properties
  - `package.json` file can also host command-specific configuration, e.g., for Babel, ESLint, and more
  - each has a specific property, like `eslintConfig`, `babel` and others


## The package-lock.json file

- `package-lock.json` file was introduced in version 5 of `npm`
  - tracks the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers
  - sets the currently installed version of each package **in stone**, and `npm` will use those exact versions when running `npm install`
  - needs to be committed to the Git repository, so it can be fetched by other people
- packages require other packages which shows from the `requires` property
- packages are added in alphabetical order into the file, and each one has:
  - `version` field
  - `resolved` field that points to the package location
  - `integrity` string that we can use to verify the package


## Updating packages

- `npm` calculates the dependencies and installs the latest available version of those
- packages installed will be added into `package.json` file
- `^1.3.1`, `npm` can update to patch and minor releases: `0.13.1`, `0.14.0` and so on
- if there is a new minor or patch release, `npm update` will updated the installed version, and the `package-lock.json` file diligently filled with the new version
- `package.json` remains unchanged
- `npm outdated` to discover new releases of the packages
- with major releases, `npm update` won't update the version of those
- install `npm-check-updates` package globally to update to a new major version all the packages
  - `ncu -u` will upgrade all the version hints in the `package.json` file, to `dependencies` and `devDependencies`, so npm can install the new major version
  - `npm install` to install the new versions first, if project is downloaded without `node_modules` dependencies

  ```sh
  $ npm install -g npm-check-updates
  $ ncu -u
  $ npm update
  # $ npm install
  ```


## Installed Packages Location

- 2 types of installation:
  - local (default) install 
  - global install
- by default, packages are installed in the current file tree, under `node_modules` subfolder
- `npm root -g` prints exact location of the global `node_modules`
  - with `nvm` it shows, e.g., `/home/genesis/.nvm/versions/node/v12.18.3/lib/node_modules`


## npx

- `npx` lets us run code built with Node and published through the npm registry
- Node developers used to publish most of the executable commands as global packages, in order to be in the path and executable immediately
- running `npx` automatically finds the correct reference of the command inside the `node_modules` folder of a project, without needing to know the exact path, and without requiring the package to be installed globally and in the user's path
- **installation-less command execution**
  - allowing to run commands without installing it locally
  - useful mostly because:
    1. no need to install anything
    2. can run different versions of the same command, using the syntax @version
  - some commands:
    - running `vue` CLI tool to create new applications and run them: `npx vue create my-vue-app`
    - creating a new React app using `create-react-app`: `npx create-react-app my-react-app`
- **run code using a different Node version**
  - use the `@` to specify the version, and combine with the `node` npm package
  - helps to avoid tools like `nvm` or the other Node version management tools

  ```sh
  $ npx node@10 -v #v10.16.4
  $ npx node@12 -v #v12.18.3
  ```

- **run arbitrary code snippets directly from a URL**
  - `npx` is not limited to the packages published on the npm registry
  - we can also run code that sits in a GitHub gist
