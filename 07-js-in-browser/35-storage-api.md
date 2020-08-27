# The Storage API

- [Introduction](#introduction)
- [Methods](#methods)
- [Storage size limits](#storage-size-limits)


## Introduction

- Web Storage API provides a way to store data in the browser
  - defines two storage mechanisms: **Session Storage** and **Local Storage**
- **Session Storage** maintains the data stored into it for the duration of the page session
  - if multiple windows or tabs visit the same site, they will have two different Session Storage instances
  - Session Storage for the particular tab/window is cleared when closed
  - meant to allow the scenario of handling different processes happening on the same site independently
    - cookies are shared in all sessions
- **Local Storage** instead persists the data until it's explicitly removed, either by us or by the user
  - never cleaned up automatically, and it's shared in all the sessions that access a site
- Web Storage is only accessible in the browser
  - it's not sent to the server like cookies do
- **Session Storage** and **Local Storage**
  - provides a private area for our data
    - any data we store cannot be accessed by other websites
  - **protocol specific**: data stored when the page is accessed using `http` is not available when the page is served with `https`, and vice versa
  - available on the `window` object and can be access using `sessionStorage` and `localStorage`
  - set of properties and methods are exactly the same, because they return the same [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage) object
- `Storage` object only has `length` property which is the number of data items stored into it


## Methods

- `setItem(key, value)` adds an item to the storage
  - accepts a string as key and value
  - passing any value that's not a string will be converted to string
- `getItem(key)` is the way to retrieve a string value from the storage, by using the key string that was used to store it
- `removeItem(key)` removes the item identified by key from the storage, returning nothing (`undefined` value)
- `key(n)` every item we store an item has an index number
  - when passed a number n, returns the name of the nth key
  - **Note**: MDN says "The order of keys is user-agent defined, so you should not rely on it"
  - referencing a number that does not point to a storage item, returns `null`
- `clear()` removes everything from the storage object we are manipulating

```js
localStorage.setItem('username', 'genesisgabiola');
localStorage.setItem('id', '123');
localStorage.setItem('test', 123); // stored as the '123' string
localStorage.setItem('test', { test: 1 }); // stored as '[object Object]'

localStorage.getItem('username'); // 'genesisgabiola'
localStorage.getItem('id'); // '123'

localStorage.removeItem('id');

localStorage.length;
localStorage.clear();
localStorage.length; // 0
```


## Storage size limits

- Storage API can store a lot more data than with cookies
- the amount of storage available on Web might differ by storage type (local/session), browser, and by device type
- read [Storage for the web](https://web.dev/storage-for-the-web/) article

### Desktop

- Chrome, IE, Firefox: 10MB
- Safari: 5MB for local storage, unlimited session storage

### Mobile

- Chrome, Firefox: 10MB
- iOS Safari and WebView: 5MB for local storage, session storage unlimited unless in iOS6 and iOS7 where it's 5MB
- Android Browser: 2MB local storage, unlimited session storage

### Going over quota

- we need to handle quota errors, especially if we store lots of data, we can use `try`/`catch`

  ```js
  try {
    localStorage.setItem('key', 'value');
  } catch (domException) {
    if (['QuotaExceededError', 'NS_ERROR_DOM_QUOTA_REACHED'].includes(domException.name)) {
      // handle quota limit exceeded error
    }
  }
  ```
