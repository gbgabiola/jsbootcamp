# HTML Basics

- [Introduction to HTML](#introduction-to-html)
- [HTML Basics](#html-basics)
- [The document heading](#the-document-heading)


## Introduction to HTML

- HTML is the foundation of the Web
- success: **simplicity**
- feature: **forgiveness** and **we can inspect the HTML of any web page**
- the whole Web platform did one thing right: it never broke backward compatibility
- [first web page](http://info.cern.ch/hypertext/WWW/TheProject.html)


## HTML Basics

- HTML is the markup language to structure content on the Web
- served to the browser in different ways:
  - server-side application that builds it depending on the request or the session data, e.g., Rails, Laravel, Django application
  - JS client-side application that generates HTML on the fly
  - stored in a file and served to the browser by a Web server (simplest and least popular way but essential building blocks)
- **Convention**:, HTML are saved with `.html` or `.htm` extension
- contents are organized using **tags**
- tags wrap the content and gives meaning to the text it wraps
- HTML is not presentational and concerned with how things look, but with what things mean
- creates a _paragraph_ using the `p` tag:

  ```html
  <p>A paragraph of text</p>
  ```

- creates an _unordered list_ and _list item_ using the `ul` and `li` tag:

  ```html
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
  ```

### HTML page structure

- Document Type Declaration (_doctype_) tells the browsers that this is an HTML page, and which HTML version
- most tags come in pairs with an opening tag and a closing tag
  - closing tag is written with `/`
- `html` tag is used right after the document type declaration, and end as last element in a HTML document
- `head` tag will have different tags that mostly doesn't appear on the page, but helps browser (or bots) display it properly
- `body` tag will have the contents (**visible stuff**)

```html
<!DOCTYPE html>
<html>
	<head>
	...
	</head>
	<body>
	...
	</body>
</html>
```

### Tags vs elements

- element includes:
  - starting tag
  - text content (or other elements)
  - closing tag

### Attributes

- **attributes** are additional information that can be attached to the element
- have a `key="value"` syntax
- **Convention**: use double quotes (`""`)
- some attributes are boolean (only need the key)  
- `class` and `id` attributes are useful both in CSS and JS
- `id` is unique in the context of a web page (cannot be duplicated)
  - just one value
- `class`es can be used multiple times
  - can hold multiple values separated by space
- **Convention**: use dash to separate words in a class value
- `style` attribute can be used to insert inline CSS rules

```html
<p class="a-class another-class" id="an-id">A paragraph of text</p>

<!-- Boolean Attribute -->
<script defer src="file.js"></script>
```

### Case insensitive

- tags can be written in all caps or lowercase (case insensitive)
- **Convention**: use lowercase tags

### White space

- multiple white spaces are collapsed by the browser’s CSS engine (ignored)
- nested tags should be indented with 2 or 4 characters

## The document heading

- `head` tag contains special tags that define the document properties
- container for other tags like:
  - `title`
  - `script`
  - `noscript`
  - `link`
  - `style`
  - `meta`

### The title tag

- `title` tag determines the page title which is displayed in the browser tab
- important key factor for Search Engine Optimization (SEO)

### The script tag

- `script` tag is used to add inline JS or load an external JS file using `src` attribute
- **modernJS**: put script files at the `head` tag and add `defer` attribute

```html
<!-- Inline JS -->
<script>
...some JS
</script>

<!-- Load external JS file -->
<script src="file.js"></script>

<!-- with defer attribute -->
<script defer src="file.js"></script> 
```

### The noscript tag

- `noscript` tag is used to detect when scripts are disabled in the browser
- **Note**: users can disable JavaScript scripts in the browser settings, or the browser might not support them by default
- `noscript` tag can only contain other tags to alter the resources served by the page, or the `meta information`, if scripts are disabled:
  - `link` tags
  - `style` tags
  - `meta` tags

### The link tag

- `link` tag sets relationships between a document and other resources
- mainly used to link (load) an external CSS file
- `media` attribute loads different stylesheets depending on the device capabilities

  ```html
  <link href="file.css" media="screen" rel="stylesheet">
  <link href="print.css" media="print" rel="stylesheet">
  ```

- associate an RSS feed

  ```html
  <link rel="alternate" type="application/rss+xml" href="/index.xml">
  ```

- associate a favicon

  ```html
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
  ```

### The style tag

- `style` tag can be used to add styles into the document, rather than loading an external stylesheet
- using `media` attribute to only use the style on the specified medium:

  ```html
  <style media="print">
    .some-css {}
  </style>
  ```

### The meta tag

- `meta` tags perform a variety of tasks and they are very, very important especially for SEO
- `description` meta tag to describe the web page

  ```html
  <meta name="description" content="A nice page">
  ```

- `charset` meta tag sets the page character encoding

  ```html
  <meta charset="utf-8">
  ```

- `robots` meta tag instructs the Search Engine bots whether to index a page or not
  - `follow` or `nofollow` links
  - default is `index` and `follow`
  - other properties, e.g., `nosnippet`, `noarchive`, `noimageindex` and more

  ```html
  <meta name="robots" content="noindex">
  <meta name="robots" content="nofollow">
  <meta name="robots" content="noindex, nofollow">
  ```

- tell Google instead of targeting _all_ search engines
  - disable some features, prevents the translate functionality in the search engine result

  ```html
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="google" content="notranslate">
  ```

- `viewport` meta tag tells the browser to set the page width based on the device width

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```

- this line tells the browser to 3 seconds, then redirects
  - 0 will redirect right away

  ```html
  <meta http-equiv="refresh" content="3;url=http://flaviocopes.com/another-page">
  ```
