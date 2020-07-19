# More JavaScript Concepts

- [ECMAScript](#ecmascript)
- [Strict Mode](#strict-mode)
- [`var`, `let` and `const`](#var-let-and-const)


## ECMAScript

- ECMAScript is the **standard upon which JS is based**, and often abbreviated to **ES**
- Ecma International is a Swiss standards association in charge of defining international standards
- JS presented by Netscape and Sun Microsystems to Ecma and named it ECMA-262 alias **ECMAScript**
- TC39 (are companies involved in JS and browser vendors, including Mozilla, Google, Facebook, Apple, Microsoft, Intel, PayPal, SalesForce and others) is the committee that evolves JS
- ES5 is the official name for the ECMAScript specification update published in 2009
- name was changed from ES6 to ES2015, but since this was done late, people still referenced it as ES6 (modern JS)
- **Note**: every summer JS gets some new features which might be useful
  - or might be a less popular which is only used by very advanced developers


## Strict Mode

- strict mode is a JS feature that was introduced in ES5, a way to make JS behave in a **better way**
  - removes some unwanted functionality of JS that was possible in ES3, and deprecated since ES5 (but not removed because of backwards compatibility requirements)
- normal JS is often referred as **sloppy mode** 
- we can put `'use strict'` at the beginning of a file to enable strict mode to all the code contained in the file
  - inside ES Modules, strict mode is enabled by default


## `var`, `let` and `const`

- until ES2015, `var` was the only construct available for defining variables
- **Note**: Always use `const` and only use `let` when you know you'll need to reassign a value to that variable
  - only use `var` for backwards compatibility purposes
- `const` and `let` has **sensible scoping**, same scoping that is used in more or less all popular programming languages, block scoping
  - variables declared using `var` are scoped to the nearest function
- `const` and `let` are not **hoisted**, but they are initialized when evaluated
  - `var` are hoisted to the top of the function, so they are available even in the lines before their declaration
- declaring a `let` variable with the same name as one that already exists will result in error (strict mode)
- declaring a `var` variable outside of any function is assigned to the **global object** (window inside the browser)
  - `let` variable will be available but not attached to the global object, so it's not reachable outside the file
