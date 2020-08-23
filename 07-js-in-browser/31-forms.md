# Forms

- [Introduction](#introduction)
- [Intercepting a form submit event](#intercepting-a-form-submit-event)
- [Working with input element events](#working-with-input-element-events)


## Introduction

- forms are important part of HTML and the Web Platform
  - allows users to interact to interact with the page:
    - search something on the site
    - trigger filters to trim result pages
    - send information
    - and much more
- by default, forms submit their content to a server-side endpoint, which is usually the page URL itself
- we can change the default behavior (`GET`) request
  - setting the HTML `action` to the specified URL and `method` attribute of the form element to `POST` request
  - using JS we can intercept this event, submit the form asynchronously with **XHR** and **Fetch**
  - we can also react to events happening on individual form elements
  - read [HTML5: The Missing Manual by Matthew MacDonald](https://www.oreilly.com/library/view/html5-the-missing/9781449312671/ch04.html)

  ```html
  <form action="/contact" method="POST">
    ...
    <input type="submit">
  </form>
  ```


## Intercepting a form submit event

- in order to start working with forms with JS we need to intercept the `submit` event on the form element
- call the `event.preventDefault()` method inside the `submit` event handler function to prevent the default behavior and avoid a form submit to reload the page
  - clicking the submit event button in the form will not do anything, except giving us the control

  ```js
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault();
  });
  ```


## Working with input element events

- events we can listen in form elements
  - `input` fired on form elements when the element value is changed
  - `change` fired on form elements when the element value is changed
    - text `input` elements and `textarea` fired only once when the element loses focus (not for every single character typed)
  - `cut` fired when the user cuts text from the form element
  - `copy` fired when the user copies text from the form element
  - `paste` fired when the user pastes text into the form element
  - `focus` fired when the form element gains focus
  - `blur` fired when the form element loses focus
- [form events codepen demo](https://codepen.io/genesisgabiola/full/LYNxWOz)
