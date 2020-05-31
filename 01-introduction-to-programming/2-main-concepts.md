# The Main Concepts of Programming Languages

- [Input and Output](#input-and-output)
- [Variables](#variables)
- [Loops](#loops)
- [Conditionals](#conditionals)
- [Functions](#functions)
- [Modularizing the code into packages](#modularizing-the-code-into-packages)
- [Types](#types)


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
