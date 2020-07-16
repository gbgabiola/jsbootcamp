# Asynchronous Programming

- [Introduction](#introduction)
- [Callbacks](#callbacks)
- [Handling Errors in Callbacks](#handling-errors-in-callbacks)
- [The problem with excessive callbacks nesting](#the-problem-with-excessive-callbacks-nesting)


## Introduction

- asynchronous means that things can happen independently of the main program flow
- every program runs for a specific time slot, and then it stops its execution to let another program continue its execution
  - computers are asynchronous by design
- programs internally use _interrupts_, a signal that's emitted to the processor to gain the attention of the system
- normally, programming languages are synchronous, and some provide a way to manage asynchronicity, in the language or through libraries
  - C, Java, C#, PHP, Go, Ruby, Swift, and Python are synchronous by default
  - some of them handle async by using threads, spawning a new process
- JS is **synchronous** by default and is single threaded
  - code cannot create new threads and run in parallel
- **browser** provides a set of APIs that can handle synchronous programming functionality
- Node.js introduced a non-blocking I/O environment to extend this concept to file access, network calls and so on
- JS solves the synchronous problem in 3 different ways: callbacks, promises and async/await


## Callbacks

- timers uses callbacks and not part of JS, but provided by the browser and Node.js environment
- `setTimeout()` function accepts 2 arguments: a function, and a number
  - number is the milliseconds that must pass before the function is ran

  ```js
  console.log('before');
  setTimeout(() => {
    // runs after 2 seconds
    console.log('inside the function');
  }, 2000);
  console.log('after');
  ```

  Output:

  ```
  before
  after
  inside the function
  ```

- callback function is executed asynchronously
  - very common pattern when working with the file system, the network, events, or the DOM in the browser
- to implement callbacks: define a function that accepts a callback parameter, which is a function
  - when the code is ready to invoke the callback, we invoke it passing the result

  ```js
  const doSomething = callback => {
    //do things
    //do things
    const result = 'test';
    callback(result);
  };

  doSomething(result => {
    console.log(result);
  });
  ```


## Handling Errors in Callbacks

- one very common strategy is to use what Node.js adopted: the first parameter in any callback function is the error object: **error-first callbacks**
  - if there is no error, the object is null
  - if there is an error, it contains some description of the error and other information

  ```js
  fs.readFile('/file.json', (err, data) => {
    if (err !== null) {
      // handle error
      console.log(err);
      return;
    }

    // no errors, process data
    console.log(data);
  })
  ```


## The problem with excessive callbacks nesting

- with callbacks we'd be passing a function to another function call, that would be called when the function has finished processing

  ```js
  doSomething(result => {
    console.log(result
    );
  });
  ```

- when the doSomething code ends, it calls the function received as a a parameter

  ```js
  const doSomething = callback => {
    //do things
    //do things
    const result = /* .. */;
    callback(result);
  };
  ```

- main problem with this approach
  - if we need to use the result of this function in the rest of our code, all our code must be nested inside the callback
  - 2-3 callbacks is usually defined "_callback hell_" with many levels of functions indented into other functions

  ```js
  doSomething(result => {
    doSomethingElse(anotherResult => {
      doSomethingElseAgain(yetAnotherResult => {
        console.log(result);
      });
    });
  });
  ```

- promises are one way to deal with this
