# SCSS

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Compiling a SCSS file](#compiling-a-scss-file)
- [Nested selectors](#nested-selectors)
- [Variables](#variables)
- [Modules](#modules)
- [Mixins](#mixins)


## Introduction

- CSS preprocessors are built upon CSS to make it easier to write, and more maintainable
  - most popular are: Sass, SCSS, Less, Stylus, Compass
- Sass removes brackets and semicolons to offer a Ruby like syntax
- SCSS is a superset of CSS, meaning any valid CSS sytax is also valid SCSS
  - write SCSS to a `.scss` file


## Compiling a SCSS file

Install `node-sass` npm package is one way to compile SCSS file to CSS

```sh
$ npm install node-sass
```

Add a script in `package.json` 

```json
"scripts": {
  "scss": "node-sass --watch scss -o css"
}
```

`npm run scss` will compile any `.scss` file in the `scss` folder and generate the corresponding `.css` in the `css` folder, and will keep watching for changes


## Nested selectors

Nested selectors is a SCSS feature

CSS:

```css
div {
  /* div rules */
}

div p {
  /* div p rules */
}

div p a {
  /* div p a rules */
}
```

SCSS:

```scss
div {
  /* div rules */
  p {
    /* div p rules */
    a {
      /* div p a rules */
    }
  }
}
```

We can use the `&` character to use pseudo selectors:

```scss
a {
  /* a rules */
  &:hover {
    /* a:hover rules */
  }
}
```

**Tip**: we can use PostCSS and the [nested plugin](https://github.com/postcss/postcss-nested) to achieve the same result


## Variables

- we can attach a value to a variable and reuse this variable
  - similar to CSS custom properties, but the syntax is much easier


CSS:

```css
--primary-color: #fff;

p {
  color: var(--primary-color);
}
```

SCSS:

```scss
$color: #fff;

p {
  color: $color;
}
```


## Modules

- one of the issues with CSS is organizing our code
- CSS offers the` @import` syntax, but it's not always ideal
  - because while during development it's great to have code properly divided and organized
  - we don't want to serve dozens of CSS files to the end user
- SCSS provides us a great way to generate in the end a single CSS file, starting from multiple SCSS files
- we can write some SCSS code into a file that starts with an underscore, and it will not be considered a standalone SCSS file
  - in other standalone SCSS files, use the `@use` keyword to import all the rules defined in that partial and we can access variables defined in the partial using the `<file>.<variable>` syntax

_colors.scss

```scss
$maincolor: #fff;
```

main.scss

```scss
@use colors;

p {
  color: colors.$maincolor;
}
```


## Mixins

- mixins are a great way to avoid repeating the same things over and over again
- one useful example is having to deal with browser vendor prefixes
  - we need them sometimes to support new features, or to provide support for well-established features for older browsers
- create a `align-items` mixin that accepts a variable to provide automatically browser prefixes for the features we need

  ```scss
  @mixin align-items($align) {
    -webkit-align-items: $align;
    -moz-align-items: $align;
    -ms-align-items: $align;
    align-items: $align;
  }

  .box { 
    @include align-items(center);
  }
  ```

- result in CSS

  ```css
  .box {
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
  }
  ```

- PostCSS Autoprefixer plugin is one way to do it
