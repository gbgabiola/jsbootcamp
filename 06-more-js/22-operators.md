# Advanced Operators

- [Ternary Operator](#ternary-operator)
- [Spread Operator](#spread-operator)
- [`==` vs `===`](#-vs-)


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
