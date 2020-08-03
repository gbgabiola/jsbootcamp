# Events

- [Introduction](#introduction)
- [Inline event handlers](#inline-event-handlers)
- [DOM on-event handlers](#dom-on-event-handlers)
- [addEventListener](#addeventlistener)


## Introduction

- JS in the browser uses an event-driven programming model
  - event could be the DOM is loaded, or an asynchronous request that finishes fetching, or a user clicking an element or scrolling the page, or the user types on the keyboard

### Event handlers

- **Event Handler** is a function that's called to respond to an event
  - we can register multiple handlers for the same event, and they will all be called when that event happens
- 3 ways to register an event handler:
  - Inline event handlers
  - DOM on-event handlers
  - addEventListener


## Inline event handlers

- inline event handlers was the only way in the JS early days, but very rarely used today, due to its constraints

  ```html
  <a href="#" onclick="alert('link clicked')">A link</a>
  ```


## DOM on-event handlers

- DOM on-event handlers is common when an object has at most one event handler, as there is no way to add multiple handlers in this case:

  ```js
  document.querySelector('a').onclick = () => {
    alert('link clicked');
  };
  ```

- we can check if an handler is already assigned to an element using:

  ```js
  if ('onclick' in document.querySelector('a')) {
    alert('onclick handler already registered');
  }
  ```


## addEventListener

- `addEventListener` allows to register as many handlers as we need
  - it's the _modern way_ and mostly used
