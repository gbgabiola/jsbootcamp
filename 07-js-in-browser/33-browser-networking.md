# Networking in the browser

- [Introduction](#introduction)
- [XHR](#xhr)
- [Fetch API](#fetch-api)
- [Fetch: The Response Object](#fetch-the-response-object)


## Introduction

- JS in the browser has access to several network facilities
- **Fetch API** is the de facto standard API for networking _today_
- **XHR** was the only way to perform network requests _before_


## XHR

- XHR aka AJAX is one of the things that gave birth to the _modern_ Web
- made it possible to create apps inside the browser
  - where before we only had documents and applications that required a complete back-and-forth to the server to get an entirely new page
- W3C standardized XMLHttpRequest in 2006
  - based on the `XMLHttpRequest` object
- `readyState` property request we can check for are:
  - 1 (OPENED): the request starts
  - 2 (HEADERS_RECEIVED): the HTTP headers have been received
  - 3 (LOADING): the response begins to download
  - 4 (DONE): the response has been downloaded
- code creates an `XMLHttpRequest` request object, then attach a callback function that responds on the `onreadystatechange` event
  - xhr connection is set up to perform a `GET` request to `https://yoursite.com`, and it’s started with the `send()` method

  ```js
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      xhr.status === 200 ? console.log(xhr.responseText) : console.error('error');
    }
  };

  xhr.open('GET', 'https://yoursite.com');
  xhr.send();
  ```


## Fetch API

- uses **promises** as a building block, which means we can use async/await to make our code much better
  - essential in combination with service workers to power Progressive Web Apps
- [fetch polyfill](https://github.com/github/fetch) released by GitHub allows us to use fetch on any browser
- code must run in an async function
- we can use a `try`/`catch` block to intercept any error occurring during the execution of the request

  ```js
  (async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  })();
  ```


## Fetch: The Response Object

- `response` object returned by a `fetch()` call contains all the information about the request and the response of the network request
- `headers` property on the `response` object gives us the ability to look into the HTTP headers returned by the request
- `status` property is an integer number representing the HTTP response status
  - 101, 204, 205, or 304 is a null body status
  - 200 to 299, inclusive, is an OK status (success)
  - 301, 302, 303, 307, or 308 is a redirect
- `statusText` property represents the status message of the response
  - if the request is successful, the status is `OK`
- `url` property holds the full URL of the property that we fetched

  ```js
  (async () => {
    try {
      const response = await fetch(url);
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));

      console.log(response.status); // 200
      console.log(response.statusText) //'OK'
      console.log(response.url);
    } catch (error) {
      console.error(error);
    }
  })();
  ```
