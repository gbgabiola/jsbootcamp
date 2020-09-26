# Asynchronous Programming

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Callbacks Introduction](#callbacks-introduction)
- [Handling Errors in Callbacks](#handling-errors-in-callbacks)
- [The problem with excessive callbacks nesting](#the-problem-with-excessive-callbacks-nesting)
- [Promises Introduction](#promises-introduction)
- [async/await Introduction](#asyncawait-introduction)
- [Example: run a function asynchronously](#example-run-a-function-asynchronously)
- [Example: get a JSON resource using the Fetch API, and parse it](#example-get-a-json-resource-using-the-fetch-api-and-parse-it)
- [Multiple async functions in series](#multiple-async-functions-in-series)
- [setTimeout()](#settimeout)
- [setInterval()](#setinterval)


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


## Callbacks Introduction

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
  });
  ```


## The problem with excessive callbacks nesting

- with callbacks we'd be passing a function to another function call, that would be called when the function has finished processing

  ```js
  doSomething(result => {
    console.log(result);
  });
  ```

- when the doSomething code ends, it calls the function received as a parameter:

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


## Promises Introduction

- promises are an alternative way to deal with asynchronous code
- we first call the function, then we have a `then()` method that is called when the function ends
  - indentation doesn't matter, but often used for clarity
- use `catch()` method to detect errors

  ```js
  doSomething()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  ```

- to be able to use this syntax, the `doSomething()` function implementation must use the Promises API
  - declare it as a promise object and pass a function in the Promise constructor
  - function receives 2 parameters: a function we call to resolve or reject the promise
- resolving a promise means complete it successfully (results in calling the `then()` method in who uses it)
- rejecting a promise means ending it with an error (results in calling the `catch()` method in who uses it)

  ```js
  const doSomething = () =>
    new Promise((resolve, reject) => {
      // some code
      const success = /* .. */;
      if (success) {
        resolve('ok');
      } else {
        reject('this error occurred');
      }
    });
  ```


## async/await Introduction

- async functions are higher level abstraction over promises
  - returns a promise

  ```js
  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>
        resolve('some data'), 2000);
    });
  };
  ```
- any code that want to use async function will use the `await` keyword right before the function
- whenever we use the `await` keyword, we must do so inside a function defined as `async`

  ```js
  const doSomething = async () => {
    const data = await getData();
    console.log(data);
  };
  ```

- async/await allows us to have a cleaner code and a simple mental model to work with asynchronous code
  - major benefits will arise when the code is much more complex


## Example: run a function asynchronously

```js
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000);
  });
};

const doSomething = async () => {
  console.log(await doSomethingAsync());
};

console.log('Before');
doSomething();
console.log('After');
```

Output:

```js
Before
After
I did something // after 3s
```


## Example: get a JSON resource using the Fetch API, and parse it

- using promises:

  ```js
  const getFirstUserData = () => {
    // get users list
    return fetch('/users.json')
      // parse JSON
      .then(response => response.json())
      // pick first user
      .then(users => users[0])
      // get user data
      .then(user => fetch(`/users/${user.name}`))
      // parse JSON
      .then(userResponse => response.json());
  };

  getFirstUserData();
  ```

- using await/async:

  ```js
  const getFirstUserData = async () => {
    // get users list
    const response = await fetch('/users.json');
    // parse JSON
    const users = await response.json();
    // pick first user
    const user = users[0];
    // get user data
    const userResponse = await fetch(`/users/${user.name}`);
    // parse JSON
    const userData = await user.json();
    return userData;
  };

  getFirstUserData();
  ```


## Multiple async functions in series

- async functions can be chained very easily, and the syntax is much more readable than with plain promises

  ```js
  const promiseToDoSomething = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000);
    });
  };

  const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething();
    return `${something} and I watched`;
  };

  const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething();
    return `${something} and I watched as well`;
  };

  watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res);
  });

  // Output: I did something and I watched and I watched as well
  ```


## setTimeout()

- `setTimeout()` is used to delay the execution later by specifying a callback function and a delay value in milliseconds

  ```js
  setTimeout(() => {
    // runs after 2 seconds
  }, 2000);

  setTimeout(() => {
    // runs after 50 milliseconds
  }, 50);
  ```

- can call whatever other function, or pass an existing function name, and a set of parameters:

  ```js
  const myFunction = (firstParam, secondParam) => {
    // do something
  };

  // runs after 2 seconds
  setTimeout(myFunction, 2000, firstParam, secondParam);
  ```

- can store variable, and clear it using `clearTimeout()` to delete this scheduled function execution
  - not generally used

  ```js
  const id = setTimeout(() => {
    // should run after 2 seconds
  }, 2000);

  // I changed my mind
  clearTimeout(id);
  ```


## setInterval()

- `setInterval()` is a function similar to setTimeout
  - instead of running the callback function once, it will run it forever, at the specific time interval specified (milliseconds)
- `clearInterval()` is used to stop the execution by passing the interval id that setInterval returned
  
  ```js
  const id = setInterval(() => {
    // runs every 2 seconds
  }, 2000);

  clearInterval(id);
  ```

- common to call `clearInterval()` inside the setInterval callback function, to let it auto-determine if it should run again or stop
- runs something unless App.somethingIWait has the value `arrived`

  ```js
  const interval = setInterval(() => {
    if (App.somethingIWait === 'arrived') {
      clearInterval(interval);
      return;
    }
    // otherwise do things
  }, 100);
  ```
