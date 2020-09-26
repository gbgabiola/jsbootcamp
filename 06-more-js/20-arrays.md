# Arrays

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Add an item to an array](#add-an-item-to-an-array)
- [Add multiple items to an array](#add-multiple-items-to-an-array)
- [Remove an item from an array](#remove-an-item-from-an-array)
- [Find an item in the array](#find-an-item-in-the-array)


## Introduction

- array is a collection of elements
  - in JS are **objects**, they also have properties and methods
  - accepts any values of different types, e.g., strings, numbers and even another array
- **array literal syntax** can be used to initialize an empty array
  - we can create a multi-dimensional arrays
  - access any elements of the array by referencing its index, which starts from zero
- `length` property is used to get the number of elements in the array

  ```js
  const items = [['Apple', 'Banana', 'Orange'], 2, 'John', true, { color: 'black' }];

  items[0]; // ['Apple', 'Banana', 'Orange']
  items[2]; // 'John'
  items[0][0]; // 'Apple'

  items.length; // 4
  ```


## Add an item to an array

- `push()` method adds an element at the end of an array
- `unshift()` method adds an element at the beginning of an array

  ```js
  items.push(false);
  items.unshift(0, 1);
  ```


## Add multiple items to an array

```js
const fruits = ['banana', 'pear', 'apple'];
```

- `push()` with multiple arguments

  ```js
  fruits.push('mango', 'melon', 'avocado');
  ```

- **Note**: `concat()` method **does not mutate** the original array, but returns a new array
  - can also pass an array

  ```js
  const allfruits = fruits.concat('mango', 'melon', 'avocado'); // or ['mango', 'melon', 'avocado']
  ```


## Remove an item from an array

- `pop()` method removes an item from the end of an array
- `shift()` method removes an item from the beginning of an array

  ```js
  items.pop();
  items.shift();
  ```


## Find an item in the array

- `includes()` method to search an item in the array
  - returns true if the array contains an item with the same value

  ```js
  const nums = [1, 2, 3];

  nums.includes(2); // true
  nums.includes(4); // false
  ```

- `find()` method returns the first item that returns true
  - returns `undefined` if no element is found
  - mostly useful when the array contains objects and wants to check the value of a property

  ```js
  const cars = [
    {
      color: 'blue'
    },
    {
      color: 'yellow'
    }
  ];

  cars.find((element, index, array) => {
    if (element.color === 'blue') {
      return true;
    }
  });

  // {color: "blue"}
  ```

- `findIndex()` method returns the index of the first item that returns true
  - returns `-1` if no element found

  ```js
  items.findIndex((element, index, array) => {
    //return true or false
  });
  ```
