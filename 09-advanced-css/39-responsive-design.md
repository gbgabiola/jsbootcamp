# Responsive Design

- [Introduction](#introduction)
- [Media types](#media-types)
- [Media feature descriptors](#media-feature-descriptors)
- [Logic operators](#logic-operators)
- [Media queries](#media-queries)


## Introduction

- always think about all the devices that could access the web page we are building
  - desktop computers, tablets, smartphones
- every devices will use the same technology (browser) to view the page, but the screen size will be different
- HTML and CSS provide us a way to conditionally load CSS based on the screen size, and let us set boundaries


## Media types

- **media types** allow us to determine on which media a CSS file, or a piece of CSS, is loaded
  - `all` means all the media
  - `print` used when printing
  - `screen` (default) used when the page is presented on a screen
  - `speech` used for screen readers
- we can use them in `@import` declaration and `media` attribute
  - load a CSS file on multiple media types separating each with a comma

  ```css
  @import url(myfile.css) screen;
  @import url(myfile-print.css) print;

  @import url(myfile.css) screen, print;
  ```

- works for the `link` tag in HTML

  ```html
  <link rel="stylesheet" type="text/css" href="myfile.css" media="screen">
  <link rel="stylesheet" type="text/css" href="another.css" media="screen, print">
  ```


## Media feature descriptors

- **media feature descriptors** are additional keywords that we can add to the `media` attribute of `link` or the `@import` declaration, to express more conditionals over the loading of the CSS
  - `width`
  - `height`
  - `device-width`
  - `device-height`
  - `aspect-ratio`
  - `device-aspect-ratio`
  - `color`
  - `color-index`
  - `monochrome`
  - `resolution`
  - `orientation`
  - `scan`
  - `grid`
- each has a corresponding `min-*` and `max-*`, e.g., 
  - `min-width`, `max-width`
  - `min-device-width`, `max-device-width`
- some accepts a length value which can be expressed in `px`, `rem` or any length value
  - `width`, `height`, `device-width`, `device-height`

  ```css
  @import url(myfile.css) screen and (max-width: 800px);
  ```

- `orientation`, used to detect the device orientation: `portrait` or `landscape`
- `scan`, used to determine the type of screen: `progressive` (modern displays) or `interlace` (older CRT devices)

  ```html
  <link rel="stylesheet" type="text/css" href="myfile.css" media="screen and (orientation: portrait)">
  ```

- `color` which inspects the number of bits per color component used by the device
  - very low-level, but we just need to know it's there for our usage (like `grid`, `color-index`, `monochrome`)
- `aspect-ratio` and `device-aspect-ratio` accept a ratio value representing the width to height viewport ratio, which is expressed as a fraction

  ```css
  @import url(myfile.css) screen and (aspect-ratio: 4/3);
  ```

- `resolution` represents the pixel density of the device, expressed in a [resolution data type](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution) like `dpi`

  ```css
  @import url(myfile.css) screen and (min-resolution: 100dpi);
  ```


## Logic operators

- we can combine rules using `and`

  ```html
  <link rel="stylesheet" type="text/css" href="myfile.css" media="screen and (max-width: 800px)">
  ```

- "or" type of logic operation can be used using commas, which combines multiple media queries

  ```css
  @import url(myfile.css) screen, print;
  ```

- `not` to negate a media query

  ```css
  @import url(myfile.css) not screen;
  ```
  
- **Note**: `not` can only be used to negate an entire media query, so it must be placed at the beginning of it (or after a comma)


## Media queries

- all rules can be applied inside the CSS too by wrapping them in `@media () {}` structure which is the foundation for **responsive design**
- media queries can be quite complex
- CSS only applies if it's a screen device, the width is between 600 and 800 pixels, and the orientation is landscape

  ```css
  @media screen and (max-width: 800px) and (min-width: 600px) and (orientation: landscape) {
    /* enter some CSS */
  }
  ```
