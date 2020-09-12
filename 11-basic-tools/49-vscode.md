# VSCode

## Table of Contents <!-- omit in toc -->

- [Editors](#editors)
- [VSCode Introduction](#vscode-introduction)
- [The toolbar](#the-toolbar)
- [The File Explorer](#the-file-explorer)
- [Search](#search)
- [Source Control](#source-control)
- [Extensions](#extensions)
- [The Terminal](#the-terminal)
- [The Command Palette](#the-command-palette)
- [Themes](#themes)
- [Customization](#customization)
- [Configuration](#configuration)
- [Workspaces](#workspaces)
- [Editing](#editing)
- [Code Snippets](#code-snippets)
- [Useful extensions](#useful-extensions)
- [The Command Line Tool](#the-command-line-tool)


## Editors

- editor is a tool that helps us write code, navigate and manage the codes and files in our project
- difference between an IDE and an editor is mostly in the feature set, and complexity
- most developers prefer editor over an IDE bacause it's faster


## VSCode Introduction

- VSCode is build by decades of editor experience from Microsoft
- open source which is completely free
- uses [Electron](https://electronjs.org/) as its base, which enables it to be cross platform
- built using Node.js, and we can extend it using JS
- it has a thousands of **extensions**, some official, and some made by the community
- Microsoft releases an update every month
  - frequent updates foster innovation and Microsoft is listening to its users, while keeping the platform as stable as possible
- [Visual Studio Code](https://code.visualstudio.com/) website


## The toolbar

5 essential features of VS Code:

- The File Explorer
- Search
- Source Control
- The Debugger
- The Extensions


## The File Explorer


- press the "Open Folder" button in the sidebar, or the `Open folder...` link in the Welcome page
- choose one folder where we have source code, or even just text files, and open it
  - VSCode will show that folder content in our view
- on the right, the empty view shows some commands to perform some quick operations, and their keyboard shortcut
- selecting a file on the left will open it on the main panel
  - when editing the file, dot will appear next to the file name in the tab, and in the sidebar
- `Ctrl`+`P` shows the quick file picker to easily move in files on large projects
- `Ctrl`+`B` hides the sidebar that hosts the file
- [keyboard shortcuts reference](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)


## Search

- clicking the icons makes the search case sensitive, to match whole words (not substrings), and to use a regular expression for the search string
- ▷ symbol is used for search and replace
- clicking the 3 dots shows a panel that lets us include some specific kind of files, and exclude other files


## Source Control

- Source Control tab is enabled by clicking the third icon in the toolbar
- VSCode comes with Git support out of the box
  - clicking the first icon on top, with the Git logo, allows us to initialize the Git repository
  - the `U` beside each file means that it's been updated since the last commit (since we never did a commit in the first place, all files are updated)
  - creating a commit by writing a text message and pressing `Ctrl`+`Enter`, or clicking the ✔︎ icon on top
- clicking the 3 dots icon, offers lots of options for interacting with Git


## Extensions

- **Note**: every extensions we install is going to impact the performance of our editor
- we can disable an extension we install, and enable only when we need it
- clicking the extension name opens the details on the right
- pressing the green Install button starts the installation process
  - then click "Reload" to restart the editor and activate it


## The Terminal

- activate it from `View ➤ Terminal` or using `Ctrl`+`` ` `` to open terminal with default shell
- we can open more than one terminal tab, and show them next to the other, stack them to the right rather than in the bottom of the window


## The Command Palette

- open it via `View ➤ Command Palette` or `Ctrl`+`Shift`+`P`
  - a modal window will appear at the top, offering us various options, depending on which plugins are installed, and which commands we used last
- common operations we can perform:
  - **Extensions: Install Extensions**
  - **Preferences: Color Theme** to change the color theme
  - **Format Document** to format code automatically
  - **Run Code** which is provided by Code Runner, and executes the highlighted lines of JS
- others are:
  - `Ctrl`+`Shift`+`Tab` shows the active files
  - `Ctrl`+`G` opens the command palette to let us enter a line number to go to
  - `Ctrl`+`Shift`+`O` shows the list of symbols found in the current file


## Themes

- `Ctrl`+`K` `Ctrl`+`T` or by invoking the _Preferences: Color Theme_ command lets us switch color theme
- Themes are just extensions, we can install new themes by going to the extensions manager


## Customization

- go to `Preferences ➤ File Icon Theme` to change the sidebar icons
- all customizations we made are saved to the user preferences
  - see `Preferences ➤ Settings` or `Ctrl`+`,`
  - default settings shows on the left, for an easy reference, and the overridden settings on the right
- theme and icon theme are in `workbench.colorTheme` and `workbench.iconTheme`
- we can decide to apply some setting globally, in **User Settings**, or relative to a workspace, in **Workspace settings**
  - most of the times those settings are automatically added by extensions or by the VS Code itself, but in some cases we'll directly edit them in this place


## Configuration

We can open the configuration JSON file using the command palette, and select **Open Settings (JSON)**

|                 Option                 | Description                                                                         |
| :------------------------------------: | :---------------------------------------------------------------------------------- |
|   `"editor.minimap.enabled": false`    | Remove the minimap, which is shown at the right of the editor                       |
|   `"explorer.confirmDelete": false`    | Stop asking for confirmation when we want to remove a file                          |
| `"explorer.confirmDragAndDrop": false` | Disable the confirmation for drag and drop                                          |
|     `"editor.formatOnSave": true`      | Format the code automatically when we save it                                       |
|     `"editor.formatOnPaste": true`     | Format the code automatically when we paste it in our code                          |
|   `"javascript.format.enable": true`   | Enable formatting for JavaScript code                                               |
| `"files.trimTrailingWhitespace": true` | Trim whitespace in files                                                            |
| `"editor.multiCursorModifier": "alt"`  | When clicking the Alt key and clicking with the mouse, we can select multiple lines |
|   `"editor.detectIndentation": true`   | Adapt to the file indentation, useful when editing other people code                |
|  `"editor.quickSuggestionsDelay": 0`   | Show the code suggestion immediately, not after some seconds                        |


## Workspaces

- all User settings can be overridden in Workspace settings
- useful when we use a project that has linting rules different from all the other projects we use, and we don't want to edit our favorite settings just for it
- click `File ➤ Save Workspace As...` menu to create a workspace from an existing project 
  - currently opened folder will be enabled as the workspace main folder
- having workspace-level settings, we can disable extensions for a specific workspace
- we can just work with folders until we have a specific reason for wanting a workspace
- one good reason is the ability to have multiple, separate root folders
  - click `File ➤ Add Folder to Workspace` to add a new root folder, which can be located anywhere in the filesystem, but will be shown along with the other existing folder we had


## Editing

- **IntelliSense** a technology that hints at autocompletion of functions and parameters, as we type them
- **Code Formatting** has `Format Document` and `Format Selection` commands which are available on the Commands Palette to autoformat the code
  - VSCode by defaults supports automatic formatting for HTML, JavaScript, TypeScript and JSON
- **Errors and warnings** are shown in colors indicates some issues, warning or errors which are underlined in red, go to `View ➤ Problems` or `Ctrl`+`Shift`+`M`
- **Keyboard shortcuts** are a nice productivity aid
  - print the official shortcuts cheat sheet: [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf), [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf) and [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- **Keymaps** are available as plugins which are keyboard shortcuts from other editors, open `Preferences ➤ Keymaps Extensions` menu


## Code Snippets

- every language has extensions that provide ready-made snippets (codes) for us to use
- for JavaScript/React, one popular is [VS Code ES7 React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  - type `rfce` and press `TAB`, then snippets will appear
- click `Preferences ➤ User Snippets` and follow the instructions to create our own snippets file


## Useful extensions

- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)** visualizes who made the last change to a line of our code, and when this happened
- **[Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)** visualizes and search the Git history
- **[CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)** lets us see and edit CSS definitions by inspecting the class of an HTML element
- **[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)** lets us run bits of code that we select in the editor, and much more
  - supports lots of languages.
- **[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)** allows us to debug a JavaScript code running in the browser using the VSCode debugger
- **[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)** is very handy for visualizing brackets endings in our code.
- **[Indent-Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)** colors the indentation levels of our code
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**
- **[IntelliSense for CSS](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)** improves autocompletion for CSS based on our workspace definitions
- **[npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)** enables npm utility functions from the command palette
- **[Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)** will automatically close HTML/JSX/* tags
- **[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)** will automatically renames the closing tag when we change the opening one, and the opposite as well


## The Command Line Tool

- open the command palette and search for the `install 'code' command in PATH` command
  - press enter and the `code` command will be available globally in our command line
- `code .` opens the editor on the current folder
- `code -n` creates a new window
- `code --diff file1.js file2.js` shows the diff between two files

