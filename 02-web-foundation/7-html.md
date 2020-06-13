# HTML Basics

- [Introduction to HTML](#introduction-to-html)
- [HTML Basics](#html-basics)
- [The document heading](#the-document-heading)
- [The document body](#the-document-body)
- [Tags that interact with text](#tags-that-interact-with-text)
- [Links](#links)
- [Container tags and page structure HTML](#container-tags-and-page-structure-html)
- [Forms](#forms)
- [Tables](#tables)
- [Multimedia tags: `audio` and `video`](#multimedia-tags-audio-and-video)


## Introduction to HTML

- HTML is the foundation of the Web
- success: **simplicity**
- feature: **forgiveness** and **you can inspect the HTML of any web page**
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

- body tag will have all the tags that define the content of the page
  - you can only have one body tag in one page
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


## Forms

- forms are a way to interact with a page, or an app, built with Web technologies
- submit the form, the browser will send the data to the server
- by default:
  - sending data causes the page to reload, but behavior can be alter using JavaScript
  - submitted using GET HTTP method, but usually you want to use POST
- server-side is needed to handle the request

  ```html
  <form action="/new-contact" method="POST">
    ...
  </form>
  ```

- if the origin (protocol + domain + port) is https://flaviocopes.com (port 80 is the default), this means the form data will be sent to https://flaviocopes.com/new-contact
- data is provided by users via the set of controls that are available on the Web platform:
  - input text
  - text areas
  - select boxes (drop-down menu)
  - radio buttons
  - checkboxes
  - file uploads
  - and more!


### The input tag

- input field is one of the most widely used form elements, and can completely change behavior based on the `type` attribute
- default behavior is single-line text input control
- give the field a `name` attribute in order for its content to be sent to the server when the form is submitted
- `placeholder` attribute is used to display a hint to the user for what to type in

  ```html
  <input type="text" name="username" placeholder="Your username">
  ```

#### Email

- `type="email"` validate client-side (browser) an email for correctness before submitting

  ```html
  <input type="email" name="email" placeholder="Your email">
  ```

#### Password

- `type="password"` make every key entered appear as an asterisk (`*`)

  ```html
  <input type="password" name="password" placeholder="Your password">
  ```

#### Numbers

- `type="number"` to only accept numbers
- can specify minimum and maximum value accepted

  ```html
  <input type="number" name="age" placeholder="Your age" min="18" max="110">
  ```

- `step` attribute helps identify the steps between different values, e.g., accepts a value between 10 and 50, at steps of 5

  ```html
  <input type="number" name="a-number"  min="10" max="50" step="5">
  ```

#### Hidden field

- fields can be hidden from the user, and still be sent to the server upon the form submit
- commonly used to store values like a CSRF token
  - security and user identification
  - detect robots sending spam, using special technique
  - identify a form and its action

  ```html
  <input type="hidden" name="some-hidden-field" value="some-value">
  ```

#### Setting a default value

- all fields accept a predefined value
  - if not changed, same value will be sent to the server
- if you set a `placeholder`, that value will appear if the user clears the `input` field value

  ```html
  <input type="number" name="age" placeholder="Your age" value="18">
  ```

### Form submit

- `type="submit"` is a button to submits the form
- `value` attribute sets the text on the button, if not set it will display "Submit" text

  ```html
  <input type="submit" value="Click me">
  ```

### Form validation

- browsers provide client-side validation functionality to forms

#### Set fields as required

- `required` attribute helps ensuring they are filled; otherwise, client-side validation fails to submit the form

  ```html
  <input type="text" name="username" required>
  ```

#### Enforce a specific format

- `type="email"` automatically validates the email address according to a format set in the specification
- `min` and `max` attribute of `type="number"` limit values entered to an interval
- can enforce a specific format on any field
  - `pattern` attribute gives you the ability to set a regular expression to validate the value against

  ```html
  <input type="text" name="username" pattern="[a-zA-Z]{8}">
  ```

### Other fields

#### File uploads

- load files from local computer and send them to the server using a `type="file"` input element
  - attach multiple files

  ```html
  <input type="file" name="secret-documents" multiple>
  ```

- specify one or more file types allowed using the accept attribute, e.g., images

  ```html
  <input type="file" name="secret-documents" accept="image/*">
  ```

- specific MIME type, like application/json or set a file extension like .pdf. Or set multiple file extensions

  ```html
  <input type="file" name="secret-documents" accept=".jpg, .jpeg, .png">
  ```

#### Buttons

- `type="button"` input fields can be used to add additional buttons to the form
  - used to programmatically do something, using JS

  ```html
  <input type="button" value="Click me">
  ```

- clear the entire form and bring back the state of the fields to the initial

  ```html
  <input type="reset">
  ```

#### Radio buttons

- `radio` buttons are used to create a set of choices, of which one is pressed and all the others are disabled
  - the name comes from old car radios that had this kind of interface
- define set of `type="radio"` inputs, same `name` attribute with different `value` attribute

  ```html
  <input type="radio" name="color" value="yellow">
  <input type="radio" name="color" value="red">
  <input type="radio" name="color" value="blue">
  ```

- once the form is submitted, the color data property will have one single value
- by default, first item is checked
- `checked` attribute can set the value that's pre-selected, can only it once per radio inputs group

#### Checkboxes

- checkboxes allow multiple values to be chosen, or none at all
- define a set of `type="checkbox"` inputs, same `name` attribute with different `value` attribute

  ```html
  <input type="checkbox" name="color" value="yellow">
  <input type="checkbox" name="color" value="red">
  <input type="checkbox" name="color" value="blue">
  ```

- by default, all checkboxes are unchecked, can use `checked` attribute to enable them on page load
- value(s) will be sent to the server as an array

#### Date and time

- `type="date"` input field allows the user to enter a date, and shows a date picker if needed
- `type="time"` input field allows the user to enter a time, and shows a time picker if needed
- `type="month"` input field allows the user to enter a month and a year
- `type="week"` input field allows the user to enter a week and a year
- `type="datetime-local"` field lets you choose a date and a time

  ```html
  <input type="date" name="birthday">
  <input type="time" name="time-to-pickup">
  <input type="month" name="choose-release-month">
  <input type="week" name="choose-week">
  <input type="datetime-local" name="date-and-time">
  ````

#### Color picker

- `type="color"` lets user pick a color
- set a default value using the `value` attribute

  ```html
  <input type="color" name="car-color" value="#000000">
  ```

#### Range

- `type="range`" input element shows a slider element
  -  can use it to move from a starting value to an ending value
  -  can provide an optional step

  ```html
  <input type="range" name="age" min="0" max="100" value="30" step="10">
  ```

#### Telephone

- `type="tel"` input field is used to enter a phone number
- can specify a `pattern` attribute for additional validation
- main point of using `tel` over `text` is on mobile, where the device can choose to show a numeric keyboard

  ```html
  <input type="tel" pattern="[0-9]{3}-[0-9]{8}" name="telephone-number">
  ```

#### URL

- `type="url"` field is used to enter a URL
- can validate it using the `pattern` attribute

  ```html
  <input type="url" name="website" pattern="https://.*">
  ```

### The textarea tag

- `textarea` element allows users to enter multi-line text
- can set the dimensions using CSS, but also using the `rows` and `cols` attributes
- `name` attribute determines the name in the data sent to the server

  ```html
  <textarea rows="20" cols="10"></textarea>
  <textarea name="article"></textarea>
  ```

### The select tag

- `select` tag is used to create a drop-down menu
  - user can choose one of the options available
- each option is created using `option` tag
- add a `name` attribute to the `select`, and a `value` attribute to each `option`
- can set an option `disabled`
- can have one empty option

  ```html
  <select name="color">
    <option value="red" disabled>Red</option>
    <option value="">None</option>
    <option value="yellow">Yellow</option>
  </select>
  ```

- options can be grouped using the `optgroup` tag
  - each option group has a `label` attribute

  ```html
  <select name="color">
    <optgroup label="Primary">
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
      <option value="blue">Blue</option>
    </optgroup>
    <optgroup label="Others">
      <option value="green">Green</option>
      <option value="pink">Pink</option>
    </optgroup>
  </select>
  ```


## Tables

### The table tag

- `table tag` is used to define a table
- define the data using rows (not columns)

### Rows

- `tr tag` is used to add row, and the only thing you can add to a `table` element
  - first row _can_ take the role of the header

### Column headers

- table header contains the name of a column, typically in a bold font
- `th` tag is used to define header

  ```html
  <table>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
    <tr></tr>
    <tr></tr>
  </table>
  ```

### The table content

- `td` tags is used to define the content inside `tr`

### Span columns and rows

- `colspan` attribute is used to span the row over 2 or more columns

  ```html
  <table>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
    <tr>
      <td colspan="2">Row 1 Columns 1-2</td>
      <td>Row 1 Column 3</td>
    </tr>
    <tr>
      <td colspan="3">Row 2 Columns 1-3</td>
    </tr>
  </table>
  ```

- or span over 2 or more rows, using the `rowspan` attribute

  ```html
  <table>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
    <tr>
      <td colspan="2" rowspan="2">Rows 1-2 Columns 1-2</td>
      <td>Row 1 Column 3</td>
    </tr>
    <tr>
      <td>Row 2 Column 3</td>
    </tr>
  </table>
  ```

### Row headings

- you can add a `th` tag as the first element inside a `tr` that's not the first `tr` of the table, to have row headings

### More tags to organize the table

- you can add 3 more tags into a table, to have it more organized
  - `thead`
  - `tbody`
  - `tfoot`

  ```html
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Row 1</th>
        <td>Col 2</td>
        <td>Col 3</td>
      </tr>
      <tr>
        <th>Row 2</th>
        <td>Col 2</td>
        <td>Col 3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td>Footer of Col 1</td>
        <td>Footer of Col 2</td>
      </tr>
    </tfoot>
  </table>
  ```

### Table caption

- table should have a `caption` tag that describes its content
  - should be put immediately after the opening table tag

  ```html
  <table>
    <caption>Dogs age</caption>
    <tr>
      <th>Dog</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Roger</td>
      <td>7</td>
    </tr>
  </table>
  ```


## Multimedia tags: `audio` and `video`

- `audio` tag allows you to embed audio content in your HTML pages
  - stream audio using a microphone via `getUserMedia()`, or play an audio source using `src` attribute
- `video` tag allows you to embed video content in your HTML pages
  - stream video using a webcam via `getUserMedia()` or **WebRTC**, or play a video source using the `src` attribute
- by default, browsers does not show any controls
- `controls` attribute display built-in controls
- `type` attribute is used to specify the MIME type of the audio/video file; otherwise, browser will try to automatically determine it
- `autoplay` attribute will play the audio/video automatically
  - **Note**: mobile browsers don't allow autoplay
- `loop` attribute restarts the audio/video playing at 0:00; otherwise, the audio/video stops at the end of the file
- `muted` attribute is used to play an audio/video file muted
  - video autoplays only if muted
- `poster` attribute can be used on video to set a poster image; otherwise, browser will display the first frame of the video
- `width` and `height` attributes can also be set

  ```html
  <audio src="file.mp3" controls type="audio/mpeg">
  <audio src="file.mp3" controls autoplay loop muted>
  
  <video src="file.mp4" controls type="video/mp4">
  <video src="file.mp4" controls autoplay loop>
  <video src="file.mp4" poster="picture.png">
  ```

- using JS you can listen for various events happening on an audio/video element, the most basic of which are:
  - play when the file starts playing
  - pause when the audio/video was paused
  - playing when the audio/video is resumed from a pause
  - ended when the end of the audio/video file was reached
