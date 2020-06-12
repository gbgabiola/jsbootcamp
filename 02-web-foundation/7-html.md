# HTML Basics

- [Introduction to HTML](#introduction-to-html)
- [HTML Basics](#html-basics)
- [The document heading](#the-document-heading)
- [The document body](#the-document-body)
- [Tags that interact with text](#tags-that-interact-with-text)
- [Links](#links)
- [Container tags and page structure HTML](#container-tags-and-page-structure-html)


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

- multiple white spaces are collapsed by the browser's CSS engine (ignored)
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


## The document body

- inside the body tag we have all the tags that define the content of the page
  - we can only have one body tag in one page
- **Best practice**: body tag are optional, however it is recommended

### Block elements vs inline elements

- block elements takes up the full width of the row, e.g., p, div, h1-h6, ol, ul, li, etc
- inline elements takes up the necessary width for its content, e.g., a, span, img
- difference:
  - block elements can alter `width`/`height`, `padding` and `border`, but not for inline element
  - block elements can contain block/inline elements but the reverse is not true


## Tags that interact with text

### The p tag

- `p` tag is block element that defines a paragraph of text
- can add inline elements but cannot add block elements
- by default, browsers style a paragraph with a margin on top and at the bottom

  ```html
  <p>Some text</p>
  ```

### The span tag

- `span` tag is an inline element that can be used to create a section in a paragraph that can be targeted using CSS

  ```html
  <p>A part of the text <span>and here another part</span></p>
  ```

### The br tag

- br tag is an inline element represents a line break, and doesn't need a closing tag

  ```html
  <p>Some text<br>A new line</p>
  ```

### The heading tags

- HTML provides 6 heading tags which are block elements, from most to least important, e.g.,  `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- headings are essential for SEO and should have only one `h1` element for each page

  ```html
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>
  <h5>h5</h5>
  <h6>h6</h6>
  ```

### The strong tag

- `strong` tag is an inline element to mark the text as _important_
- by default, browsers display it **bold**
- it's not a visual hint, but a semantic hint

### The em tag

- em tag is an inline element to mark the text as _emphasized_
- by default, browsers display it **italic**
- it's not a visual hint but a semantic hint

### Quotes

- `blockquote` tag is used to insert citations in the text
- by default, browsers applies a margin
  - Chrome applies 40px left and right margin, and 10px top and bottom margin
- `q` tag is used for inline quotes

### Horizontal line

- `hr` (horizontal rule) tag adds a horizontal line which is used to separate sections in the page

### Code blocks

- code tag is used to display code, because browsers give it a monospaced font
  - ignores whitespace and line breaks
- typically wrapped in a `pre` tag to prevent white space collapsing and makes it a block element
- CSS applied by Chrome:

  ```css
  code {
    font-family: monospace;
  }

  pre {
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0px;
  }
  ```

### Lists

- 3 types of lists:
  - unordered lists
  - ordered lists
  - definition lists
- `ul` (unordered list) tag are created with `li` (list item) tags:

  ```html
  <ul>
    <li>First</li>
    <li>Second</li>
  </ul>
  ```

- `ol` (ordered list) tag are created with `li` (list item) tags:

  ```html
  <ol>
    <li>First</li>
    <li>Second</li>
  </ol>
  ```

- `dl` (description/definition list) tag are created with `dt` (term) and `dd` (description details)

  ```html
  <dl>
    <dt>Flavio</dt>
    <dd>The name</dd>
    <dt>Copes</dt>
    <dd>The surname</dd>
  </dl>
  ```

### Other text tags

Tags with presentational purposes:

- the `mark` tag
- the `ins` tag
- the `del` tag
- the `sup` tag
- the `sub` tag
- the `small` tag
- the `i` tag
- the `b` tag


```html
<mark>mark</mark>
<ins>ins</ins>
<del>del</del>
<sup>sup</sup>
<sub>sub</sub>
<small>small</small>
<i>i</i>
<b>b</b>
```


## Links

- `a` (anchor) tag is an inline element used to define links and destination is set using `href` attribute

  ```html
  <!-- absolute URL -->
  <a href="https://flaviocopes.com">click here</a>

  <!-- relative URL -->
  <a href="/test">click here</a>
  ```

- if `/` is omitted, instead of starting from the origin, the browser will just add the test string to the current URL
- `a` tags can include other elements, not just text, except `<a>` tags

  ```html
  <a href="https://flaviocopes.com">
    <img src="test.jpg">
  </a>
  ```

- open the link in a new tab, using `target` attribute:

  ```html
  <a href="https://flaviocopes.com" target="_blank">open in new tab</a>
  ```


## Container tags and page structure HTML

### Container tags

- set of container tags:
  - `article`
  - `section`
  - `div`

#### article

- `article` tag identifies a thing that can be independent from other things in a page, e.g., list of blog posts, list of links, main element in a page
- heading (h1-h6) should be included

  ```html
  <div>
    <article>
      <h2>A blog post</h2>
      <a ...>Read more</a>
    </article>
    <article>
      <h2>Another blog post</h2>
      <a ...>Read more</a>
    </article>
  </div>

  <!-- main element -->
  <article>
    <h2>A blog post</h2>
    <p>Here is the content...</p>
  </article>
  ```

#### section

- `section` tag represents a section of a document
- heading (h1-h6) should be included
- useful to break a long `article` into different **sections**

  ```html
  <section>
    <h2>A section of the page</h2>
    <p>...</p>
    <img ...>
  </section>
  ```

#### div

- div is the generic container element
- often add a `class` or `id` attribute to this element, to allow it to be styled using CSS

  ```html
  <div>
    ...
  </div>
  ```


### Tags related to page

#### nav

- `nav` tag is used to create the markup that defines the page navigation
- typically you'll add an ul or ol list

  ```html
  <nav>
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
    </ol>
  </nav>
  ```

#### aside

- `aside` tag is used to add a piece of content that is related to the main content, e.g., add a quote, sidebar
- using `aside` is a signal that the things it contains are not part of the regular flow of the section it lives into

  ```html
  <div>
    <p>some text..</p>
    <aside>
      <p>A quote..</p>
    </aside>
    <p>other text...</p>
  </div>
  ```

#### header

- `header` tag represents a part of the page that is the introduction
- contain one or more heading tag (h1-h6), the tagline for the article, an image

  ```html
  <article>
    <header>
      <h1>Article title</h1>
    </header>
    ...
  </article>
  ```

#### main

- `main` tag represents the main part of a page

  ```html
  <body>
    ....
    <main>
      <p>....</p>
    </main>
  </body>
  ```

#### footer

- `footer` tag is used to determine the footer of an article, or the footer of the page

  ```html
  <article>
  ....
    <footer>
      <p>Footer notes..</p>
    </footer>
  </article>
  ```
