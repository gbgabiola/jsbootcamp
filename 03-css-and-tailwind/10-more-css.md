# More CSS

- [Box Model](#box-model)
- [Border](#border)
- [Margin and Padding](#margin-and-padding)


## Box Model
- every CSS eleement is essentially a box, every element is a generic box
- box model explains the sizing of the elements based on a few CSS properties
  - content area
  - padding
  - border
  - margin
- by default, if you set a width/height on the element, it's gonna be applied on the **content area**

![Box Model](box-model.png)


## Border

- border is a thin layer between padding and margin 
  - editing the border can make elements draw their perimeter on screen
- work on border using these properties:
  - `border-style` property lets you choose the style of the border
    - options are: `dotted`, `dashed`, `solid` which is mostly used, `double`, `groove`, `ridge`, `inset`, `outset`, `hidden`, and `none` is the default
    - set a different style for each edge using the properties:
      - `border-top-style`
      - `border-right-style`
      - `border-bottom-style`
      - `border-left-style`
  - `border-color` is used to set the color of the border, by default uses the color of the text in the element
  - `border-width` is used to set the width of the border, pre-defined values are:
    - `thin`
    - `medium` (default value)
    - `thick`
    - or express values in pixels, em, rem or any other valid length value
- `border` property is a shorthand for `border-width`, `border-style`, `border-color`
  - can also use edge-specific properties: `border-top`, `border-right`, `border-bottom`, `border-left`
- `border-radius` is used to set rounded corners to the border
- `border-image` has ability to use images as borders, and a shorthand property for
  - `border-image-source`
  - `border-image-slice`
  - `border-image-width`
  - `border-image-outset`
  - `border-image-repeat`


## Margin and Padding

**Note**:

- `margin` property adds space outside an element border
- `padding` property adds space inside an element border

### Specific margin/padding properties

- `margin-top` and `padding-top`
- `margin-right` and `padding-right`
- `margin-bottom` and `padding-bottom`
- `margin-left` and `padding-left`

### Using the margin/padding shorthand

`margin` and `padding` is a shorthand to specify multiple margins/paddings at the same time, and depending on the number of values entered, it behaves differently.

- **1 value** applies to **all** the margins/paddings: top, right, bottom, left.
- **2 values** applies the first to **bottom & top**, and the second to **left & right**
- **3 values** applies the first to **top**, the second to **left & right**, the third to **bottom**
- **4 values** applies the first to **top**, the second to **right**, the third to **bottom**, the fourth to **left**

### Values accepted

- `margin`/`padding` accepts values expressed in any kind of length unit, the most common ones are px, em, rem, but [many others exist](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- `margin` also accepts percentage values, and `auto` which is calculated by the browser

### Using auto to center elements

- `auto` can be used to tell the browser to select automatically a margin, which is commonly used to center an element
- using Flexbox, its `justify-content: center;`
- set `margin: 0 auto;` to support older browsers that does not implement Flexbox

### Using a negative margin

- `margin` is the only property related to sizing that can have a negative value
- setting a negative`margin-top` makes an element move over elements before it, and given enough negative value it will move out of the page
- negative `margin-bottom` moves up the elements after it
- negative `margin-right` makes the content of the element expand beyond its allowed content size
- negative `margin-left` moves the element left over the elements that precede it, and given enough negative value it will move out of the page
