# Cookies

- [Introduction](#introduction)
- [Setting cookies](#setting-cookies)
- [Cookies security](#cookies-security)
- [Updating cookies](#updating-cookies)
- [Deleting cookies](#deleting-cookies)
- [Accessing cookies](#accessing-cookies)


## Introduction

- Cookies are a fundamental part of the Web, as they allow sessions and in general to recognize the users during the navigation
- we can exchange information between the server and the browser to provide a way to customize a user session, and for servers to recognize the user between requests
- HTTP is stateless, which means all request origins to a server are exactly the same and a server cannot determine if a request comes from a client that already did a request before, or it's a new one
- sent by the browser to the server when an HTTP request starts, and they are sent back from the server, which can edit their content
- **Cookies are essentially used to store a session id**
- in the past cookies were used to store various types of data, since there was no alternative
  - now with the Web Storage API (Local Storage and Session Storage) and IndexedDB, we have much better alternatives
  - cookies have a very low limit in the data they can hold, since they are sent back-and-forth for every HTTP request to our server
    - including requests for assets, e.g., images, CSS, JS files
- cookies first version was on 1994, then standardized in multiple RFC revisions
- Request for Comments (RFC), standards are defined by the Internet Engineering Task Force (IETF) which are responsible for setting standards for the Internet
- latest specification for Cookies is defined in the [RFC 6265](https://tools.ietf.org/html/rfc6265) on 2011

### Restrictions of cookies

- cookies can only store **4KB of data**
- cookies **private to the domain**, a site can only read the cookies it set, not other domains cookies
- have up to 20 limits of cookies per domain (but the exact number depends on the specific browser implementation)
- cookies are limited in their total number (but the exact number depends on the specific browser implementation)
  - if this number is exceeded, new cookies replace the older ones
- cookies can be set or read server side, or client side
- in the client side, cookies are exposed by the `document` object as `document.cookie`


## Setting cookies

- set a cookie, e.g., `document.cookie = 'name=Genesis';`
  - will add a new cookie to the existing ones (not overwrite existing cookies)
- cookie value should be url encoded with [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
  - to make sure it does not contain any whitespace, comma or semicolon which are not valid in cookie values

### Set a cookie expiration date

- by default, cookie will expire when the browser is closed
  - we can add an expiration date, expressed in UTC format, e.g., `document.cookie = 'name=Genesis; expires=Wed, 26 Aug 2020 18:53:05 UTC')`
  - `max-age` parameter to set an expiration expressed in number of seconds

  ```js
  // cookie that expires in 24 hours
  const date = new Date();
  date.setHours(date.getHours() + 24);
  document.cookie = 'name=Genesis; expires=' + date.toUTCString();

  document.cookie = 'name=Genesis; max-age=3600'; // expires in 60 minutes
  document.cookie = 'name=Genesis; max-age=31536000'; // expires in 1 year
  ```

### Set a cookie path

- `path` parameter specifies a document location for the cookie
  - assigned to a specific path, and sent to the server only if the path matches the current document location, or a parent
  - by default, it's set to the current document location

  ```js
  document.cookie = 'name=Genesis; path=/dashboard';
  ```

### Set a cookie domain

- `domain` parameter can be used to specify a subdomain for our cookie
  - by default, set to the host portion even if using a subdomain
  - domain cookies are included in subdomains

  ```js
  document.cookie = 'name=Genesis; domain=genesisgabiola.netlify.app';
  ```


## Cookies security

```js
document.cookie = 'name=Genesis; Secure; HttpOnly';
```

- `Secure` parameter makes sure the cookie can only be transmitted securely over HTTPS
  - and it will not be sent over unencrypted HTTP connections
  - **Note**: this does not make cookies secure, always avoid adding sensitive information to cookies
- `HttpOnly` parameter makes cookies inaccessible via the `document.cookie` API
  - only editable by the server
- `SameSite` parameter lets servers require that a cookie is not sent on cross-site requests
  - only on resources that have the cookie domain as the origin
    - great help to reduce the risk of CSRF (Cross Site Request Forgery) attacks




## Updating cookies

```js
document.cookie = 'name=John; max-age=31536000'; // expires in 1 year
```

- just assign a new value to the cookie to update its value
- **Note**: add any additional parameters you added in the first place


## Deleting cookies

```js
document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
```

- to delete a cookie, unset its value and pass a date in the past
  - including all the parameters you used to set it


## Accessing cookies

- `document.cookie` property lets us access the cookies
  - which will return string with all the cookies set for the page separated by semicolon
- no built-in methods to access specific cookie, however we can create functions
- function returns the value of a cookie, if present:

  ```js
  const getCookieValue = name => {
    const theCookie = document.cookie.split(';').filter(item => {
      if (item.includes(name + '=')) return true;
    });
    if (theCookie.length === 0) return false;

    return theCookie[0].split('=')[1];
  };

  getCookieValue('cookie-name');
  ```

- function checks if a cookie is set:

  ```js
  const checkCookieExists = (name) => {
    if (document.cookie.split(';').filter(item => {
      if (item.includes(name + '=')) return true;
    }).length) { return true; } else { return false; }
  };

  checkCookieExists('cookie-name');
  ```
