# ESLint

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Install ESLint](#install-eslint)
- [Airbnb Style Guide](#airbnb-style-guide)
- [Configuring ESLint](#configuring-eslint)
- [Disabling Rules](#disabling-rules)


## Introduction

- ESLint is a JS programming language linter
- linter is a tool that identifies issues in our code
- linter on our code can tell us, if the code:
  - adheres to a certain set of syntax conventions
  - contains possible sources of problems
  - matches a set of standards you or your team define
- raise warnings that we can analyze and give us actionable data to improve our code
- useful because JS, being an interpreted language, does not have a compilation step and many errors are only possibly found at runtime
- errors the ESLint can catch:
  - avoid infinite loops in the for loop conditions
  - make sure all getter methods return something
  - disallow `console.log` statements
  - check for duplicate cases in a switch
  - check for unreachable code
  - check for JSDoc validity
- [full list of rules](https://eslint.org/docs/rules/)
- very flexible and configurable, we can enable rules in `.eslintrc` configuration file
  - can be global or specific to a project


## Install ESLint

- ESlint can be installed globally to invoke it from command line, or install it locally per project
- install ESLint globally

  ```sh
  $ npm install -g eslint
  $ eslint --init # create a `.eslintrc` configuration file
  $ eslint yourfile.js # run ESLint on any file
  ```

- install ESLint locally

  ```sh
  $ npm install eslint --save-dev
  $ ./node_modules/.bin/eslint --init # create a `.eslintrc` configuration file
  $ ./node_modules/.bin/eslint yourfile.js # run ESLint on any file
  ```


## Airbnb Style Guide

- ESLint can be configured in many different ways
- using Airbnb JS coding style to lint our code is a common setup
- install the Airbnb configuration package:

  ```sh
  $ npm install --save-dev eslint-config-airbnb
  ```

- create `.eslintrc` file in the root the project and add:

  ```json
  {
    "extends": "airbnb",
  }
  ```


## Configuring ESLint

- ES5 is currently set as default version
- setting this property in `.eslintrc` to:
  - turn on ES6 (or higher)
  - force strict mode

  ```json
  {
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "impliedStrict": true
      }
    }
  }
  ```

- check [detailed guide](https://eslint.org/docs/user-guide/configuring) on rules


## Disabling Rules

- entirely on a few lines:

  ```js
  /* eslint-disable */
  alert('test');
  /* eslint-enable */
  ```

- on single line:

  ```js
  alert('test'); // eslint-disable-line
  ```

- one or more specific rules for multiple lines:

  ```js
  /* eslint-disable no-alert, no-console */
  alert('test');
  console.log('test');
  /* eslint-enable no-alert, no-console */
  ```

- for a single line:

  ```js
  alert('test'); // eslint-disable-line no-alert, quotes, semi
  ```
