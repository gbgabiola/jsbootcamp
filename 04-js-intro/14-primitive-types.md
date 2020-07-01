# Primitive Types

- [Numbers](#numbers)
- [Number Properties and Methods](#number-properties-and-methods)
- [Strings](#strings)


## Numbers

- Number type is assigned when variable is created with a number value
  - supports positive and negative numbers
- can be decimals
- can be defined using hexadecimal syntax by using `0x` prefix
- JS only has type for numbers, every numbers is a **float**
  - some numbers cannot be represented **exactly**
- JS stores numbers as floats, and floats cannot be represented with full precision by the computer, technically

  ```js
  2.2*2 // 4.4
  2.2*20 // 44
  2.2*200 // 440.00000000000006 (???)
  2.2*2000 // 4400
  2.2*20000 // 44000

  0.1 * 0.1 // 0.010000000000000002
  ```

- the problem is generally solved by avoiding to process numbers as decimals

  ```js
  (0.1 * 10) * (0.1 * 10) / 100
  ```

- best avoided by not storing decimals at all, and using calculations to just render numbers as decimals to the user, see [StackOverflow](https://stackoverflow.com/questions/39256662/how-to-handle-precision-and-rounding-errors-in-currency/39256914#39256914) explanation
- if 2 digits of decimal numbers is needed, multiply them by 100 before storing, so you never have decimals in the first place
  - e.g., Stripe [requires you to use $ / € amounts multiplied by 100 instead of decimals](https://stackoverflow.com/questions/35326710/stripe-currency-are-all-amounts-in-cents-100ths-or-does-it-depend-on-curren)


## Number Properties and Methods

- `number` value can be generated in different ways
- using a `number` literal syntax

  ```js
  const age = 36
  typeof age // number
  ```

- using `Number` global function

  ```js
  const age = Number(36)
  typeof age // number
  ```

- adding `new` keyword, we get `Number` object in return
  - which has a different behavior than a `number` type
  - use `valueOf()` method to get the `number` value

  ```js
  const age = new Number(36)
  typeof age // object
  age.valueOf() // 36
  ```

### Properties

- `EPSILON` the smallest interval between two numbers
- `MAX_SAFE_INTEGER` the maximum integer value JavaScript can represent
- `MAX_VALUE` the maximum positive value JavaScript can represent
- `MIN_SAFE_INTEGER` the minimum integer value JavaScript can represent
- `MIN_VALUE` the minimum positive value JavaScript can represent
- `NaN` a special value representing “not a number”
- `NEGATIVE_INFINITY` a special value representing negative infinity
- `POSITIVE_INFINITY` a special value representing positive infinity

```js
Number.EPSILON // 2.220446049250313e-16
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_SAFE_INTEGER // -9007199254740991
Number.MIN_VALUE // 5e-324
Number.NaN // NaN
Number.NEGATIVE_INFINITY // -Infinity
Number.POSITIVE_INFINITY // Infinity
```

### Object Methods

- `Number.isNaN(value)` returns true if value is not a number
  - number is `NaN` only if it's NaN or if it's a division of 0 by 0 expression
- `Number.isFinite(value)` returns true if value is a finite number
  - anything else, booleans, strings, objects, arrays, returns false
- `Number.isInteger(value)` returns true if value is an integer
  - anything else, booleans, strings, objects, arrays, returns false
- `Number.isSafeInteger(value)` returns true if value is a safe integer
  - integer that can be exactly represented as an IEEE-754 double precision number (all integers from (2^53 - 1) to -(2^53 - 1)), see [Safe integers in JavaScript](https://2ality.com/2013/10/safe-integers.html)
- `Number.parseFloat(value)` converts value to a floating point number and returns it
  - convert strings and extract the first number
  - if a string does not start with a number it will return `NaN`
- `Number.parseInt(value)` converts value to an integer and returns it
  - works like `parseFloat` but without decimals
  - we can add second parameter to specify the radix
    - radix 10 is default but we can also use octal or hexadecimal number conversions

### Instance Methods

- `Number` object offers methods to convert the number to specific formats
- `.toExponential()` return a string representing the number in exponential notation
  - pass an argument to specify the fractional part digits

  ```js
  new Number(10).toExponential() // 1e+1 (= 1 * 10^1)
  new Number(21.2).toExponential() // 2.12e+1 (= 2.12 * 10^1)

  new Number(21.2).toExponential(1) // 2.1e+1
  new Number(21.2).toExponential(5) // 2.12000e+1
  ```

- `.toFixed()` return a string representing the number in fixed-point notation
  - we can pass an optional number setting the digits

  ```js
  new Number(21.2).toFixed() // 21

  new Number(21.2).toFixed(0) // 21
  new Number(21.2).toFixed(1) // 21.2
  new Number(21.2).toFixed(2) // 21.20
  ```

- `.toLocaleString()` return a string with the local specific conventions of the number
- `.toPrecision()` return a string representing the number to a specified precision

  ```js
  new Number(21.2).toPrecision(0) // error! argument must be > 0
  new Number(21.2).toPrecision(1) // 2e+1 (= 2 * 10^1 = 20)
  new Number(21.2).toPrecision(2) // 21
  new Number(21.2).toPrecision(3) // 21.2
  new Number(21.2).toPrecision(4) // 21.20
  new Number(21.2).toPrecision(5) // 21.200
  ```

- `.toString()` return a string representing the specified object in the specified radix (base)
  - overrides the `Object.prototype.toString()` method

  ```js
  new Number(10).toString() // 10
  new Number(10).toString(2) // 1010
  new Number(10).toString(8) // 12
  new Number(10).toString(16) // a
  ```

- `.valueOf()` return the number primitive value of the `Number` object

  ```js
  const age = new Number(36)
  typeof age //object
  age.valueOf() //36
  ```


## Strings

- string is a sequence of characters
- can be defined as a string literal, which is enclosed in quotes (`''`) or double quotes (`""`)
- `length` property can be used to determine the length of a string
  - `''` is an empty string
- two strings can be joined using the `+` operator
- `+` operator can also be used to _interpolate_ variables

  ```js
  const name = 'Genesis'
  'My name is ' + name // My name is Genesis
  ```

- template literals is another way to define strings which is useful for multiline strings
  - easy way to interpolate variables and expressions into strings inside `${}`

  ```js
  const string = `something ${1 + 2 + 3}`

  const isTrue = () => true
  const string2 = `something
    ${isTrue() ? 'x' : 'y'}`
  ```

