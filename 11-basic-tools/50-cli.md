# The Command Line

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [The Bash Shell](#the-bash-shell)
- [Common Shell Commands](#common-shell-commands)
- [The Command History](#the-command-history)
- [File Permissions](#file-permissions)
- [Wildcards](#wildcards)
- [Aliases](#aliases)
- [Grouping commands](#grouping-commands)
- [Output redirection](#output-redirection)
- [Pipes](#pipes)
- [Queuing commands](#queuing-commands)
- [Running a command in the background](#running-a-command-in-the-background)


## Introduction

- **shell** is a command interpreter that exposes an interface to the underlying operating system
  - allows us to execute operations using text and commands
  - provides users advanced features like creating scripts
- **Note**: shells let us perform things in a more optimized way than a Graphical User Interface (GUI)
  - command line tools can offer many different configuration options without being too complex to use
- Unix shells are commonly found on Linux and macOS computers
- some shells are: Bash, Csh, Zsh, Fish and many more
- different operating systems offer access to the terminal and have a different default shell
- Bash is the common shell on most Linux distros, meaning it's the most used on servers
- Zsh is the default shell in macOS Catalina and later (previously Bash)
- most shells are compatible with Bash, means that we can use one or another in a most transparent way
  - only the advanced tasks might differ, e.g., writing shell scripts, special and powerful programs that we can use to perform a set of tasks automatically for us


## The Bash Shell

- Bash is the de facto shell on most systems, including Linux, and the WSL on Windows 10
  - called _Bourne-again shell_ because its creator was Steve Bourne
  - available under the `/bin/sh` command
  - released on 1989
    - at that time, most software in the UNIX world was closed source
    - Unix itself was proprietary and closed source
- shell is required to use a UNIX system
- Richard Stallman in those years with the GNU Project (and later on Linux) was about to revolutionize everything, starting the Open Source revolution
  - The GNU Project needed a shell, and with the help of the Free Software Foundation, Bash was born
  - inspired by the Bourne Shell, and it is one key ingredient of the GNU Project, and probably one of its most successful pieces of software that we still use today
- Bash could run all scripts written for `sh`, which was a mandatory feature for its adoption
- **first steps in Bash**
  - log in to the system, if it's a server and open terminal
  - we should see a prompt which usually ends with `$`
  - `help` shows its version and a list of commands we can use
- **navigating the filesystem**
  - `ls` lists the files in the current folder
  - `cd` is used to change directory
  - `cd ..` goes back to the parent folder
  - `pwd` means print working directory to show the current folder
- **command line editing**
  - `ctrl`+`d` to delete the currently selected character
  - `ctrl`+`f` to go to the character on the right
  - `ctrl`+`b` to go to the character on the left
- **autocompletion**
  - typing `cd Doc` and press `tab` key to make Bash autocomplete that to `cd Documents`
  - shell can autocomplete file names, but also command names
- **shell commands**
  - `/bin/ls` can be just type `ls` because of the concept of _path_
  - commands accept arguments, e.g., `ls /bin` will list all files in the `/bin` folder
  - parameters are prefixed by a dash (`-`), e.g., `ls -a` tells `ls` to also show hidden files
  - hidden files (and folders) as a convention starts with a dot (`.`)


## Common Shell Commands

- `man` shows all commands and what it does, e.g., `man ls`
- filesystem commands:
  - `ls` lists files
  - `cd` change the directory
  - `rm` removes a file or folder
  - `mv` moves a file to another folder, or change a file name
  - `cp` copies a file
  - `pwd` prints the current working directory
  - `mkdir` creates a folder
- `chmod` allows us to change _modes_ for filesystem permission
- `chown` allows us to change the file _owner_
- `cat`, `tail` and `grep` are super useful commands to work with files
- `pico`, `nano`, `vim` and `emacs` are commonly installed editors
- `whereis` shows where a command is located on the system


## The Command History

- pressing the `up` and `down` arrow key lets us navigate back and forth to see what commands we entered previously
- typing a command, Bash can autocomplete it by referencing a previously entered command in the history, try it by pressing `esc` followed by `tab`


## File Permissions

- we can see some weird strings like `drwxr-xr-x`, which defines the permission of a file/folder
- first letter indicates the type of file
  - `-` means it's a normal file
  - `d` means it's a directory
  - `l` means it's a link
- then 3 sets of values:
  - first set represents the permissions of the **owner** of the file
  - second set represents the permissions of the members of the **group** the file is associated to
  - third set represents the permissions of **everyone else**
- those sets are composed by 3 values:
  - `rwx` means that specific _persona_ has read, write and execution access
  - anything that is removed is swapped with a `-`
- `chmod` command is used to change the permission of a given file, which can be used in 2 ways:
  1. using symbolic arguments
     - `chmod` followed by a space, and a letter:
       - `a` for _all_
       - `u` for _user_
       - `g` for _group_
       - `o` for _others_
     - then we type either `+` or `-` to add a permission, or to remove it, then we enter one or more permissions symbols (`r`, `w`, `x`)
     - all followed by a file or folder name
     - we can apply the same permissions to multiple personas by adding multiple letters before the `+`/`-`
     - we can apply the permissions to every file contained in the folder using the `-r` (recursive) flag

      ```sh
      $ chmod a+r filename # everyone can now read
      $ chmod a+rw filename # everyone can now read and write
      $ chmod o-rwx filename # others cannot read, write or execute the file
      $ chmod og-r filename # other and group can't read the file
      ```

  2. using numeric arguments
     - digit represents the permissions of the persona which value can be a maximum of 7
       - `1` if has execution permission
       - `2` if has write permission
       - `4` if has read permission
     - these gives us 4 combinations:
       - `0` no permissions
       - `1` can execute
       - `2` can write
       - `3` can write, execute
       - `4` can read
       - `5` can read, execute
       - `6` can read, write
       - `7` can read, write and execute
     - we use them in pairs of 3, to set the permissions of all the 3 groups altogether:

      ```sh
      $ chmod 777 filename
      $ chmod 755 filename
      $ chmod 644 filename
      ```
- **owner and group**
  - chown command changes the owner of a file, e.g., `$ chown <username> <filename>`
  - `chgrp` command change the group of a file, e.g., `$ chgrp <group> <filename>`


## Wildcards

- `ls` and many other commands can make great use of wildcards

  ```sh
  $ ls image* # list all files starting with image
  $ ls *image # list all files ending with image
  $ ls *image* # list all files that contain image inside the name
  ```


## Aliases

- aliases can be used to set up shortcuts for common commands
- normally defines in `~/.bashrc` file

  ```sh
  $ alias <alias>=<command>
  $ alias <alias>="<command>" # use quotes, if there's a space in the command
  $ alias ll="ls --al" # 

  $ alias lsthis="ls $PWD"
  $ alias lscurrent='ls $PWD'
  ```

  - `$PWD` refers to the current folder the shell is into
- **Note**:
  - using double quotes the variable is resolved at definition time
  - using single quotes it's resolved at invocation time


## Grouping commands

```sh
$ echo hello && echo test
hello
test
$ echo hello || echo test
hello
$ ! echo hello || echo test
hello
test
```

- `&&` (and) to combine two commands
  - if the first command executes without problems, run the second, and so on
- `||` to combine two commands
  - if the first command executes without problems the second does not run
- `!` negates the next logical operation
- parentheses can be used to combine expressions to avoid confusion, and also to change the precedence

  ```sh
  $ ! (echo hello) || (echo test)
  hello
  test
  $ ! (echo hello || echo test)
  hello
  ```


## Output redirection

- by default, commands started in the shell print out both the output and errors back to the shell
- a program can receive input from any file using the `<` operator, and save to a file the output using the `>` operator:

  ```sh
  $ echo hello > result.txt
  $ wc < result.txt
  ```

- `wc` is a command that counts the words it receives as input
- in the terminal, screen is considered to be a file:
  - `0` identifies the standard input
  - `1` identifies the standard output
  - `2` identifies the standard error
- we can redirect the standard output to a file by appending `1>` after a command, followed by a file name
- using the same technique we can use `2>` to redirect the standard error
- `>` is shortcut for `1>`, since it is used a lot
- `&>` redirects /both/ standard output and standard error to a file

  ```sh
  $ ls 1> list.txt 2> error.txt
  $ ls > list.txt 2> error.txt

  $ ls &> output.txt
  ```

- another frequent thing is to redirect standard error to standard output using `2>&1`


## Pipes

- using pipes, any command output can be used as input for a second command
  - `|` operator combine the two, e.g., `wc` gets its input from the output of `echo hello`:

  ```sh
  $ echo hello | wc
  ```


## Queuing commands

- we can instruct Bash to run a command right after another ends by separating them with a semicolon (`;`):

  ```sh
  $ cd /bin; ls
  ```


## Running a command in the background

- we can tell Bash to run a program in the background without it taking control of the shell, by appending `&` after it: `$ top &`
- `top` is a command that lists the processes running, ordered by most resource consuming
- application that would normally get control of the shell, is now started but nothing seems to happen
  - we can bring it back into focus by typing `fg` (foreground)
- when a command is running we can use `ctrl-Z` to pause it and bring it to the background
  - the shell comes back again in the foreground, and we can now run `bg` to move resume execution of that previously paused job
- when we are ready to go back to it, run fg to bring back that program in the foreground
- ps shows all the processes `pid` numbers
  - using the paused process `pid`, we can bring to foreground a specific command, e.g., `$ fg 72292`, same works for `bg`
