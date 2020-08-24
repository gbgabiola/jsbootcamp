# The History API

- [Introduction](#introduction)
- [Navigate the history](#navigate-the-history)
- [Add an entry to the history](#add-an-entry-to-the-history)
- [Modify history entries](#modify-history-entries)
- [Access the current history entry state](#access-the-current-history-entry-state)
- [popstate event](#popstate-event)
- [hashchange event](#hashchange-event)


## Introduction

- History API lets us interact with the browser history, trigger the browser navigation methods and change the address bar content
- useful in combination with modern Single Page Applications (SPA)
  - which we never make a server-side request for new pages, but instead the page is always the same: just the internal content changes
- modern JS application running in the browser that does not interact with the History API either explicitly or at the framework level is going to be a poor experience to the user, since the back and forward buttons break
  - when navigating the app, the view changes but the address bar does not
  - **reload button breaks**: since there is no deep linking, is going to make the browser show a different page
- introduced in HTML5 and is now [supported by all modern browsers](https://caniuse.com/#feat=history)
  - [History.js library](https://github.com/browserstate/history.js/) can be used to support IE9 and older
- `window.history` or `history` since `window` is global object to access History API


## Navigate the history

- `back` method to go back to the previous entry in the session history
- `forward` method forward to the next page
- `go` method lets us navigate back or forward multiple levels deep
- `length` property to see how many entries there are in the history

```js
history.back();
history.forward();
history.length;

history.go(-1); // equivalent to history.back();
history.go(-2); // equivalent to history.back(); twice
history.go(1); // equivalent to history.forward();
history.go(3); // equivalent to history.forward(); 3 times
```


## Add an entry to the history

- `pushState()` method creates a new state to the history programmatically, accepts 3 parameters:
  - 1st: object which can contain anything
  - 2nd: currently unused by major browsers, so we generally pass an empty string
  - 3rd: URL associated to the new state
    - **Note**: URL needs to belong to the same origin domain of the current URL

  ```js
  const state = { color: 'red' };
  history.pushState(state, '', '/anotherPage');
  ```

- calling this won't change the content of the page, and does not cause any browser action like changing `window.location` would


## Modify history entries

- `replaceState()` method allows us to edit the current history state

  ```js
  history.pushState({}, '', '/posts');
  const state = { post: 'first' };
  history.pushState(state, '', '/post/first');
  const state = { post: 'second' };
  history.replaceState(state, '', '/post/second');
  ```

- calling `history.back();` now
  - browser goes straight to `/posts`, since `/post/first` was **replaced** by `/post/second`


## Access the current history entry state

- `history.state` returns the current state object


## popstate event

- `popstate` event is called on `window` every time the active history state changes, with the current state as the callback parameter:

  ```js
  window.onpopstate = event => {
    console.log(event.state);
  };

  // or
  window.addEventListener('popstate', event => {
    console.log(event.state)
  });
  ```

- will log the new state object every time we call `history.back()`, `history.forward()` or `history.go()`



## hashchange event

- `hashchange` event is called on `window` every time the fragment identifier of the URL changes

  ```js
  window.onhashchange = event => {
    console.log(location.hash);
  };

  // or
  window.addEventListener('hashchange', event => {
    console.log(location.hash);
  });
  ```
