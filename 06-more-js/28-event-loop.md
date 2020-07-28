# The Event Loop

- [Introduction](#introduction)
- [A practical example with code](#a-practical-example-with-code)


## Introduction

- **Event Loop** is one of the most important aspects to understand about JS
  - order of instructions is not executed from top to bottom
  - functions invoked might be executed later than we might expect
- JS code runs single threaded, meaning it execute the codes one thing at a time
- **Note**: Avoid anything that could **block the thread**, e.g., synchronous network calls, or accessing files, and any other things that might take a lot of time to complete
  - JS does that using the **event loop**, when we call an asynchronous function in JS, that is queued into the event loop, and will only be executed when its turn comes
- browsers create an event loop for every browser tab
  - to make every process isolated from each other
  - and avoid a web page with infinite loops or heavy processing to block the entire browser
    - same happens for every Node.js program we run
  - sometimes API calls also run in their own event loop
    - **Web Workers** run in their own event loop as well
- any JS code that takes too long to return back control to the event loop will be blocked
  - even block the UI thread, and the user cannot click around, scroll the page, and so on
- almost all the I/O primitives in JS are non-blocking
  - network requests, Node.js filesystem operations, and so on
  - being blocking is the exception, and this is why JS is based so much on callbacks, and more recently on promises and async/await


## A practical example with code

- code will run the `foo()`  first, inside it will call `bar()`, then `baz()`

```js
const bar = () => console.log('bar');
const baz = () => console.log('baz');
const foo = () => {
  console.log('foo');
  bar();
  baz();
};

foo();
// Output:
// foo
// bar
// baz
```

- call stack looks will look like this:

  ![Call Stack](./img/call-stack-first-example.png "Call Stack")

- event loop on every iteration looks like this if there's something in the call stack, and executes it until the call stack is empty

  ![Execution Order](./img/execution-order-first-example.png "Execution Order")
