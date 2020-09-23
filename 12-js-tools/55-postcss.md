# PostCSS

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Install the PostCSS CLI](#install-the-postcss-cli)
- [Autoprefixing](#autoprefixing)
- [Using Modern CSS Features in older browsers](#using-modern-css-features-in-older-browsers)
- [CSS Modules](#css-modules)
- [Linting CSS](#linting-css)
- [Minify CSS](#minify-css)
- [Other useful plugins](#other-useful-plugins)


## Introduction

- PostCSS is a tool that allows developers to write CSS pre-processors or post-processors, called plugins
  - has huge number of plugins that provide lots of functionalities
  - term "PostCSS" sometimes means the tool itself, plus the plugins ecosystem
- plugins can be run via the command line, but they are generally invoked by task runners at build time
- provides several features that will _deeply improve CSS_, and it integrates really well with any build tools
- PostCSS advantage over CSS preprocessors like Sass or Less, is the ability to pick the features we need and adding new capabilities at the same time
  - Sass or Less are "fixed", lots of features which we might or might not use, and we cannot extend them


## Install the PostCSS CLI

- install globally using `npm`:

  ```sh
  $ npm install -g postcss-cli
  ```

- then `postcss` command will be available
- e.g., runs the autoprefixer plugin on CSS files contained in the `css/` folder, and save the result in the `main.css` file:

  ```sh
  $ postcss --use autoprefixer -o main.css css/*.css
  ```


## Autoprefixing

- [Autoprefixer](https://github.com/postcss/autoprefixer) parses CSS and determines if some rules need a vendor prefix
  - follows [Can I Use](http://caniuse.com/) data

- e.g.,

  ```css
  a {
    display: flex;
  }
  ```

- result:

  ```css
  a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  ```


## Using Modern CSS Features in older browsers

- [CSSNext plugin](https://github.com/MoOx/postcss-cssnext) allows us to use modern CSS features while it takes care of transpiling them for older browsers
  - adds prefixes using Autoprefixer
  - allows us to use CSS Custom Properties
  - allows nesting, like in Sass
- [other features](http://cssnext.github.io/features/)


## CSS Modules

- `postcss-modules` plugin let us use CSS Modules
- CSS Modules are not part of the CSS standard, but they are a build step process to have scoped selectors


## Linting CSS

- linting helps us write correct CSS and avoid errors or pitfalls
- [stylint](https://stylelint.io/) plugin allows us to lint CSS at build time


## Minify CSS

- [cssnano](https://cssnano.co/) minifies CSS and makes code optimizations to have the least amount of code delivered in production


## Other useful plugins

- [LostGrid](https://github.com/peterramsing/lost) is a PostCSS grid system
- [postcss-sassy](https://github.com/andyjansson/postcss-sassy-mixins) provides Sass-like mixins
- [postcss-nested](https://github.com/postcss/postcss-nested) provides the ability to use Sass nested rules
- [postcss-nested-ancestors](https://github.com/toomuchdesign/postcss-nested-ancestors), reference any ancestor selector in nested CSS
- [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars), use Sass-like variables
- [PreCSS](https://github.com/jonathantneal/precss) provides you many features of Sass, and this is what is most close to a complete Sass replacement
- [full list of the plugins](https://github.com/postcss/postcss/blob/master/docs/plugins.md)
