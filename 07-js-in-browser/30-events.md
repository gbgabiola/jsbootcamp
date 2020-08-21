# Events

- [Introduction](#introduction)
- [Inline event handlers](#inline-event-handlers)
- [DOM on-event handlers](#dom-on-event-handlers)
- [addEventListener](#addeventlistener)
- [The Event object](#the-event-object)
- [Mouse events](#mouse-events)
- [Touch Events](#touch-events)
- [Keyboard events](#keyboard-events)
- [Event bubbling and capturing](#event-bubbling-and-capturing)
- [Stopping the propagation](#stopping-the-propagation)


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
  - _modern way_ and mostly used
  - sometimes called on `window`, sometimes on a specific DOM element

  ```js
  window.addEventListener('load', () => {
    //window loaded
  });

  document.querySelector('div').addEventListener('click', () => {
    //
  });
  ```

- we can listen on `window` to intercept "global" events, like the usage of the keyboard, and we can listen on specific elements to check events happening specifically on them, like a mouse click on a button


## The Event object

- event handler gets an `Event` object as the first parameter:
- this object contains useful properties and methods:
  - `target` is the DOM element that originated the event
  - `type` of event
  - `stopPropagation()` called to stop propagating the event in the DOM
  - and more, [see the full list here](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- each events implement an event that extend this base `Event` object


## Mouse events

- ability to interact with mouse events
  - `mousedown` the mouse button was pressed
  - `mouseup` the mouse button was released
  - `click` a click event
  - `dblclick` a double click event
  - `mousemove` when the mouse is moved over the element
  - `mouseover` when the mouse is moved over an element or one of its child elements
  - `mouseenter` when the mouse is moved over an element. Similar to mouseover but does not bubble (more on this soon!)
  - `mouseout` when the mouse is moved out of an element, and when the mouse enters a child elements
  - `mouseleave` when the mouse is moved out of an element. Similar to mouseout but does not bubble (more on this soon!)
  - `contextmenu` when the context menu is opened, e.g. on a right mouse button click
- events overlap, e.g.,
  - when tracking a `click` event, it's like tracking a `mousedown` followed by a `mouseup` event
  - in `dblclick`, `click` is fired twice
- `mousedown`, `mousemove` and `mouseup` can be used in combination to track drag-and-drop events
  - `mousemove` fires many times during the mouse movement so apply **throttling**
- properties we can access inside an event handler:
  - `altKey` true if alt key was pressed when the event was fired
  - `button` if any, the number of the button that was pressed when the mouse event was fired
    - usually 0 = main button, 1 = middle button, 2 = right button
    - works on events caused by clicking the button, e.g., clicks
  - `buttons` if any, a number indicating the button(s) pressed on any mouse event
  - `clientX` / `clientY` the x and y coordinates of the mouse pointer relative to the browser window, regardless of scrolling
  - `ctrlKey` true if ctrl key was pressed when the event was fired
  - `metaKey` true if meta key was pressed when the event was fired
  - `movementX` / `movementY` the x and y coordinates of the mouse pointer relative to the position of the last mousemove event. Used to track the mouse velocity while moving it around
  - `region` used in the Canvas API
  - `relatedTarget` the secondary target for the event, for example when moving
  - `screenX` / screenY the x and y coordinates of the mouse pointer in the screen coordinates
  - `shiftKey` true if shift key was pressed when the event was fired


## Touch Events

- [touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch) are triggered when viewing a page with touch devices like a smartphone, iphone, tablet
- 4 touch events:
  - `touchstart` a touch event has started, e.g., the surface is touched
  - `touchend` a touch event has ended, e.g., the surface is no longer touched
  - `touchmove` anything touching the devices moves over the surface
  - `touchcancel` the touch event has been cancelled
- properties we can accesson the selected element
  - `identifier` a unique identifier for this specific event
    - used to track multi-touch events, e.g., same finger = same identifier
  - `clientX` / `clientY` the x and y coordinates of the mouse pointer relative to the browser window, regardless of scrolling
  - `screenX` / `screenY` the x and y coordinates of the mouse pointer in the screen coordinates
  - `pageX` / `pageY` the x and y coordinates of the mouse pointer in the page coordinates (including scrolling)
  - `target` the element touched


## Keyboard events

- 2 types of events when interacting with [keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent):
  - `keydown` the keyboard key has been pressed
    - fired also when the key repeats while the button stays pressed
  - `keyup` the keyboard key has been released
- while mouse and touch events are typically listened on a specific element, it's common to listen for keyboard events on the **document**
- in addition to the [Event object properties](https://developer.mozilla.org/en-US/docs/Web/API/Event) offers us these unique properties:
  - `altKey` true if alt key was pressed when the event was fired
  - `code` the code of the key pressed, returned as a string
  - ctrlKey true if ctrl key was pressed when the event was fired
  - `key` the value of the key pressed, returned as a string
  - `locale` the keyboard locale value
  - `location` the [location of the key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location) on the keyboard
  - `metaKey` true if meta key was pressed when the event was fired
  - `repeat` true if the key has been repeated (e.g. the key has not been released)
  - `shiftKey` true if shift key was pressed when the event was fired


## Event bubbling and capturing

```html
<div id="container">
  <button>Click me</button>
</div>
```

- bubbling and capturing are 2 models that events use to propagate
- **bubbling** is when the event propagates from the item that was clicked (child) up to all its parent tree, starting from the nearest one
- **capturing** is opposite, the outer event handlers are fired before the more specific handler, the one on button
- by default, **all events bubble**
- we can adopt event capturing by adding a third argument to `addEventListener`, setting it to `true`

  ```js
  document.getElementById('container').addEventListener(
    'click',
    () => {
      // window loaded
    },
    true
  );
  ```

- **Note**: that **first all capturing event handlers are run**, then all the bubbling event handlers
- order principle: the DOM goes through all elements starting from the Window object, and goes to find the item that was clicked. While doing so, it calls any event handler associated to the event (capturing phase)


## Stopping the propagation

- An event on a DOM element will be propagated to all its parent elements tree, unless it's stopped
- `stopPropagation()` method of an Event is used to stop the propagation, usually at the end of the event handler
