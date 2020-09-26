# The Main Concepts of Programming Languages

## Table of Contents <!-- omit in toc -->

- [Input and Output](#input-and-output)
- [Variables](#variables)
- [Loops](#loops)
- [Conditionals](#conditionals)
- [Functions](#functions)
- [Modularizing the code into packages](#modularizing-the-code-into-packages)
- [Types](#types)
- [Recursion](#recursion)
- [Objects](#objects)
- [Data Structures](#data-structures)
- [Algorithms](#algorithms)
- [GUI vs CLI](#gui-vs-cli)


## Input and Output

- a computer's job is to wait for an input, do something (what we tell them) and return an output
- Input, e.g., mouse click, command line, click a button, press a key
- Output, e.g., something moves on the screen, words, pictures,  things happen


## Variables

- a way to store values into your programs, and to refer to them using **meaningful names**, e.g., `childAge = 5`


## Loops

- programmers are lazy people, instead of repeating a task multiple times, they rather spend some time to create a procedure that can be repeated, and run that multiple times
- doing this inside the programs is called **loop**
- with loops you can decide to break the loop using **break** statement


## Conditionals

- conditionals is one of the most essential part of programming
- some code will only run if a condition is satisfied, otherwise code will not even run
- conditionals are usually wrap in a block which some is identified by parentheses (`()`)
- most common conditional is `if` statement
- another conditional statement in JavaScript is `switch` and ternary operator (`?:`)


## Functions

- function is a way to organize your code to keep things manageable and reusable
- a function is a block of code with a name, which can be invoked and run when needed


## Modularizing the code into packages

- functions are great to organize code within one file, or a few files
- packages are essentially similar to functions, except instead of abstracting away a piece of functionality to reuse in your program, you can remove them from your program altogether, and place them outside of it.
- multiple programs can now reuse a tiny/bigger functionality and you only have to maintain it in one place
- **npm** is a collection/repository of JavaScript packages


## Types

- a variable is a label associated to a value, and this value has a **type** attached
- 2 kinds of programming languages: loosely typed and strongly typed
- typically, compiled languages are more strict
- JavaScript have built-in types to work with: Object, Array, String, Number, Date, and more
- JavaScript, Python, Ruby and other interpreted languages like to have loose types
- the type of a value identifies what you can do with it, it provides properties and methods you can call on it
- meaning not all variables are equal


## Recursion

- function can extract some portion of code, give it a name, and call it later
- functions can call themselves
- factorial calculation:

```js
function calculateFactorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}
```


## Objects

- in object oriented programming, a programming methodology you define a set of classes, or types of objects
- an object is an instance of a class, and it contains both code and data
- data is abstracted away in to the object, and the object is responsible for providing methods to manipulate this data
- private properties allow to encapsulate data, and only let it be accessed using methods that you define

```js
// creating myDog object by instantiating a new Dog
const myDog = new Dog()

// set name and age
myDog.name = 'Tracy'
myDog.age = 7

// retrieve data by referencing the property
myDog.name // Tracy
```


## Data Structures

- managing data is a complex problem, especially organizing data in a way that's efficient to store and retrieve
- very important to build efficient systems
- in low level programming language like C, you need to learn data structures before you can write good code
- classic data structures:
  - set
  - stack
  - queue
  - struct
  - union
  - object
  - array
  - linked list
  - binary tree
  - graph
  - hash table
  - priority queue
  - heap


## Algorithms

- algorithm terms:
  - bubble sort
  - quick sort
  - insertion sort
  - binary search
  - search by hashing
  - serial search
- **Big-O** is how to calculate the complexity of the algorithm
- some algorithms scale very poorly with the growing amount of inputs, and some scales very well
- classify algorithms ranging from most efficient to least efficient:
  - Constant - O(1)
  - Logarithmic - O(log n)
  - Linear - O(n)
  - Linearithmic - O(n log n)
  - Quadratic - O(n²)
  - Exponential - O(2^n)
  - Factorial - O(n!)
- applying to time metric:
  - a constant efficiency means that if you have 1 input, or 10000 inputs, the time required to complete the algorithm is the same
  - a linear efficiency means that the time required scales linearly with the number of inputs. 1 input equals to one second? Then 600 inputs equals to 10 minutes


## GUI vs CLI

- 2 ways to navigate your programs/platforms
  - Graphical User Interface (GUI)
  - Command Line Interface (CLI)
- GUI applications have an interface you interact with using the mouse
  - many GUI applications run at the same time
  - best suited to provide rich interactions for mouse based inputs, e.g., Microsoft Office, Google Earth, Chrome browser
- CLI application is accessed from a _terminal_, a text based interface which only allows you to interact with one application at a time
  - best suited for one-time tasks, or even long running tasks, provided you can run multiple terminal windows, e.g.,create-react-app, Vim, C compiler, etc
