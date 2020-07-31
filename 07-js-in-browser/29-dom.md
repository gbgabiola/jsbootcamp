# The DOM

- [Introduction](#introduction)
- [The `window` object](#the-window-object)
- [The `document` object](#the-document-object)
- [Waiting for the DOM ready event](#waiting-for-the-dom-ready-event)
- [The Selectors API](#the-selectors-api)
- [Traversing the DOM](#traversing-the-dom)
- [Editing the DOM](#editing-the-dom)
- [Add and remove class to a DOM element](#add-and-remove-class-to-a-dom-element)
- [Change a DOM node value](#change-a-dom-node-value)
- [Check if a DOM element has a class](#check-if-a-dom-element-has-a-class)
- [Hide a DOM element](#hide-a-dom-element)
- [Replace a DOM element](#replace-a-dom-element)
- [Style DOM elements by changing CSS inline properties](#style-dom-elements-by-changing-css-inline-properties)
- [Loop over DOM elements from querySelectorAll](#loop-over-dom-elements-from-queryselectorall)


## Introduction

- DOM (Document Object Model) is the browser internal representation of a web page
  - when browser retrieves HTML from server, the internal parser analyzes the structure of the code, and creates a model of it
    - browser renders the page on the screen based on this model
  - language-agnostic, and the standard to access it is using JS, since it's the only language that browsers can run
- with JS we can interact with the DOM to:
  - inspect the page structure
  - access the page metadata and headers
  - edit the CSS styling
  - attach or remove event listeners
  - edit any node in the page
  - change any node attribute
  - and much more
- 2 main objects provided by the DOM API: `document` and `window`


## The `window` object

- `window` object represents the window that contains the DOM document
  - its properties and methods can be called without referencing `window` explicitly, because it represents the **global object**, e.g., `window.document` property can also be referenced using `document`

### Properties

- `console` points to the browser debugging console
  - print error messages or logging, using `console.log`, `console.error` and other tools
- `document` points to the document object, key to the DOM interactions
- `history` gives access to the History API
- `location` gives access to the Location interface, from which we can determine the URL, the protocol, the hash and other useful information.
- `localStorage` is a reference to the Web Storage API localStorage object
- `sessionStorage` is a reference to the Web Storage API sessionStorage object

### Methods

- `alert()` used to display alert dialogs
- `postMessage()` used by the Channel Messaging API
- `requestAnimationFrame()` used to perform animations in a way that's both performant and easy on the CPU
- `setInterval()` calls a function every n milliseconds, until the interval is cleared with `clearInterval()`
- `clearInterval()` clears an interval created with `setInterval()`
- `setTimeout()` executes a function after n milliseconds
- `setImmediate()` executes a function as soon as the browser is ready
- `addEventListener()` adds an event listener to the document
- `removeEventListener()` removes an event listener from the document
- see _everything_ by typing `window` in the DevTools console
- [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/Window) for `window` object properties and methods


## The `document` object

- `document` object represents the DOM tree loaded in a window
- we can get `document.title`, `document.URL`, `document.referrer`, `document.domain`
- from the `document` object we can get the body and head [Element nodes](https://developer.mozilla.org/en-US/docs/Web/API/Element):
  - `document.documentElement`: the Document node
  - `document.body`: the body Element node
  - `document.head`: the head Element node
- we can see them as HTML tags but in reality they are objects
- we can also get a list of all the element nodes of a particular type
  - like [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) using `document.links`, `document.images`, and `document.forms`
- `document.cookie` to access document cookies, and last modified date in `document.lastModified`
- [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/Document) for `document` object properties and methods


## Waiting for the DOM ready event

- we need to **wait until the DOM is ready**
  - browser must parse the HTML first, and generate the DOM tree
- we can add an event listener to the `document` object for the `DOMContentLoaded` event, using the `document.addEventListener()` method

  ```js
  document.addEventListener('DOMContentLoaded', (event) => {
    // The DOM is ready
  });
  ```


## The Selectors API

- part of the DOM API is about working with the [Selectors API](https://www.w3.org/TR/selectors-api/), a set of methods that allows us to select a specific element in the DOM:
  - `document.getElementById()` accepts an id attribute value and returns one element
  - `document.getElementsByTagName()` accepts a tag element name and returns all the elements that match it
  - `document.getElementsByClassName()` accepts a class attribute name and returns all the elements that match it
  - `document.querySelector()` returns a single element, the first found
  - `document.querySelectorAll()` returns all the elements, wrapped in a NodeList object
- `document.querySelector()` and `document.querySelectorAll()` are two recent methods, standardized in 2013, which are now available on any modern browser
  - no reason to avoid them, unless we need to support IE8 and below
- **Note**: a NodeList object is not an array, but we can iterate it with `forEach` or `for..of`, or we can transform it to an array with `Array.from()` if we want


## Traversing the DOM

### Getting the parent

- every element has one and only parent
- we can get it using [`Node.parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) or [`Node.parentElementNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement) (where Node means a node in the DOM)
  - almost the same, except when ran on the `html` element:
    - `parentNode` returns the parent of the specified node in the DOM tree
    - while `parentElement` returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element

### Getting the children

- `Node.hasChildNodes()`  checks if a Node has child nodes which returns a boolean value
- `Node.children` is used to access all the Element Nodes children of a node
- `Node.childNodes` will not just include Element nodes, but also includes the white space between elements as Text nodes
- `Node.firstElementChild` and `Node.lastElementChild` gets the first and last child Element Node
- `Node.firstChild` and `Node.lastChild` do not "filter" the tree for Element nodes only, and they will also show empty Text nodes that indicate white space

### Getting the siblings

- `Node.previousElementSibling`
- `Node.nextElementSibling`
- `Node.previousSibling` and `Node.nextSibling` includes white spaces as Text nodes


## Editing the DOM

- `document.createElement()` creates a new Element Node
- `document.createTextNode()` creates a new Text Node
- `document.appendChild()` adds the element to the DOM elements as children
- `first.removeChild(second)` removes the child node "second" from the node "first"
- `document.insertBefore(newNode, existingNode)` inserts "newNode" as a sibling of "existingNode", placing it before that in the DOM tree structure
- `element.appendChild(newChild)` alters the tree under "element", adding a new child Node "newChild" to it, after all the other children
- `element.prepend(newChild)` alters the tree under "element", adding a new child Node "newChild" to it, before other child elements
  - we can pass one or more child Nodes, or even a string which will be interpreted as a Text node
- `element.replaceChild(newChild, existingChild)` alters the tree under "element", replacing "existingChild" with a new Node "newChild"
- `element.insertAdjacentElement(position, newElement)` inserts "newElement" in the DOM, positioned relatively to "element" depending on "position" parameter value
  - `'beforebegin'`: before the element itself
  - `'afterbegin'`: just inside the element, before its first child
  - `'beforeend'`: just inside the element, after its last child
  - `'afterend'` after the element itself
- `element.textContent = 'something'` changes the content of a Text node to "something"


## Add and remove class to a DOM element

```js
element.classList.add('my-class');
element.classList.remove('my-class');
```

- `add` and `remove` methods adds a new class to a DOM element and removes it
- **Implementation detail**: `classList` is not an array, but rather a collection of type [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)
- we can't directly edit `classList` because it's a read-only property
  - we can however use its methods to change the element classes


## Change a DOM node value

- change the value of the `innerText` property:

  ```js
  element.innerText = 'x';
  ```

- to lookup the element, combine it with the `querySelector()`:

  ```js
  document.querySelector('#today .total');
  ```


## Check if a DOM element has a class

- `contains` method provided by the `classList` object, checks if an element has a class:

  ```js
  element.classList.contains('my-class');
  ```

- technically, `classList` is an object that satisfies the [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) interface, which means it implements its methods and properties


## Hide a DOM element

- every element has a `style` property to alter the CSS styling properties
- we can set the `display` property to `'none'`, and set it back again with `block` or `inline`:

  ```js
  element.style.display = 'none';
  element.style.display = 'block';
  ```


## Replace a DOM element

- `replaceWith()` on the first element, passing the second element as argument
  - use Babel to transpile it to ES5 since Edge <17 and IE11 [do not support it](https://caniuse.com/#feat=dom-manip-convenience)
- another solution is to lookup the parent and use the `replaceChild()` method, which is much older and supported by all browsers:

  ```js
  const el1 = document.querySelector(/* ... */);
  const el2 = document.querySelector(/* ... */);

  el1.replaceWith(el2);
  el1.parentNode.replaceChild(el2, el1);
  ```


## Style DOM elements by changing CSS inline properties

- `style` property references the element **inline styles** which lets us directly change each CSS property of an element
  - use camelCase instead of dashes when CSS property name contains them
  - [MDN CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)

  ```js
  element.style.color = '#fff';
  element.style.border = '1px solid black';
  ```


## Loop over DOM elements from querySelectorAll

- `querySelectorAll()` method runs on `document` returns a list of DOM elements that satisfy the selectors query
  - returns a list of elements, which is not an array but a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) object
- `for..of` loop is the easiest way to loop over the results

  ```js
  for (const item of document.querySelectorAll('.buttons')) {
    //...do something
  }
  ```
