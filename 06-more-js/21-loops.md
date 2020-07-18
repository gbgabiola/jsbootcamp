# Loops

- [Loops Introduction](#loops-introduction)
- [While loops](#while-loops)
- [For loops](#for-loops)
- [For...of loops](#forof-loops)
- [Loop methods](#loop-methods)


## Loops Introduction

- loops are one of the main control structures of JS
  - automate and repeat a block of code a number of times
- JS provides many way to iterate through loops


## While loops

- we add a condition after the `while` keyword, and we provide a block that is run until the condition is `false`
- `break` keyword is used to interrupt a `while` loop
- `continue` keyword terminates the current iteration, and continues with the next iteration in the loop

  ```js
  const list = ['a', 'b', 'c'];
  let i = 0;
  while (i < list.length) {
    console.log(list[i]); // value
    console.log(i); // index
    i = i + 1;
  }
  ```

- `do...while` loops evaluate condition _after_ the code block is executed
  - means the block is always executed _at least once_

  ```js
  const list = ['a', 'b', 'c'];
  let i = 0;
  do {
    console.log(list[i]); // value
    console.log(i); // index
    i = i + 1;
  } while (i < list.length);
  ```


## For loops

- using `for` keyword and passing a set of 3 instructions: the initialization, the condition, and the increment part
  - `break` and `continue` still works to interrupt a `for` loop or fast forward to the next iteration of a `for` loop

  ```js
  const list = ['a', 'b', 'c'];

  for (let i = 0; i < list.length; i++) {
    console.log(list[i]); // value
    console.log(i); // index
  }
  ```


## For...of loops

- `for...of` loop automatically goes through an array, instead of initializing a loop variable and defining an increment
  - we can declare a `const` because in every iteration the scope is re-initialized

  ```js
  const list = ['a', 'b', 'c'];

  for (const value of list) {
    console.log(value); // value
  }
  ```


## Loop methods

- `foreach()` method executes the provided function once for each element in an array

  ```js
  const list = [1, 2, 3];
  list.forEach(item => {
    console.log(item);
  });
  ```

- `every()` method returns true if **all** elements in an array results to **true**

  ```js
  const list = [1, 2, 3];
  list.every(item => {
    if (item === 2) return true;
    return false;
  }); // false
  ```

- `some()` method returns true if **some** elements in an array results to **true**

  ```js
  const list = [1, 2, 3];
  list.some(item => {
    if (item === 2) return true;
    return false;
  }); // true
  ```
