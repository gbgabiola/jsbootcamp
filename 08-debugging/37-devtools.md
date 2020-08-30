# The Browser Developer Tools

- [Inspecting HTML and CSS](#inspecting-html-and-css)
- [The Console](#the-console)
- [The Emulator](#the-emulator)
- [The Network Panel](#the-network-panel)


## Inspecting HTML and CSS

- although lots of web pages are still plain HTML + CSS, many other websites are real applications that run in the browser
- **developer tools** was a **feature for developers** introduced by the browser to provide much more information on how they rendered the page, and what the page is currently doing

### The HTML panel

- on the left, the HTML that composes the page
- hovering the elements in the HTML panel highlights the element in the page
  - clicking the first icon in the toolbar allows us to select an element in the page, and analyze it in the inspector
- we can drag and drop elements in the inspector to live change their positioning in the page

### The CSS styles panel

- on the right, the CSS styles that are applied to the currently selected element
- we can edit and disable properties
  - add a new CSS property, with any target we want, by clicking the + icon
- trigger a state for the selected element to see the styles applied when it's active, hovered, on focus
- at the bottom, the **box model** of the selected element helps us figure out margins, paddings, border and dimensions at a quick glance


## The Console

- the Console can be seen on its own panel, or by pressing `Esc` in the Elements panel, it will show up in the bottom
  - serves mainly two purposes: _executing custom JavaScript_ and _error reporting_

### Executing custom JavaScript

- accepts any JS code and it will be promptly executed
- `$0` is a special identifier that allows us to reference the element currently selected in the elements inspector
  - can be referenced as a jQuery selector, `$($0)`
- write more than one line with `shift-enter` and pressing enter at the end of the script runs it

### Error reporting

- any error, warning or information that happens while rendering the page, and subsequently executing the JavaScript
  - e.g., failing to load a resource from the network, with information on _why_, is reported in the console
  - clicking the resource URL brings us to the Network panel, showing more info which we can use to determine the cause of the problem
- we can filter messages by level (Error / Warning / Info) and also filter them by content
- messages can be user-generated in our own JS by using the Console API

```js
console.log('Some info message');
console.warn('Some warning message');
console.error('Some error message');
```


## The Emulator

- Chrome DevTools embed a device emulator which we can use to visualize our page in every device size we want
- we can choose from the presets of the most popular mobile devices or specify the pixel dimensions ourselves, and the screen definition (1x, 2x retina, 3x retina HD)
- we can setup **network throttling** for that specific Chrome tab, to emulate a low speed connection and see how the page loads
- "show media queries" option shows us how media queries modify the CSS of the page


## The Network Panel

- Network Panel allows us to see all the connections that the browser must process while rendering a page
  - a toolbar where we can setup some options and filters
  - a loading graph of the page as a whole
  - every single request, with HTTP method, response code, size and other details
  - a footer with the summary of the total requests, the total size of the page and some timing indications
- **preserve log** enabled allows us to move to another page, and the logs will not be cleared
- **disable cache** to track loading time
  - can be enabled globally in the DevTools settings as well, to always disable cache when DevTools is open
- clicking a specific request shows up the detail panel, with HTTP Headers report and loading time breakdown
