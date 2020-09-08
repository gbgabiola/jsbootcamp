# CSS Animations

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Adding more keyframes](#adding-more-keyframes)
- [The CSS animation properties](#the-css-animation-properties)
- [JS events for CSS Animations](#js-events-for-css-animations)
- [Properties We Can Animate using CSS Animations](#properties-we-can-animate-using-css-animations)


## Introduction

- `animation` property is used to apply animation to an element

  ```css
  .container {
    animation: spin 10s linear infinite;
  }
  ```

  - `spin` is the name of the animation, which we need to define separately
  - we also tell CSS to make the animation last 10 seconds
  - perform it in a linear way (no acceleration or any difference in its speed)
  - and repeat it infinitely
- **keyframes** is how we **define how our animation works**, e.g., animation that rotates an item:

  ```css
  @keyframes spin {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  ```

  - inside the `@keyframes` definition we can have as many intermediate waypoints as we want
  - in this case, we instruct CSS to make the `transform` property to rotate the Z axis from 0 to 360 grades, completing the full loop
  - **Note**: how this does not dictate anything about the temporal interval the animation should take
    - this is defined when we use it via `animation`


## Adding more keyframes

We can add more keyframes to have funnier animations:

```css
@keyframes spin {
	0% {
		transform: rotateZ(0);
	}
	25% {
		transform: rotateZ(30deg);
	}
	50% {
		transform: rotateZ(270deg);
	}
	75% {
		transform: rotateZ(180deg);
	}
	100% {
		transform: rotateZ(360deg);
	}
}
```


## The CSS animation properties

- `animation` is a shorthand property for all these properties, in this order:
  - `animation-name` sets the name of the animation, it references an animation created using `@keyframes`
  - `animation-duration` is how long the animation should last, in seconds
  - `animation-timing-function`	is the timing function used by the animation, e.g., `linear`, `ease` (default)
  - `animation-delay`	sets optional number of seconds to wait before starting the animation
  - `animation-iteration-count`	sets how many times the animation should be performed, expects a number, or infinite, 1 is default
  - `animation-direction` is the direction of the animation, e.g., `normal`, `reverse`, `alternate` or `alternate-reverse`
  - `animation-fill-mode`	defines how to style the element when the animation ends, after it finishes its iteration count number
  - `none` or `backwards` go back to the first keyframe styles
  - `forwards` and `both` use the style that's set in the last keyframe
  - `animation-play-state`	if set to `paused`, it pauses the animation, default is `running`

```css
.container {
  /* animation: name
             duration
             timing-function
             delay
             iteration-count
             direction
             fill-mode
             play-state; */
  animation: spin 10s linear infinite;
}
```


## JS events for CSS Animations

- using JS we can listen for the following events:
  - `animationstart`
  - `animationend`
  - `animationiteration`
- **Note**:
  - be careful with `animationstart`, because if the animation starts on page load, JS code is always executed after the CSS has been processed, so the animation is already started and we cannot intercept the event

```js
const container = document.querySelector('.container');
container.addEventListener('animationstart', (e) => {
	//do something
}, false);
container.addEventListener('animationend', (e) => {
	//do something
}, false);
container.addEventListener('animationiteration', (e) => {
	//do something
}, false);
```


## Properties We Can Animate using CSS Animations

- `background`
- `background-color`
- `background-position`
- `background-size`
- `border`
- `border-color`
- `border-width`
- `border-bottom`
- `border-bottom-color`
- `border-bottom-left-radius`
- `border-bottom-right-radius`
- `border-bottom-width`
- `border-left`
- `border-left-color`
- `border-left-width`
- `border-radius`
- `border-right`
- `border-right-color`
- `border-right-width`
- `border-spacing`
- `border-top`
- `border-top-color`
- `border-top-left-radius`
- `border-top-right-radius`
- `border-top-width`
- `bottom`
- `box-shadow`
- `caret-color`
- `clip`
- `color`
- `column-count`
- `column-gap`
- `column-rule`
- `column-rule-color`
- `column-rule-width`
- `column-width`
- `columns`
- `content`
- `filter`
- `flex`
- `flex-basis`
- `flex-grow`
- `flex-shrink`
- `font`
- `font-size`
- `font-size-adjust`
- `font-stretch`
- `font-weight`
- `grid-area`
- `grid-auto-columns`
- `grid-auto-flow`
- `grid-auto-rows`
- `grid-column-end`
- `grid-column-gap`
- `grid-column-start`
- `grid-column`
- `grid-gap`
- `grid-row-end`
- `grid-row-gap`
- `grid-row-start`
- `grid-row`
- `grid-template-areas`
- `grid-template-columns`
- `grid-template-rows`
- `grid-template`
- `grid`
- `height`
- `left`
- `letter-spacing`
- `line-height`
- `margin`
- `margin-bottom`
- `margin-left`
- `margin-right`
- `margin-top`
- `max-height`
- `max-width`
- `min-height`
- `min-width`
- `opacity`
- `order`
- `outline`
- `outline-color`
- `outline-offset`
- `outline-width`
- `padding`
- `padding-bottom`
- `padding-left`
- `padding-right`
- `padding-top`
- `perspective`
- `perspective-origin`
- `quotes`
- `right`
- `tab-size`
- `text-decoration`
- `text-decoration-color`
- `text-indent`
- `text-shadow`
- `top`
- `transform.`
- `vertical-align`
- `visibility`
- `width`
- `word-spacing`
- `z-index`
