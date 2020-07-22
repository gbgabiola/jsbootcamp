# Modules

- [The ES Modules Syntax](#the-es-modules-syntax)
- [Other import/export options](#other-importexport-options)


## The ES Modules Syntax

- modules let us encapsulate all sorts of functionality, and expose this functionality to other JS files, as libraries
  - we can import functionality from other files, and we can export our functionality to be used by other files
  - supported by all modern browsers
- import a module syntax:

  ```js
  import package from 'module-name';
  ```

- a module is a JS file that **exports** one or more values (objects, functions or variables), using the export keyword, e.g., this module exports a function that returns a string uppercase: uppercase.js

  ```js
  export default str => str.toUpperCase();
  ```

- this module defines a single, **default export**, so it can be an anonymous function
  - otherwise it would need a name to distinguish it from other exports
- now, **any other JS module** can import the functionality offered by uppercase.js by importing it
- an HTML page can add a module by using a `<script>` tag with the special `type="module"` attribute:

  ```js
  <script type="module" src="index.js"></script>
  ```

- **Note**:
  - this module import behaves like a defer script load. See efficiently load JS with defer and async
  - any script loaded with `type="module"` is loaded in strict mode
- the uppercase.js module defines a **default export**, so when we import it, we can assign it a name we prefer
  - or use an absolute path for the module import, to reference modules defined on another domain

  ```js
  import toUpperCase from './uppercase.js'; // relative path
  import toUpperCase from 'https://flavio-es-modules-example.glitch.me/uppercase.js'; // absolute path

  // using it
  toUpperCase('test'); //'TEST'
  ```


## Other import/export options

- we can also export more than one thing

  ```js
  const a = 1;
  const b = 2;
  const c = 3;

  export { a, b, c };
  ```

- another module can import all those exports using `*`
  - or import just a few of those exports, using the destructuring assignment
  - and rename any import using `as`

  ```js
  import * from 'module';

  import { a } from 'module';
  import { a, b as two } from 'module'
  ```

- we can import the default export, and any non-default export by name, like in this common React import

  ```js
  import React, { Component } from 'react';
  ```
