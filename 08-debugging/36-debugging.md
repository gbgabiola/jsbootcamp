# Debugging

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Enter Debugging](#enter-debugging)
- [Figuring out where the error could be](#figuring-out-where-the-error-could-be)
- [alert and console.log](#alert-and-consolelog)
- [Inspecting objects](#inspecting-objects)


## Introduction

- bug is a problem that we did not see or anticipate when we set out to write the code
  - might be discovered only when we release our program to users (which is the worst situation)
  - can be discovered by ourselves when we test the program
    - can also happen when working perfectly before, then starts to break when we changed one line
- those are called regression bugs


## Enter Debugging

- try to avoid bugs as much as possible, by carefully **thinking** about how our program should work, even before we write a single line of code
- analyzing every single line of code for possible issues or side effects or unconsidered things
- solving a bug:
  - hardest part is always identifying the bug
  - second hardest part is figuring out why this bug happens
  - solving the bug is generally the easiest, once we know all of the above
- two techniques to solve the bug:
  - figure out the values of the state (variables content)
    - flow of the program
    - and printing to the logs, or to the output of our program
    - easier with CLI apps
  - using debugger
- debugger is a tool that can be either be provided by our programming language compiler, or by the tooling that's built around it, e.g.,
  - Visual Studio Code editor by Microsoft provides a JS debugger
  - Chrome Developer Tools
  - Firefox Developer Tools
- using debugger we will be able to
  - stop the running of the program at any time we want
  - watch the content of the variables
  - execute any code we want
  - step through the program execution one line of code at a time


## Figuring out where the error could be

- debugging is one of those skills that's core to the activity of a programmer
- program is not working correctly, e.g., it's crashing, it's slow or it's printing wrong information
- first step is always to look at what is happening, and trying to determine where is the problem coming from
  - is it a problem in the environment?
  - is it a problem in the input you gave to the program?
  - is it a one-time crash due to too much memory usage?
  - or is it happening every time you run it?
- once we have some sort of idea where the error is coming from, we can start checking that specific part of code
- simplest way to debug is by reading the code we wrote aloud
  - there is some magical thing in hearing from our own voice that does not happen when we read in silence


## alert and console.log

- next logical step is to start adding a few lines into our code that can shed some light
- `alert()` and `console.log()` are often used in JS frontend code
- `alert()` works fine with string and numbers but not with array or objects
  - we can use Console API, `console.log()` which values are printed in the JS console of browser developer tools


## Inspecting objects

```js
const car = {
  color: 'black',
  manufacturer: 'Ford',
  model: 'Fiesta'
};
```

### `console.log`

```js
console.log(car);
```

### `console.dir`

```js
console.dir(car);

// works exactly like console.log('%O', car);
```

### `JSON.stringify`

- `JSON.stringify()` method prints the object as a string representation
  - has the advantage of working outside of the console, as we can print the object in the screen 
    - or can combine it with the Console API to print this in the console
  - adding paremeters can make it print more nicely
  - last number determines the amount of spaces in indentation

  ```js
  // JSON.stringify(car);
  // JSON.stringify(car, null, 2);
  console.log(JSON.stringify(car, null, 2));
  ```

### `toSource`

- `toSource()` method available on most types, _only in Firefox_ (and browsers based on it)

  ```js
  car.toSource();
  ```

### Iterate the properties using a loop

- `for...in` loop prints the object properties
  - use `hasOwnProperty()` method to avoid printing inherited properties

  ```js
  const inspect = obj => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`${prop}: ${obj[prop]}`);
      }
    }
  };

  inspect(car);
  ```

### Inspect in Node.js

- `inspect()` method exposed by the `util` package works great in Node.js
  - but, a much better presentation is provided by `console.dir()`, with the `colors` property enabled

  ```js
  util.inspect(car);
  // console.dir(car, { colors: true });
  ```
