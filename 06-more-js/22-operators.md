# Advanced Operators

## Table of Contents <!-- omit in toc -->

- [Ternary Operator](#ternary-operator)
- [Spread Operator](#spread-operator)
- [`==` vs `===`](#-vs-)
- [`in` Operator](#in-operator)
- [`typeof` Operator](#typeof-operator)
- [Logical Operators](#logical-operators)
- [`instanceof` Operator](#instanceof-operator)
- [`new` operator](#new-operator)
- [Other Assignment Operators](#other-assignment-operators)
- [Precedence Rules](#precedence-rules)


## Ternary Operator

- **ternary operator** is the only operator in JS that works with 3 operands
  - short way to express conditionals
  - syntax: `<condition> ? <expression> : <expression>`
- `<condition>` is evaluated as a boolean, the operator runs the first expression (if condition is true) or the second

  ```js
  const running = true;
  (running === true) ? stop() : run();
  ```


## Spread Operator

```js
const list = [1, 2, 3];
```

- we can expand an array, object or string using the spread operator
  - creating a new array

  ```js
  const list2 = [...list, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
  ```

- create a copy of an array

  ```js
  const copyOfList = [...list];
  ```

- clone an object

  ```js
  const newObj = { ...oldObj };
  ```

- creates an array with each char in the string

  ```js
  const word = 'hey';
  const chars = [...hey]; // ['h', 'e', 'y']
  ```

- use an array as function argument

  ```js
  const func = (param1, param2) => {};
  const arr = [1, 2];
  func(...arr);
  ```

- **rest element** is useful when working with **array destructuring**

  ```js
  const nums = [1, 2, 3, 4, 5];
  const [first, second, ...others] = nums;
  ```

- and **spread elements**

  ```js
  const nums = [1, 2, 3, 4, 5];
  const sum = (a, b, c, d, e) => a + b + c + d + e;
  const result = sum(...nums);
  ```

- **rest properties** were introduced in ES2018, which are the same but for objects

  ```js
  const { first, second, ...others } = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
  };

  first; // 1
  second; // 2
  others; // { third: 3, fourth: 4, fifth: 5 }
  ```

- **spread properties** allow to create a new object by combining the properties of the object passed after the spread operator

  ```js
  const items = { first, second, ...others };
  items; //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
  ```

- perfect way to merge two simple objects into one

  ```js
  const obj1 = {
    name: 'John'
  };

  const obj2 = {
    age: 43
  };

  const obj3 = {...obj1, ...obj2 }; // { name: 'John', age: 43 }
  ```


## `==` vs `===`

- `===` checks for equality of two values and types
- value types (Boolean, null, undefined, String and Number) and reference types (Array, Object, Function)
- if two values are not of the same type, `===` will return false
- `==` will attempt to convert types to match

  ```js
  false == '0';  // true
  false === '0'; // false
  null == undefined; // true
  null === undefined; // false
  ```

- `!=` and `!==` perform the same thing but negated
- **Note**: Always default to `===` and `!==` for less drawbacks and edge cases


## `in` Operator

- `in` operator returns `true` if the specified property is in the specified object or its prototype chain, otherwise `false`

  ```js
  class Car {
    constructor() {
      this.wheels = 4;
    }
  }

  class Testarossa extends Car {
    constructor() {
      super();
      this.brand = 'Ferrari';
    }
  }

  const myCar = new Testarossa();
  'brand' in myCar; // true
  'wheels' in myCar; // true
  ```


## `typeof` Operator

- `typeof` operator returns a string representation of the data type
  - JS has no 'function' type, it's one of its quirk to make our job easier

  ```js
  typeof 1; // 'number'
  typeof '1'; // 'string'
  typeof { name: 'John' }; // 'object'
  typeof [1, 2, 3]; // 'object'
  typeof true; // 'boolean'
  typeof undefined; // 'undefined'
  typeof (() => {}); // 'function'
  typeof Symbol(); // 'symbol'
  ```


## Logical Operators

- logical **and** (`&&`) returns true if both operands are true: `<expression> && <expression>`

  ```js
  a === true && b > 3;

  const car = { color: 'green' };
  const color = car && car.color; // 'green'
  ```

- logical **or** (`||`) returns true if at least one of the operands is true: `<expression> || <expression>`
  - useful to fallback to a default value

  ```js
  // a === true || b > 3;

  const car = {};
  const color = car.color || 'green'; // default to green if car.color is not defined
  ```

- logical **not** (`!`) inverts the value of a boolean

  ```js
  !true; // false
  ```


## `instanceof` Operator

- `instanceof` operator returns a boolean value that indicates if an object is an instance of a particular class
- e.g., `myCar` object of class Testarossa responds true to `instanceof Testarossa` and `instanceOf Car`, because Testarossa extends Car

  ```js
  class Car {}
  class Testarossa extends Car {}

  const myCar = new Testarossa();
  myCar instanceof Testarossa; // true
  myCar instanceof Car; // true
  ```


## `new` operator

- `new` operator followed by the object class let's us create a new object of that type
  - if object constructor accepts parameters, we pass them

  ```js
  const date = new Date('2020-07-19');
  ```

- given an Object constructor, we initialize a new "Car" object

  ```js
  function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  const myCar = new Car('Ferrari', 'Testarossa');
  myCar.brand; // 'Ferrari'
  myCar.model; // 'Testarossa'
  ```


## Other Assignment Operators

- assignment operator (`=`) is used to assign a value to a variable, e.g., `let num = 14;`
- arithmetic operators let you assign to the first operand the result of the operations with the second operand
  - addition assignment operator (`+=`)
  - subtraction assignment operator (`-=`)
  - multiplication assignment operator (`*=`)
  - division assignment operator (`/=`)
  - remainder assignment operator (`%=`)
  - exponentiation assignment operator (`**=`)

  ```js
  let num = 0;
  num += 5; // num === 5
  num -= 2; // num === 3
  num *= 2; // num === 6
  num /= 2; // num === 3
  num %= 2; // num === 1
  ```


## Precedence Rules

- from higher to lower precedence:
  - unary, increment and decrement operators (`-`, `+`, `++`, `--`)
  - multiplication, division, remainder operator (`*`, `/`, `%`)
  - addition and subtraction operator (`+`, `-`)
  - assignment operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`)
  - operations on the same level are executed in the order they are found
