# Functions

## Table of Contents <!-- omit in toc -->

- [Functions](#functions)
- [Arrow Functions](#arrow-functions)
- [Nested Functions](#nested-functions)
- [Recursive Functions](#recursive-functions)


## Functions

- function is a block of code, self contained, e.g., **function declaration**
  - can be run several times by invoking the function call
  - can also have multiple parameters and invoke the function passing arguments
  - passing an incomplete arguments will result in `undefined` value
  - accepts any argument: numbers, strings, booleans, arrays, objects, and functions
- `typeof` is a unary operator that allows us to check the type of a variable
- adding variable with any value other than `null`, `0` or empty string as a condition will always be `true`
- we can also have default values for parameters, in case they are passed
- by default, a function returns `undefined`, unless return keyword with a value is added
  - returned value can be assigned to variable
  - use object or array to return multiple values
- functions can be defined inside other functions
  - nested function cannot be called from the outside of the enclosing function
  - we can also return a function from a function

  ```js
  // function declaration w/ parameters
  function getData(name = 'John', age = 24) {
    // Checked if age value is not undefined
    if (typeof age !== 'undefined') {
      //...
    }
  }

  getData('Harry', 28); // function call w/ arguments
  getData('Luke'); // age is undefined
  ```


## Arrow Functions

- arrow functions are anonymous and must be assigned to a variable
  - omit curly braces and write all on a single line if function body has just a single statement
  - allow us to have an implicit return
    - values are returned without having to use the `return` keyword
- parameters are passed in the parentheses
  - omit parentheses if only have one parameter
  - default parameters work the same way the regular functions and only return one value
    - can contain arrow function or regular function

```js
// regular function
let getData = function(name = 'John', age = 24) {
  //...
};

// arrow function
let getData = (name = 'John', age = 24) => {
  //...
};
```


## Nested Functions

- functions can be defined inside other functions
- nested function is scoped inside function, and cannot be called from the outside
- we could have 2 function define a function or variable with the same name inside other functions


## Recursive Functions

- recursive function is a function calling itself, which solves a problem in a neat way
- can be done using function declaration, function expression or arrow function
- factorial of number is a good example of using recursive function
  - multiply the number for (number - 1), (number - 2), until we reach the number 1
  - factorial of 4 is (4 * (4 - 1) * (4 - 2) * (4 - 3)) = 4 * 3 * 2 * 1, which is 24
  - not subtracting the number by 1 will run infinitely and return `RangeError: Maximum call stack size exceeded`
    - means that too many elements were put on the stack, and program crashed
  

  ```js
  const factorial = n => (n >= 1 ? n * factorial(n - 1) : 1);

  factorial(1); // 1
  factorial(2); // 2
  factorial(3); // 6
  factorial(4); // 24
  ```

- every time a function is invoked, JS needs to remember the current context before switching to the new one
  - so it puts that context on the **call stack**
- as soon as the function returns, JS goes to the call stack and picks the last element that was added, and resumes its execution
