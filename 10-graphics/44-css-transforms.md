# CSS Transforms

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [2D transforms](#2d-transforms)
- [Combining multiple transforms](#combining-multiple-transforms)
- [3D transforms](#3d-transforms)


## Introduction

Transforms allow us to translate, rotate, scale, and skew elements, in the 2D or 3D space.


## 2D transforms

- `transform` property accepts these functions:
  - `translate()` to move elements around
  - `rotate()` to rotate elements
  - `scale()` to scale elements in size
  - `skew()` to twist or slant an element
  - `matrix()` a way to perform any of the above operations using a matrix of 6 elements, a less user friendly syntax but less verbose
- axis-specific functions:
  - `translateX()` to move elements around on the X axis
  - `translateY()` to move elements around on the Y axis
  - `scaleX()` to scale elements in size on the X axis
  - `scaleY()` to scale elements in size on the Y axis
  - `skewX()` to twist or slant an element on the X axis
  - `skewY()` to twist or slant an element on the Y axis
- [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) let us set the origin (the `(0, 0)` coordinates) for the transformation, letting us change the rotation center

**Example**: transform changes the `.box` element width by 2 (duplicating it) and the height by 0.5 (reducing it to half):

```css
.box {
  transform: scale(2, 0.5);
}
```


## Combining multiple transforms

We can combine multiple transforms by separating each function with a space:

```css
transform: rotateY(20deg) scaleX(3) translateY(100px);
```


## 3D transforms

With 3D, we are adding another axis, Z, which adds depth to out visuals

- `perspective` property let us specify how far the 3D object is from the viewer

  ```css
  .three-d-element {
    perspective: 100px;
  }
  ```

- `perspective-origin` determines the appearance of the position of the viewer, how are we looking at it in the X and Y axis
- now we can use additional functions that control the Z axis, that adds up to the other X and Y axis transforms
  - `translateZ()`
  - `rotateZ()`
  - `scaleZ()`
- `translate3d()`, `rotate3d()` and `scale3d()` are shorthands for using `translateX()`, `translateY()` and `translateZ()`
