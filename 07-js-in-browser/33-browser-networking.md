# Networking in the browser

- [Introduction](#introduction)
- [XHR](#xhr)
- [Fetch API](#fetch-api)
- [Fetch: the Response object](#fetch-the-response-object)
- [Fetch: getting the body content](#fetch-getting-the-body-content)
- [Fetch: the Request object](#fetch-the-request-object)
- [Fetch: setting the request headers](#fetch-setting-the-request-headers)
- [Fetch POST Requests](#fetch-post-requests)
- [CORS](#cors)
- [Websockets](#websockets)


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
  - xhr connection is set up to perform a `GET` request to `https://yoursite.com`, and it's started with the `send()` method

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


## Fetch: the Response object

- Response object returned by a `fetch()` call contains all the information about the request and the response of the network request
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


## Fetch: getting the body content

- a response has a body, accessible using the `text()` or `json()` methods, which return a promise

  ```js
  (async () => {
    try {
      const response = await fetch(url);
      const body = await response.json(); // or response.text()
      console.log(body);
    } catch (error) {
      console.error(error);
    }
  })();
  ```


## Fetch: the Request object

- `new Request()` API creates Request object represents a resource request
- offers several read-only properties to inspect the resource request details
  - `method`: the request's method (`GET`, `POST`, etc.)
  - `url`: the URL of the request
  - `headers`: the associated Headers object of the request
  - `referrer`: the referrer of the request
  - `cache`: the cache mode of the request (e.g., default, reload, no-cache)
- `json()`, `text()` and `formData()` methods process the body of the request
- [MDN Request object](https://developer.mozilla.org/docs/Web/API/Request)

```js
const req = new Request('/api/todos');
```


## Fetch: setting the request headers

- `fetch` gives us the ability to set the HTTP request header using the Headers object

  ```js
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  // or
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  ```

- we use the Request object and pass it to `fetch()` instead of passing the URL to attach the headers to the request

  ```js
  // instead of:
  app.post('/with-cor', cors(), (req, res, next) => {
    res.json({ msg: 'Works! ' });
  });

  const server = app.listen(3000, () => {
    console.log('Listening on port %s', server.address().port);
  });

  fetch(url);

  // we do:
  const request = new Request(url, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  });

  fetch(request);
  ```

- Headers object is not limited to setting value
  - we can also query it
  - delete a header that was previously set

  ```js
  headers.has('Content-Type');
  headers.get('Content-Type');
  headers.delete('X-My-Custom-Header');
  ```


## Fetch POST Requests

- Fetch also allows to use other HTTP method in our request: `POST`, `PUT`, `DELETE` or `OPTIONS`
- specify the method in the method property of the request, and pass additional parameters in the header and in the request body:

  ```js
  const options = {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'color=green&test=1'
  };

  try {
    fetch(url, options);
  } catch (err) {
    console.error('Request failed', err);
  }
  ```


## CORS

- a JS application running in the browser can only access _some_ HTTP resources on the same origin (domain, port and protocol) that serves it
- loading images or scripts/styles always works even if cross-origin, but **XHR** and **Fetch** calls to another server will fail
  - **ES Modules** also follow this convention
  - loading Web Fonts using `@font-face` has same-origin policy by default
  - WebGL textures and `drawImage` resources loaded in the Canvas API are limited by this convention
  - all this happens for security reasons, unless that server implements a way to allow that connection
- **Cross-Origin Resource Sharing** is for security, to prevent malicious users to exploit the Web Platform
- if CORS policy is not set up **on the server** that allows to serve 3rd party origins, the request will **fail**
- A Cross-Origin resource fails if it's:
  - to a different **domain**
  - to a different **subdomain**
  - to a different **port**
  - to a different **protocol**


## Websockets

- WebSockets are alternative to HTTP communication (XHR/Fetch) in Web Applications, and it's supported by all modern browsers
  - offers a long lived bidirectional communication channel between client and server, instead of creating a one-time connection to get data like using HTTP request
  - once established, channel is kept open, offering a very fast connection with low latency and overhead

### How WebSockets differ from HTTP(S)

- HTTP is a protocol, a way to communicate over the network
  - request/response protocol: server returns some data when the client requests it
    - on the web we'll use HTTP(S) 99.9% of the time
- **WebSockets** are great for real-time and long-lived communications
  - **server can send a message to the client** without the client explicitly requesting something
  - client and the server can **talk to each other simultaneously**
  - **very little data overhead** needs to be exchanged to send messages: **low latency communication**
- **HTTP** is great for **occasional data exchange** and interactions initiated by the client, and it is much simpler to implement, while **WebSockets** require a bit more overhead

### By WebSockets I mean secured WebSockets

- always use the secure, encrypted protocol for WebSockets, `wss://`
- `ws://` refers to the unsafe WebSockets version (http:// of WebSockets), and should be avoided for obvious reasons

### Create a new WebSockets connection

```js
const url = 'wss://myserver.com/something';
const connection = new WebSocket(url);
```

- `connection` is a [Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) object
