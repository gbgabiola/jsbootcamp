# Introduction to Programming

## Table of Contents <!-- omit in toc -->

- [Why should you become a programmer](#why-should-you-become-a-programmer)
- [What you need to become a programmer](#what-you-need-to-become-a-programmer)
- [How does a computer work](#how-does-a-computer-work)
- [What is a program](#what-is-a-program)
- [What is programming](#what-is-programming)
- [What is a programming language](#what-is-a-programming-language)
- [Computer Science vs Programming](#computer-science-vs-programming)
- [Different programming paradigms](#different-programming-paradigms)
- [Compiled vs Interpreted](#compiled-vs-interpreted)
- [What is a bug?](#what-is-a-bug)
- [Debugging](#debugging)


## Why should you become a programmer

- build the app you always dreamed about
- learn the craft as a hobby
- start a new career in tech
- etc


## What you need to become a programmer

- **patience** and do one step after another, until you can connect the dots
- **dedication** because it's not certainly an easy skill to master
- **time** because learning things properly requires time
- **consistency** learning to code to become a great programmer in a short amount of time
- computer


## How does a computer work

- computers are electronic devices powered by programs
- **hardware** is the electronic part of a computer, and the programs part **software**
- when you program a computer, you provide it instructions that are transformed into bits, the only thing that the electronics can understand
  - a bit can only have two values: 0 and 1


## What is a program

- a program is a set of instructions, which the programmer assembles to make the machine perform a specific action
- typically the program is **compiled** by the programmer before it can be executed and sometimes programs are **interpreted** by another program


## What is programming

- structuring instructions of code, written using a programming language, in order to create a working program
- **solving problems**
- thinking about the problem or app
- gathering requirements, talking to people involved in the app, talking to the clients, analyzing all the different things that the app should do
- defining what the app should **not** do
- determining if app is impossible or too costly to run, even before you start working on it
- rawing all the flow diagrams to help you solve a problem
- 70% of programming is done outside coding


## What is a programming language

- a programming language is a set of instructions and rules that we use to interface with a machine
- JS is the main language of the Web and the only language that browsers can execute inside Web pages
- Python and Ruby are mainly used on Web servers, or as more general purpose languages
- Python is well known in the data science community
- Swift is the language used to create iPhone apps and in general all programs that run on Apple hardware


## Computer Science vs Programming

- a CS course teach you lots of theory, algorithms analysis and very little _actual programming_ that's required in the industry
- CS can also be seen more as a branch of mathematics, which is quite complicated
- Programming is using the computer to make it do things that are very practical


## Different programming paradigms

- **Procedural programming** code is executed in a linear way from the beginning to the end. You tell the computer what to do, from start to finish, and it does, e.g., C language
- **Object oriented programming**, we try to model the domain of the problem at hand using objects
- **Functional programming** is a simplest way to tackle a complex problem and get to a solution, e.g., JS
  - we organize code in little functions, and every function returns a result that is always the same, given the same inputs
  - same inputs = same outputs
  - functions can be composed, passed as arguments, and function operations like recursion allow us to solve all the problems without creating complex structures for our abstractions
- **Imperative programming** we tell the computer what to do (exact actions)
  - best suited for lower level languages, e.g., C and Go
- **Declarative programming** means we describe what we want, and we don't care how the computer does it, e.g., HTML and JSX
- **Note**: The more far away we are from the actual details of the machine, the less performant our code is. But also, the easier it is to write it


## Compiled vs Interpreted

- we write code into a text file, and this file is processed by the computer in 2 ways, depending on the programming language used
- **Compiled programming language** is analyzed by a program called _compiler_, and it must be **compiled** before it can be executed
  - compiled program is is transformed into an executable file, which is no more text-based like .exe file on Windows, e.g., C, Go, Swift
  - able to intercept and point out errors, bugs or possible issues before execution
- **Interpreted programming language** has _interpreter_ program that has the ability to execute program which skip the compilation phase, and proceed directly to execution, e.g., JS, Python, Ruby or PHP
  - an error might only be discovered when a particular situation happens (this will also happen with compiled languages, but with a lower chance)
  - feel more lightweight to write


## What is a bug?

- a bug is a problem that you did not see or anticipate when you set out to write the code
- a bug can be discovered when you test the program, and it might even happen when things, working perfectly previously, starts to break because you changed one line, and those are called _regression bugs_


## Debugging

- trying to avoid bugs as much as possible, by carefully **thinking** about how your program should work, even before you write a single line of code
- analyze every single line of code you wrote for possible issues or side effects or unconsidered things
- how to solve the bug?
  - identify the bug
  - figure out why this bug happens
- solving the bug
  - figure out the values of the state (the content of the variables), and the flow of the program
  - printing to the logs, or to the output of the program
- debugger is a tool that can be either be provided by your programming language compiler, or by the tooling that’s built around it, e.g., VSCode, Chrome/Firefox browser
