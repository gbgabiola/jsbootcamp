# Using the Chrome Debugger

- [The Chrome Developer Tools Debugger](#the-chrome-developer-tools-debugger)
- [Breakpoints](#breakpoints)
- [Watch variables and expressions](#watch-variables-and-expressions)
- [Inspect the call stack](#inspect-the-call-stack)
- [Blackboxing scripts](#blackboxing-scripts)


## The Chrome Developer Tools Debugger

- debugger is the most powerful tool in the browser developer tools, found in the _Sources_ panel
- top part of the screen shows the files navigator
- we can select any file and inspect it on the right
- bottom part is the actual debugger


## Breakpoints

- when the browser loads a page, the JS code is executed until a breakpoint is met
- at this point the execution is halted and we can inspect all about our running program
- we can check the variables values, and resume the execution of the program one line at a time
- breakpoint is a `breakpoint` instruction put in our code, when the browser meets it, it stops
- another option is to open the file in the Sources panel and click the number on the line we want to add a breakpoint
  - clicking again the breakpoint will remove it
- we can see all our breakpoints in _Breakpoints_ panel, and disable them temporarily
- after we add a breakpoint we can reload the page and the code will stop at that execution point when it finds the breakpoint
- other types of breakpoints:
  - **XHR**/**fetch breakpoints**: triggered when any network request is sent
  - **DOM breakpoints**: triggered when a DOM element changes
  - **Event listener breakpoints**: triggered when some event happens, e.g., mouse click


## Watch variables and expressions

- Watch panel is in the right of the Scope panel
- has a `+` button which we can use to add any expression


### Resume the execution

- scripts are all halted since the breakpoint stopped the execution
- set of buttons above the "Paused on breakpoint" banner let us alter this state
- main ways to control the flow during debugging
  - **resume** the normal script execution
  - **step over** and resumes execution until the next line, and stops again
  - **step into** operation goes into the function being executed, letting us go into the details of it
  - **step out** (opposite) goes back to the outer function calling this one


## Inspect the call stack

- **call stack**  shows us how many functions levels we are deep into the JS code
  - lets us move up in the stack too by clicking each function name


## Blackboxing scripts

- often times we work with libraries where we don't want to "step into", we trust them and we don't want to see their code in the call stack
  - right-click it in the call stack and press **Blackbox script**
