# CSS Basics

- [Introduction to CSS](#introduction-to-css)
- [A brief history of CSS](#a-brief-history-of-css)
- [Adding CSS to an HTML page](#adding-css-to-an-html-page)
- [Selectors](#selectors)
- [Cascade](#cascade)
- [Specificity](#specificity)
- [Inheritance](#inheritance)
- [Attribute selectors](#attribute-selectors)


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
- `class` and `id` attributes are commonly used within CSS to associate styling to a specific element
  - class can be repeated across multiple elements, but you can only use an id once
- classes are identified using the (`.`) symbol, while ids using the (`#`) symbol

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

### Combining selectors

#### Targeting an element with a class or id

- why combine? to have more specificity

```css
p.dog-name {
  color: yellow;
}

p#dog-name {
  color: yellow;
}
```

#### Targeting multiple classes

- combining the class names separated with a dot (`.`) without spaces

```css
.dog-name.roger {
  color: yellow;
}
```

#### Combining classes and ids

```css
.dog-name#roger {
  color: yellow;
}
```

### Grouping selectors

- separate selectors with a comma (`,`)

```css
p, .dog-name {
  color: yellow;
}

/* put each declarations to a new line to make them more clear */
p,
.dog-name {
  color: yellow;
}
```

### Follow the document tree with selectors

- use space to target one or multiple levels deep element
- use `>` symbol to target the first direct children
- use `+` operator to target adjacent sibling

```html
<span>
  Hello!
</span>
<p>
  My dog name is:
  <span class="dog-name">
    Roger
  </span>
</p>
```

```css
p span {
  color: yellow;
}

p > span {
  color: yellow;
}

p + span {
  color: yellow;
}
```

- other selectors:
  - attribute selectors
  - pseudo class selectors
  - pseudo element selectors


## Cascade

- cascade is a fundamental concept of CSS which is the process, or algorithm, that determines the properties applied to each element on the page
- factors consideration:
  - specificity
  - importance
  - inheritance
  - order in the file


## Specificity

- **the more specific rule will win**
- if two or more rules have the **same specificity, the one that appears last wins**

### How to calculate specificity

- Specificity is calculated using a convention
- We have 4 slots, and each one of them starts at 0: 0 0 0 0
  - left slot is the most important, and the rightmost one is the least important.
- uses decimal system: `1 0 0 0` is higher than `0 1 0 0`

#### Slot 1

- slot 1 (rightmost one) is the least important
- increases the value when we have an **element selector**

```css
p {}            /* 0 0 0 1 */
p span {}       /* 0 0 0 2 */
p > span {}     /* 0 0 0 2 */
div p > span {} /* 0 0 0 3 */
```

#### Slot 2

- slot 2 is incremented by 3 things:
  - class selectors
  - pseudo-class selectors
  - attribute selectors

  ```css
  .name {}          /* 0 0 1 0 */
  .users .name {}   /* 0 0 2 0 */
  [href$='.pdf'] {} /* 0 0 1 0 */
  :hover {}         /* 0 0 1 0 */
  ```

- can be combined with slot 1 selectors

  ```css
  div .name {}            /* 0 0 1 1 */
  a[href$='.pdf'] {}      /* 0 0 1 1 */
  .pictures img:hover {}  /* 0 0 2 1 */
  ```

- one nice trick with classes is that you can repeat the same class and increase the specificity

  ```css
  .name {}            /* 0 0 1 0 */
  .name.name {}       /* 0 0 2 0 */
  .name.name.name {}  /* 0 0 3 0 */
  ```

#### Slot 3

- slot 3 holds the most important thing that can affect CSS specificity in a CSS file: the id

  ```css
  #name {}        /* 0 1 0 0 */
  .user #name {}  /* 0 1 1 0 */
  #name span {}   /* 0 1 0 1 */
  ```

#### Slot 4

- slot 4 is affected by inline styles which takes precedence over both embedded and external CSS

  ```html
  <p style="color: red">Test</p> <!-- 1 0 0 0 -->
  ```

### Importance

- specificity does not matter if a rule ends with `!important`
  - take precedence over any rule with more specificity

  ```css
  p {
    font-size: 20px!important;
  }
  ```

### Tips

- use the amount of specificity you need, but not more
- many CSS experts advocate against using `!important`
- very useful for trying out some style, to make the browser apply the CSS
- using `id` attribute to style CSS is also debatable, since it has a very high specificity
  - good alternative is to use classes instead, which have less specificity

### Tools to calculate the specificity

- [Specificity Calculator](https://specificity.keegan.st/)


## Inheritance

- when you set some properties on a selector in CSS, they are inherited by all the children of that selector
  - not all because some properties make sense to be inherited, e.g., fonts like `font-family`
  - some other properties make more sense to _not_ be inherited, .e.g, `background-color`

### Properties that inherit

- [Sitepoint article](https://www.sitepoint.com/css-inheritance-introduction/)

### Forcing properties to inherit

- set the property value of the childrem to the special keyword `inherit`

  ```css
  body {
    background-color: yellow;
  }

  p {
    background-color: inherit;
  }
  ```

### Forcing properties to NOT inherit

- use `revert` keyword which will revert it to the original value the browser gave it in its default stylesheet

### Other special values

- `initial` keyword set a CSS property to its default value
- `unset` keyword will act as inherit if the parent has a value that matches, or else it will act as initial


## Attribute selectors

### Attribute presence selectors

- we can check if an element **has** an attribute using the `[]` syntax

  ```css
  p[id] {
    /* ... */
  }
  ```

### Exact attribute value selectors

- inside the brackets check the attribute value using `=`, and CSS will be applied only if the attribute matches the exact value specified

  ```css
  p[id="my-id"] {
    /* ... */
  }
  ```

### Match an attribute value portion

- `*=` checks if the attribute contains the partial
- `^=` checks if the attribute starts with the partial
- `$=` checks if the attribute ends with the partial
- `|=` checks if the attribute starts with the partial or sometimes followed by a dash (common in classes)
- `~=` checks if the partial is contained in the attribute, but separated by spaces from the rest
- all checks are **case sensitive**
- add an `i` before the closing bracket to make it case incensitive
  - check for [browsers support](https://caniuse.com/#feat=css-case-insensitive)
