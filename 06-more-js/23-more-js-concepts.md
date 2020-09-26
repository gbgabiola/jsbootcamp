# More JavaScript Concepts

## Table of Contents <!-- omit in toc -->

- [ECMAScript](#ecmascript)
- [Strict Mode](#strict-mode)
- [`var`, `let` and `const`](#var-let-and-const)
- [Hoisting](#hoisting)
- [Scope](#scope)
- [Immediately-invoked Function Expression](#immediately-invoked-function-expression)
- [Type Conversions](#type-conversions)
- [this](#this)
- [Automatic Semicolon Insertion](#automatic-semicolon-insertion)
- [Switch Conditionals](#switch-conditionals)


## ECMAScript

- ECMAScript is the **standard upon which JS is based**, and often abbreviated to **ES**
- Ecma International is a Swiss standards association in charge of defining international standards
- JS presented by Netscape and Sun Microsystems to Ecma and named it ECMA-262 alias **ECMAScript**
- TC39 (are companies involved in JS and browser vendors, including Mozilla, Google, Facebook, Apple, Microsoft, Intel, PayPal, SalesForce and others) is the committee that evolves JS
- ES5 is the official name for the ECMAScript specification update published in 2009
- name was changed from ES6 to ES2015, but since this was done late, people still referenced it as ES6 (modern JS)
- **Note**: every summer, JS gets some new features which might be useful
  - or might be a less popular which is only used by very advanced developers


## Strict Mode

- strict mode is a JS feature that was introduced in ES5, a way to make JS behave in a **better way**
  - removes some unwanted functionality of JS that was possible in ES3, and deprecated since ES5 (but not removed because of backwards compatibility requirements)
- normal JS is often referred as **sloppy mode** 
- we can put `'use strict'` at the beginning of a file to enable strict mode to all the code contained in the file
  - inside ES Modules, strict mode is enabled by default


## `var`, `let` and `const`

- until ES2015, `var` was the only construct available for defining variables
- **Note**: always use `const` and only use `let` when you know you'll need to reassign a value to that variable
  - only use `var` for backwards compatibility purposes
- `const` and `let` has **sensible scoping**, same scoping that is used in more or less all popular programming languages, block scoping
  - variables declared using `var` are scoped to the nearest function
- `const` and `let` are not **hoisted**, but they are initialized when evaluated
  - `var` are hoisted to the top of the function, so they are available even in the lines before their declaration
- declaring a `let` variable with the same name as one that already exists will result in error (strict mode)
- declaring a `var` variable outside of any function is assigned to the **global object** (window inside the browser)
  - `let` variable will be available but not attached to the global object, so it's not reachable outside the file


## Hoisting

- JS reorders the code according to some rules before executing it
- **Note**: **function declarations** are loaded before any code is executed while **function expressions** load only when the interpreter reaches that line of code

  ```js
  dosomething();
  function dosomething() {
    console.log('did something');
  }

  // this is what happens behind the scene
  function dosomething() {
    console.log('did something');
  }
  dosomething();
  ```

- internally, JS moves the function declaration before its call
- **named function expression** uses variable declaration which is hoisted, but not the value, so not the function
  - will result in 'not defined' or 'cannot access function before initialization' error
- `var` declarations are hoisted and initialized with `undefined` as a value, while `const` and `let` are hoisted but not initialized
  - using this will result in 'not a function' error

  ```js
  dosomething();
  const dosomething = function dosomething() {
    console.log('did something');
  };
  ```


## Scope

- scoping is the set of rules that's defined in a programming language to determine the value of a variable
- JS uses **lexical scoping**, which means that the value of a variable is defined by its position when it's written
  - not when it's called, which is something that happens with the dynamic scoping
- scope is the set of variables that's visible to a part of the program
- any variable defined outside function or block is attached to the global object and it has global scoped
  - available in every part of the program
- `var` inside a function is only visible inside that function, like parameters they are function scoped
  - JS _moves all variable declarations on top_ before executing it (called **hoisting**)
  - always declare variables at the beginning of a function
- `let` and `const` are block scoped and only visible inside the block where it resides
- using undeclared variables are attached to the global scope, which can be a bad source of bugs
- **Note**: any variable defined in a function or block with the same name as a global variable takes precedence over the global variable
  - always declares a variable before using them 


## Immediately-invoked Function Expression

- **Immediately-invoked Function Expression** (IIFE) is used to execute functions immediately, as soon as they are created
  - useful because **they don't pollute the global object**, and a simple way to **isolate variables declarations**
- function defined inside parentheses, and then append `()` to execute that function
  - internally, considered as function expression
  - function declaration without a name would be invalid because it requires a name

  ```js
  (function() {
    /* */
  })();

  // arrow function
  (() => {
    /* */
  })();
  ```

- adding semicolon (`;`) at the start of IIFE when not using semicolons to prevents the issue when getting an error because of the previous parentheses


## Type Conversions

### Converting to Strings

- calling the `toString()` method on any value to creates a string value corresponding to that type
  - or passing any value to the `String()` global function

  ```js
  // Number to String
  String(10); // '10'
  (10).toString(); // '10'

  // Boolean to String
  String(true); // 'true'
  false.toString(); // 'false'

  // Date to String
  String(new Date('2019-01-22'));
  // 'Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)'

  (new Date('2019-01-22')).toString();
  // 'Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)'

  // Special cases with String
  String(null); // 'null'
  String(undefined); // 'undefined'
  String(NaN); // 'NaN'
  ```

### Converting to Numbers

- passing aany value to `Number()` global function
  - other ways are: `parseInt()`, `parseFloat()`, `Math.floor()`, the unary `+` operator
- strings are trimmed before converting to numbers
- empty string defaults to 0
- if string contains invalid characters, it will generate a `NaN`
- boolean value returns either 0 or 1
- passing a `Date` object to `Number()` returns the date timestamp

  ```js
  // String to Number
  Number(' 1 '); // 1
  Number(''); // 0
  Number('12.2'); // 12.2

  // Boolean to Number
  Number(true); // 1
  Number(false); // 0

  Number(null); // 0
  Number(undefined); // NaN
  Number(NaN); // NaN
  ```

### Converting to Booleans

- passing any value to `Boolean()` can be converted to boolean
- all values will resolve to `true` except:

  ```js
  Boolean(false); // false
  Boolean(0); // false
  Boolean(NaN); // false
  Boolean(''); // false
  Boolean(null); // false
  Boolean(undefined); // false
  ```


## this

- `this` keyword has different values depending on where it's used
  - outside any object, `this` in **strict mode** is always `undefined`

### `this` in methods

- a method is a function attached to an object
- `this` is automatically bound to the object when using regular function

  ```js
  const car = {
    maker: 'Ferrari',
    model: 'Testarossa',

    drive() {
      console.log(`Driving a ${this.maker} ${this.model} car!`);
    }
  };

  car.drive(); // Driving a Ferrari Testarossa car!
  ```

- `drive() {...}` and `drive: function() {...}` and `car.drive = function() {...}` methods are all just the same
- arrow functions do not work the same way
  - e.g., `drive: () => {...}` returns 'Driving a undefined undefined car!'

### The special case of browser event handlers

- in event handlers callbacks, `this` refers to the HTML element that received the event

  ```js
  document.querySelector('#button').addEventListener('click', function(e) {
    console.log(this); // HTMLElement
  });
  ```

- we can bind it using

  ```js
  document.querySelector('#button').addEventListener(
  'click',
    function(e) {
      console.log(this); // Window if global, or your context
    }.bind(this)
  );
  ```


## Automatic Semicolon Insertion

- JS does not strictly require semicolons, and when semicolon is needed, it adds it behind the scenes, this process is called **Automatic Semicolon Insertion**

### The rules of JavaScript Automatic Semicolon Insertion

The JS parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:

- when the next line starts with code that breaks the current one (code can spawn on multiple lines)
- when the next line starts with a `}`, closing the current block
- when the end of the source code file is reached
- when there is a return statement on its own line
- when there is a `break` statement on its own line
- when there is a `throw` statement on its own line
- when there is a `continue` statement on its own line

**Note**:

- be careful with return statements. If you return something, add it on the same line as the return (same for `break`, `throw`, `continue`)
- never start a line with parentheses, those might be concatenated with the previous line to form a function call, or array element reference
- always test your code to make sure it does what you want


## Switch Conditionals

- `switch` conditional are great for multiple conditions
  - add `break` statement at the bottom of each case, otherwise JavaScript will also execute the code in the next case
  - when used inside a function, if the switch defines a return value, instead of using break we can just use `return`
  - we can provide a `default` special case, which is called when no case handles the result of the expression

  ```js
  const a = 2;
  switch (a) {
    case 1:
      // handle case a is 1
      break;
    case 2:
      // handle case a is 2
      break;
    case 3:
      // handle case a is 3
      break;
    default:
      // handle all other cases
      break;
  }
  ```
