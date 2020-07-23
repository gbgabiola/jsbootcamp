# Errors and Exceptions

- [Exceptions](#exceptions)
- [Errors](#errors)


## Exceptions

- exceptions is the JS idiomatic way to handle the situation when the code runs into an unexpected problem
  - created using the `throw` keyword, e.g., `throw value`
    - where `value` can be any JS value including a string, a number or an object
- as soon as JS executes this line, the normal program flow is halted and the control is held back to the nearest **exception handler**
- exception handler is a `try`/`catch` statement
- any exception included in the `try` block is handled in the `catch` block
  - `e` is the exception value

  ```js
  try {
    //lines of code
  } catch (e) {

  }
  ```

- we can add multiple handlers, that can catch different kinds of errors


## Errors

- when an exception happens, an error is fired
- in JS we have 8 error objects:
  - Error
  - EvalError
  - RangeError
  - ReferenceError
  - SyntaxError
  - TypeError
  - URIError

### Error

- `Error` is the generic error and it's the one all the other error objects inherit from
  - will never see an instance of `Error` directly, but rather JS fires one of the other errors, which inherit from `Error`
- contains 2 properties:
  - `message`: the error description, a human readable message that should explain what error happened
  - `name`: the type of error occurred (assumes the value of the specific error object name, e.g., `TypeError` or `SyntaxError`)
- provides just one method, `toString()`, to generate a string from the error, which can be used to print it to screen

### EvalError

- `EvalError` is defined in modern JS but never actually thrown by JS, and remains for compatibility purposes
  - defined in ECMAScript 3 but it's not present in the standard since ECMAScript 5.1
- was used to indicate that the global function `eval()` was used incorrectly, in a way incompatible with its definition

### RangeError

- `RangeError` will fire when a numeric value is not in its range of allowed values
  - e.g., setting an array length to a negative value or number higher than `4294967295`
    - specified in the JS spec as the maximum range of a 32-bit unsigned integer, equivalent to `Math.pow(2, 32) - 1`

  ```js
  [].length = -1; // RangeError: Invalid array length
  [].length = 4294967296; // RangeError: Invalid array length
  ```

### ReferenceError

- `ReferenceError` indicates that an invalid reference value has been detected: a JS program is trying to read a variable that does not exist

  ```js
  num; // ReferenceError: num is not defined
  num = 2; // ReferenceError: num is not defined
  ```

- **Note**: the above statement will create a `num` variable on the global object if not in **strict mode**

### SyntaxError

- `SyntaxError` is raised when a syntax error is found in a program, e.g.,
  - function statement without name:

    ```js
    function() {
      return 'Hi!'
    }
    // SyntaxError: function statement requires a name
    ```

  - missing comma after an object property definition:

    ```js
    const person = {
      name: 'John'
      age: 48
    };
    // SyntaxError: missing } after property list
    ```

### TypeError

- `TypeError` happens when a value has a type that's different than the one expected, .e.g., trying to invoke a number

  ```js
  1(); // TypeError: 1 is not a function
  ```

### URIError

- URIError is raised when calling one of the global functions that work with URIs
  - `decodeURI()`
  - `decodeURIComponent()`
  - `encodeURI()`
  - `encodeURIComponent()`
- and passing an invalid URI
