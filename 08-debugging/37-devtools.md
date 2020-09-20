# The Browser Developer Tools

## Table of Contents <!-- omit in toc -->

- [Inspecting HTML and CSS](#inspecting-html-and-css)
- [The Console](#the-console)
- [The Emulator](#the-emulator)
- [The Network Panel](#the-network-panel)
- [The Application Tab](#the-application-tab)
- [The Security Tab](#the-security-tab)
- [Editing scripts from the Developer Tools](#editing-scripts-from-the-developer-tools)
- [The Lighthouse Tab](#the-lighthouse-tab)
- [Logging levels](#logging-levels)
- [Preserving logs during navigation](#preserving-logs-during-navigation)
- [Better organize log messages](#better-organize-log-messages)
- [Print the stack trace to the console](#print-the-stack-trace-to-the-console)
- [Calculate the time spent by a function](#calculate-the-time-spent-by-a-function)
- [Generate a CPU profile](#generate-a-cpu-profile)


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


## The Application Tab

- Application tab gives us information about which information is stored inside the browser relative to our website
- gain access to detailed reports and tools to interact with the application storage and can quickly wipe any information, to start with a clean slate
  - Local Storage
  - Session Storage
  - IndexedDb
  - Web SQL
  - Cookies
- has tools to inspect and debug Progressive Web Apps
- click **manifest** to get information about the web app manifest
  - used to allow mobile users to add the app to their home, and simulate the "add to homescreen" events
- **service workers** let us inspect our application service workers
  - fundamental technology that powers modern web apps
  - provides features like notification, capability to run offline and synchronize across devices


## The Security Tab

- Security tab gives us all the information that the browser has relatively to the security of the connection to the website
- if there is any problem with the HTTPS connection, if the site is served over TLS, it will provide us more information about what's causing it


## Editing scripts from the Developer Tools

- Sources panel gives us the ability to edit any script, also while the script is halted in its execution
- edit the file and save, then changes will be applied to the current window
- **Note**: changes are not persisted to disk unless we are working locally and set up workspaces in the devtools


## The Lighthouse Tab

- Lighthouse tab helps us find and solve some issues relative to performance and in general the quality of the experience that users have when accessing our website
- we can perform various kinds of audits depending on the kind of website
- the audit is provided by [Lighthouse](https://developers.google.com/web/tools/lighthouse/), an open source automated website quality check tool
  - it takes a while to run, then it provides us a very nice report with key actions to check


## Logging levels

- `console.log()` prints messages in the Console
- `console.info()` displays an `i` icon, making it clear the log message is just an information
- `console.warn()` displays a yellow exclamation point
  - if we activate the Console filtering toolbar, we can see that the Console allows us to filter messages based on the type
    - convenient to differentiate messages, e.g., if we now click `Warnings`, all the printed messages that are not warnings will be hidden
- `console.error()` display a red X which clearly states there's an error
  - it also have full stack trace of the function that generated the error, so we can go and try to fix it


## Preserving logs during navigation

- by default, anything printed to the console is cleared when navigate to a new page
- check Preserve log in the console settings to keep the logs


## Better organize log messages

- Console messages can grow in size and the noise when we're trying to debug an error can be overwhelming
- to limit this problem the Console API offers a handy feature: Grouping the Console messages
  - can output a collapse message that we can open on demand
  - groups can be nested

  ```js
  console.group('Testing the location'); // or console.groupCollapsed();
  console.log('Location hash', location.hash);
  console.log('Location hostname', location.hostname);
  console.log('Location protocol', location.protocol);
  console.groupEnd();

  // nested groups
  console.group('Main');
  console.log('Test');
  console.group('1');
  console.log('1 text');
  console.group('1a');
  console.log('1a text');
  console.groupEnd();
  console.groupCollapsed('1b');
  console.log('1b text');
  console.groupEnd();
  console.groupEnd();
  ```


## Print the stack trace to the console

- `console.trace()` prints the call stack trace of a function

  ```js
  const function2 = () => console.trace();
  const function1 = () => function2();
  function1();
  ```


## Calculate the time spent by a function

- `time()` and `timeEnd()` calculates how much time a function takes to run

  ```js
  const doSomething = () => console.log('test');
  const measureDoingSomething = () => {
    console.time('doSomething()');
    // do something, and measure the time it takes
    doSomething();
    console.timeEnd('doSomething()');
  };
  measureDoingSomething();
  ```


## Generate a CPU profile

- DevTools allow us to analyze the CPU profile performance of any function
- `profile()` and `profileEnd()` commands not only measure time, but also create a more detailed report
  - d

  ```js
  const doSomething = () => console.log('test');
  const measureDoingSomething = () => {
    console.profile('doSomething()');
    // do something, and measure its performance
    doSomething();
    console.profileEnd();
  };
  measureDoingSomething();
  ```
