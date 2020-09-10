# The Canvas API

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Resize a canvas](#resize-a-canvas)
- [Get a context from the canvas](#get-a-context-from-the-canvas)
- [Draw elements to a canvas](#draw-elements-to-a-canvas)
- [Changing the colors](#changing-the-colors)
- [Drawing rectangles](#drawing-rectangles)
- [Drawing text](#drawing-text)
- [Drawing lines](#drawing-lines)
- [Demo](#demo)
- [Performance](#performance)


## Introduction

- HTML `<canvas>` is an HTML tag, an element where we can draw to using the Canvas API
- main difference between SVG and the Canvas API
  - SVG is vector based
  - Canvas is pixel based
    - has the same scaling issues as pixel-based PNG, JPG and GIF image formats
    - impossible to edit using CSS or JavaScript like we can do with SVG
- `<canvas></canvas>` in a blank HTML file creates a canvas
  - canvas is an invicible element
  - `canvas` is reacheable from JS using the DOM Selectors API: `document.querySelector('canvas')`


## Resize a canvas

- we can set the canvas width and height in CSS to fill all the outer element size:

  ```css
  canvas {
    border: 1px solid black;
    width: 100%;
    height: 100%;
  }
  ```

- putting the canvas as a first level element in the HTML, the above code will expand the canvas to fit the entire body
- if the body is not filling the entire window size, we need to use JavaScript:

  ```js
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ```

- if the window resizes we need to recalculate the canvas width as well
  - using a **debounce** to avoid calling our canvas resizing too many times:

  ```js
  const debounce = func => {
    let timer;
    return event => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100, event);
    };
  };

  window.addEventListener('resize', debounce(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }));
  ```


## Get a context from the canvas

- `getContext()` method returns a drawing context on the canvas, according to the type that we pass as parameter, e.g., `const c = canvas.getContext('2d');`
  - `2d`
  - `webgl` to use WebGL version 1
  - `webgl2` to use WebGL version 2
  - `bitmaprenderer` to use with [ImageBitmap](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap)
- `c` or `ctx` are common variable convention for "context"
- based on the context type, we can pass a second parameter to `getContext()` to specify additional options
  - in the case of the `2d` context, we basically have one parameter we can use in all browsers
  - `alpha` is a boolean that defaults to `true`
    - if set to `false`, the browser knows the canvas does not have a transparent background and can speed up rendering


## Draw elements to a canvas

- several methods to draw:
  - text
  - lines
  - rectangles
  - paths
  - images
- each of those elements we can alter the fill, the stroke, the gradient, the pattern, the shadow, rotate them, scale and perform a lot of operations
- `fillRect(x, y, width, height)` method serves this purpose: `c.fillRect(100, 100, 100, 100)`
  - will draw a black rectangle of 100 x 100 pixels, starting from position x 100 and y 100


## Changing the colors

- `fillStyle` and `strokeStyle` properties changed the fill and stroke colors of any figure
  - accepts any valid CSS color, including strings and RGB calculations

  ```js
  c.strokeStyle = `rgb(255, 255, 255)`;
  c.fillStyle = `white`;
  ```


## Drawing rectangles

- 3 methods:
  - `fillRect(x, y, width, height)`
  - `strokeRect(x, y, width, height)` draws the stroke using the current stroke style
    - `strokeStyle` context property changes the stroke style
  - `clearRect(x, y, width, height)` sets an area as transparent

  ```js
  const c = canvas.getContext('2d');
  for (let i = 0; i < 61; i++) {
    for (let j = 0; j < 61; j++) {
      c.strokeStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`;
      c.strokeRect(j * 20, i * 20, 20, 20);
      c.clearRect(200, 200, 500, 400);
    }
  };
  ```


## Drawing text

- 2 methods:
  - `fillText(text, x, y)`
  - `strokeText(text, x, y)`
- `x` and `y` refer to the bottom-left corner
- `font` property let us change the font family and size, e.g., `c.font = '148px Courier New'`
- other properties we can change, related to text:
  - `textAlign` accepts `start` (default), `end`, `left`, `right`, `center`
  - `textBaseline` accepts `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, `bottom`
  - `direction` accepts `ltr`, `rtl`, `inherit` (default)


## Drawing lines

- to draw a line we first call the `beginPath()` method
  - then we provide a starting point with `moveTo(x, y)`
  - and then we call `lineTo(x, y)` to make the line to that new coordinates set
  - finally call `stroke()`

  ```js
  c.beginPath();
  c.moveTo(10, 10);
  c.lineTo(300, 300);
  c.stroke();
  ```


## Demo

- [this code](./canvas-demo/not-animated.js) creates a canvas that generates 800 circles
  - every circle is perfectly contained in the canvas, and its radius is randomized
  - any time we resize the window, the elements are regenerated
- [this code](./canvas-demo/not-interactive.js) animates the elements using a loop
  - every circle moves within the borders of the canvas
  - when the border is reached, it bounces back
  - we achieve this by using `requestAnimationFrame()` and slightly moving the image at every frame rendering iteration
- [this code](./canvas-demo/interactive.js) lets us interact with the circles using mouse
  - hovering the canvas, the items near the mouse will increase in size, and they will return back to normal when we move somewhere else
  - track the mouse position using 2 variables:

    ```js
    let mousex = undefined;
    let mousey = undefined;

    window.addEventListener('mousemove', e => {
      mousex = e.x;
      mousey = e.y;
    });
    ```

  - use those variables inside the `update()` method of `Circle`, to determine if the radius should increase (or decrease):

    ```js
    if (
      mousex - this.x < distanceFromMouse &&
      mousex - this.x > -distanceFromMouse &&
      mousey - this.y < distanceFromMouse &&
      mousey - this.y > -distanceFromMouse
    ) {
      if (this.radius < maxRadius) this.radius += 1;
    } else if (this.radius > this.minRadius) this.radius -= 1;
    ```
  
  - `distanceFromMouse` is a value expressed in pixels (set to 200) that defines how far we want the circles to react to the mouse


## Performance

- if we try to add a bunch more circles and moving parts, we'll probably notice performance issues
  - browsers consume a lot of energy to render the canvas with animations and interactions, so pay attention so that the experience is not ruined on less performant machines
- [this code](./canvas-demo/with-emojis.js) has emojis rather than circles we can see that text takes a lot more power to render, and so it was sluggish pretty quickly
- MDN performance tips for [optimizing canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
