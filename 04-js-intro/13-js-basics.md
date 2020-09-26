# The JavaScript Basics

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [History](#history)
- [Syntax of JS](#syntax-of-js)
- [Values](#values)
- [Variables](#variables)
- [Types](#types)
- [Expressions](#expressions)
- [Operators](#operators)
- [Precedence rules](#precedence-rules)
- [Comparison operators](#comparison-operators)
- [Conditionals](#conditionals)


## Introduction

- JS is mainly used to create
  - websites
  - web applications
  - server-side applications using Node.js
- can also be used to create
  - mobile applications using tools like React Native
  - programs for microcontrollers and the internet of things
  - smartwatch applications
- JS programming language is:
  - **high level**: which provides abstractions that allows us to ignore the details of the machine where it's running on
    - manages memory automatically with a garbage collector, so we can focus on the code instead of managing memory
  - **dynamic**: language (opposed to static) executes at runtime many of the things that a static language does at compile time
    - gives us powerful features like dynamic typing, late binding, reflection, functional programming, object runtime alteration, closures and much more
  - **dynamically typed**: which a variable does not enforce a type
    - can reassign any type to a variable, e.g., assigning an integer to a variable that holds a string
  - **loosely typed**: which does not enforce the type of an object
    - allows more flexibility but denying us type safety and type checking (which TypeScript provides)
  - **interpreted**: language which does not need a compilation stage before a program can run
    - browsers do compile JS before executing it, for performance reasons, but this is transparent: no additional step involved
  - **multi-paradigm**: which does not enforce any particular programming paradigm
    - JS can be written using an object-oriented paradigm, using prototypes and ES6 classes syntax
    - can be written in functional programming style, with its first-class functions
    - even in an imperative style


## History

- created in 1995
- first scripting language supported natively by browsers which gained competitive advantage over any other language
- mainly used for animation before
- JS is now widely used even outside the browser, with Node.js for backend development
  - powering database and more applications, embedded applications, mobile apps, TV sets apps


## Syntax of JS

- **white space** is not consider meaningful by JS
  - keep a well defined style and adhere to what people commonly use, enfore this using linter or style tool, e.g., _Prettier_
- JS is **case sensitive**, e.g., variable named `something` is different from `Something`
  - same for any identifier
- **literal** is defined as a value that is written in the source ocde, e.g., a number, a string, a boolean or also more advanced constructs, like Object Literals or Array Literals:

  ```js
  5
  'Test'
  true
  ['a', 'b']
  {color: 'red', shape: 'Rectangle'}
  ```

- **identifier** is a sequence of characters that can be used to identify a variable, a function, an object
  - can start with a letter, `$` or `_`, and it can contain digits
  - using Unicode, a letter can be any allowed char, e.g., emoji
  - `$` is commonly used to reference DOM elements
  - reserved names are for internal use nad can't be used as identifiers
  - some names are reserved for internal use, and can't be used as identifiers
- **comments** are one of the most important part of any program
  - let us add important information for future dev (or future self)
  - everything inside a comment is not consider a code, and are not visible outside the code
- **semicolons** are optionally terminated in every line of a JS program
  - in most cases, can also omit altogether from your programs
  - semicolons in JS are controversial and debatable, choose your preference


## Values

- `hello` and `12` are **value**s
- `string` and `number` are **types** of those values
- **type** is the kind of value, its category
- when reference is needed to a value, we assign it to **variable**
  - we access the value through the variable name


## Variables

- variable is a value assigned to an identifier, so we can reference and use it later in the program
- ways to declare variables
  - `const` defines a constant reference to a value, reference cannot be changed
    - cannot reassign a new value to it
    - must be initialized at the declaration time
  - `let` can assign a new value to it
    - values can be initialized later
  - until 2015, `var` was the only way to declare variable
  - stick using `const` and `let`
- cannot declare the same variable more than once
- **Note**: Always use `const` and only use `let` when you know you'll need to reassign a value to that variable
  -  if we know a value cannot be reassigned, it's one less source for bugs


## Types

- variables in JS do not have any type attached
  - they are _untyped_
- JS have 2 kind of types:
  - **primitive types**
    - numbers
    - strings
    - booleans
    - symbols
    - `null`
    - `undefined`
  - **object types** are anything that's not a primitive type
    - have a **propeties** and **methods**


## Expressions

- expression is a single unit of JS code that the JS engine can evaluate, and return a value
- **primary expressions**:

  ```js
  2
  0.02
  'something'
  true
  false
  this // the current scope
  undefined
  i // where i is a variable or a constant
  ```

- **arithmetic expressions** takes a variable and an operator, and result into a number
- **string expressions** results into a string
- **logical expressions** make use of logical operators and resolve to a boolean value


## Operators

- operators allow us to get two simple expressions and combine them to form a more complex expression
- **assignment operator** (`=`) is used to assign a value to a variable
- **addition operator** (`+`)
  - also used for string concatenation with strings

  ```js
  const three = 1 + 2
  const four = three + 1

  'three' + 1 // three1
  ```

- **subtraction operator** (`-`)
- **division operator** (`/`) returns the quotient of the first operator and the second
  - if divide by zero, JS does not raise any error but returns `Infinity` value (or `-Infinity` if the value is negative) 

  ```js
  const result = 20 / 5 // result === 4
  const result = 20 / 7 // result === 2.857142857142857

  1 / 0 // Infinity
  -1 / 0 // -Infinity
  ```

- **remainder operator** (`%`) returns the remaining value when divided
  - a remainder by zero is always `NaN`, a special value that means "Not a Number"

  ```js
  const result = 20 % 5 // result === 0
  const result = 20 % 7 // result === 6

  1 % 0 // NaN
  -1 % 0 // NaN
  ```

- **multiplication operator** (`*`) multiply two numbers
- **exponentiation operator** (`**`) will raise the first operand to the power of second operand

  ```js
  1 ** 2 //1
  2 ** 1 //2
  2 ** 2 //4
  2 ** 8 //256
  8 ** 2 //64
  ```


## Precedence rules

- every complex statement with multiple operators in the same line will introduce precedence problems
- operations on the same level are executed in the order they are found, from left to right

|  Operator   |       Description       |
| :---------: | :---------------------: |
| `*` `/` `%` | multiplication/division |
|   `+` `-`   |  addition/subtraction   |
|     `=`     |       assignment        |


## Comparison operators

- **comparison operators** always return a boolean, true or false
  - can use to compare two numbers or two string
- **disequality comparison operators**:
  - `<` means "less than"
  - `<=` means "less than or equal to"
  - `>` means "greater than"
  - `>=` means "greater than or equal to"
- **equality operators**:
  - `==` checks for equality
  - `!=` checks for inequality
  - `===` checks for strict equality
  - `!==` checks for strict inequality
- **Note**: Always use _strict equality_ to prevent some subtle problems


## Conditionals

- `if` statement is used to make the program take a route, or another, depending on the result of an expression evaluation
  - the conditional checks the expression passed to it for true or false value
  - curly braces (`{ }`) are called **block**, which is used to group different statements
    - if only have single statement, block can be omitted
- `else` statement can be provided when conditional is `false`
  - another if/else statement can be nested

```js
if (a === true) {
  //do something
} else if (b === true) {
  //do something else
} else {
  //fallback
}
```
