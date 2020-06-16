# CSS Basics

- [Introduction to CSS](#introduction-to-css)
- [A brief history of CSS](#a-brief-history-of-css)
- [Adding CSS to an HTML page](#adding-css-to-an-html-page)
- [Selectors](#selectors)


## Introduction to CSS

- **Cascading Style Sheets** (**CSS**) is used to style an HTML file, and tell the browser how to render the elements on the page
- CSS file contains several CSS rules, each rule is composed of:
  - **selector** is a string that identifies element/s on the page
  - **declaration block** contains one or more **declarations** which is composed by a **property** and **value** pair

### How does CSS look like

- CSS **rule set** has **selector** and **declaration** which contains various rules, each composed by a **property**, and a **value**
- multiple rules can be stacked one after the other
- selector can target one or more items
- selector can target HTML tags, elements with `class` or `id` attribute, and more, e.g., `.my-class`, `#my-id`
- `p` and `a` are the selectors, `font-size` and `color` are the properties, `20px` and `blue` are the values

  ```css
  p {
    font-size: 20px;
  }

  a {
    color: blue;
  }

  p, a {
    font-size: 20px;
  }
  ```

### Semicolons

- every CSS rule terminates with a semicolon
- semicolons are **not** optional, except after the last rule
- **Convention**: always add semicolon for consistency and to avoid errors if you add another property and forget to add the semicolon on the previous line

### Formatting and indentation

- css has no fixed rule for formatting
- **Convention**: stick selectors and the closing brackets to the left, indent 2 spaces for each rule, have the opening bracket on the same line of the selector, separated by one space


## A brief history of CSS

- CSS was grown out of the necessity of styling web pages
- CSS initial idea was proposed on 1994
- CSS was first released on 1996, CSS Level 1 (CSS1)
- CSS Level 2 (CSS2) was published on 1998
- first browser with full CSS support: IE for Mac was shipped on 2002, [CSS Tricks post](https://css-tricks.com/look-back-history-css/)
- CSS2 is still the base for the CSS we write today, and we have many more features built on top of it


## Adding CSS to an HTML page

### 1: Using the `link` tag

- `link` tag is preferred way to use CSS as it's intended to be used:
  - one CSS file is included by all the pages of your site
  - changing one line on that file affects the presentation of all the pages in the site
- inside the `head` tag, add a `link` tag with the `href` attribute pointing to the CSS file you want to include

  ```html
  <link rel="stylesheet" type="text/css" href="myfile.css">
  ```

### 2: Using the `style` tag

- inside a `style` tag, add the CSS directly
- good way to experiment before "formalising" CSS to a separate file

  ```html
  <style>
  ...our CSS...
  </style>
  ```

### 3: Inline styles

- add a `style` attribute to any HTML tag, and add CSS into it

  ```html
  <div style="background-color: yellow">...</div>
  ```

## Selectors

A selector allows us to associate one or more declarations to one or more elements on the page.

### Basic selectors

- every HTML tag has a corresponding selector, e.g., `div`, `span`, `img`
  - if a selector matches multiple elements, all elements will be affected by the change
- classes are identified using the (`.`) symbol, while ids using the (`#`) symbol.

  ```css
  /* tag selector */
  p {
    color: yellow;
  }

  /* tag selector */
  .dog-name {
    color: yellow;
  }

  /* tag selector */
  #dog-name {
    color: yellow;
  }
  ```

