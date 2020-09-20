# Primitive Types

## Table of Contents <!-- omit in toc -->

- [Numbers](#numbers)
- [Number Properties and Methods](#number-properties-and-methods)
- [Strings](#strings)
- [String Methods](#string-methods)
- [Booleans](#booleans)
- [Null and Undefined](#null-and-undefined)


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


## String Methods

- all methods are case sensitive and do not mutate original string
- `charAt(i)` returns the character at the position `i` of a string
  - index that does not match the string will return an empty string
  - JS does not have "char" type, so a char is a string of length 1

  ```js
  'Developer'.charAt() // 'D'
  'Developer'.charAt(1) // 'e'
  'Developer'.charAt(9) // ''
  ```

- `concat(str)` concatenates the current string with the string `str`

  ```js
  'Web'.concat(' Developer') // 'Web Developer'
  ```

- `endsWith(str)` check if a string ends with the value of the string `str`

  ```js
  'Developer'.endsWith('per') // true
  'Developer'.endsWith('Per') // false
  ```

- `includes(str)` check if a string includes the value of the string `str`
  - accepts an integer (optional) which indicates the position where to start searching for

  ```js
  'Developer'.includes('loper') // true
  'Developer'.includes('dev') // false
  'Developer'.includes('Developer') // true
  'Developer'.includes('web') // false
  'Developer'.includes('lope', 5) // false
  'Developer'.includes('lope', 4) // true
  ```

- `indexOf(str)` gives the position of the first occurrence of the string `str` in the current string
  - returns `-1` if the string is not found

  ```js
  'Developer'.indexOf('loper') // 4
  'Developer'.indexOf('Developer') // 0
  'Developer'.indexOf('web') // -1
  'Developer'.indexOf('lope', 5) !== -1 // false
  'Developer'.indexOf('lope', 4) !== -1 // true
  ```

- `lastIndexOf(str)` gives the position of the last occurrence of the string `str` in the current string

  ```js
  'Road to become a great developer'.lastIndexOf('dev') // 23
  'Developer'.lastIndexOf('web') // -1
  ```

- `padEnd()` introduced in ES2017, to add characters at the end of a string, so it **reaches a specific length**
- `padStart()` to add characters at the beginning of a string

  ```js
  'test'.padEnd(8) // 'test    '
  'test'.padEnd(8, 'abcd') // 'testabcd'
  'test'.padStart(8) // '    test'
  'test'.padStart(8, 'abcd') // 'abcdtest'
  ```

- `repeat()` introduced in ES2015, to repeat the strings the number of times
  - returns an empty string if parameter is `0` or no parameter
  - returns RangeError if parameter is negative

  ```js
  'Ha'.repeat(3) // 'HaHaHa'
  ```

- `replace(str1, str2)` will find the _first_ occurrence of `str1` in the current string and replaces it with `str2`, then returns a new string
  - can pass a regular expression as the first argument
  - specifing global (`/g`) as a search string will replace all occurrence

  ```js
  'JavaScript'.replace(/Java/, 'Type') // 'TypeScript'
  'JavaScript JavaX'.replace(/Java/g, 'Type') // 'TypeScript TypeX'
  ```

  - second parameter can be a function, and this function will be invoked for _every_ match found, with a number of arguments:
    - the string that matches the pattern
    - an integer that specifies the position within the string where the match occurred
    - the string
  - the return value of the function will replace the matched part of the string
  - works for regular strings and regexes

  ```js
  'JavaScript'.replace(/Java/, (match, index, originalString) => {
    console.log(match, index, originalString)
    return 'Test'
  }) // TestScript
  ```

- `search(str)` returns the position (index) of the first occurrence of the string `str` in the current string
  - returns `-1` if no occurrence is found

  ```js
  'Software'.search('ware') // 4
  'Software'.search('Hardware') // -1
  ```

- `slice(begin, end)` returns a new string from the part of the string included between the begin and end positions
  - original string is not mutated and `end` is optional
  - if we set a negative first parameter, the start index starts from the end, second parameter must be negative as well, always counting from the end

  ```js
  'This is my car'.slice(5) // is my car
  'This is my car'.slice(5, 10) // is my

  'This is my car'.slice(-6) // my car
  'This is my car'.slice(-6, -4) // my
  ```

- `split(separator)` truncates a string when it finds a pattern, and returns an array with the tokens

  ```js
  const tokens = 'I love my dog! Dogs are great'.split('dog')
  tokens // ["I love my ", "! Dogs are great"]
  ```

- `startsWith(str)` check if a string starts with the value of the string `str`
  - provide a substring, and check if the result returns `true` or `false`
  - accepts a second parameter, which lets you specify at which character you want to start checking

  ```js
  'going on testing'.startsWith('test') // false
  'going on testing'.startsWith('test', 9) // true
  ```

- `substring()` returns a portion of a string, similar to `slice()` but:
  - if any parameter is negative, it is converted to `0`
  - if any parameter is higher than the string length, it is converted to the length of the string

  ```js
  'This is my car'.substring(5) // 'is my car'
  'This is my car'.substring(5, 10) // 'is my'
  'This is my car'.substring(-6, 2) // 'Th'
  'This is my car'.substring(-6, 200) // 'This is my car'
  ```

- `toLowerCase()` and `toUpperCase()` returns a new string with the text all in lower case or upper case
  - same as `toLocaleLowerCase()` and `toLocaleUpperCase()`, but does not consider locales at all

  ```js
  'Programmer'.toLowerCase() // 'programmer'
  'Programmer'.toUpperCase() //'PROGRAMMER'
  ```

- `toString()` returns the string representation of the current `String` object
  - same as `valueOf()`

  ```js
  const str = new String('Test')
  str.toString() // 'Test'
  ```

- `trim()` returns a new string with removed white space from the beginning and the end of the original string
- `trimEnd()` or `trimRight()` removed white space from the end of the original string
- `trimStart()` or `trimLeft()` removed white space from the start of the original string


## Booleans

- JS defines two reserved words for booleans: `true` and `false`
  - which are literal syntax
- boolean can also be created using `Boolean()` factory function: `Boolean(true)`
- comparison operations return either `true` or `false`
- `if`, `while` statements and other control structures use booleans to determine the flow of the program
- falsy values are **interpreted as false**
  - everything is considered a **truthy value**, except:

    ```js
    0
    -0
    NaN
    undefined
    null
    '' // empty string
    ```


## Null and Undefined

- `null` is a special value that indicates the absence of a value
  - known as `nil` or `None` in other languages
- `undefined` indicates that a variable has not been initialized and the value is absent
  - commonly returned by functions with no `return` value
  - parameter that's not set by the caller is `undefined`
