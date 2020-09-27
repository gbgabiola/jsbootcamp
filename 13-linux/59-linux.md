# Linux

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Using Linux](#using-linux)
- [Editors](#editors)
- [Linux Filesystem](#linux-filesystem)


## Introduction

- Linux is an operating system, like macOS or Windows
  - most popular Open Source and free
  - powers most of the servers that compose the Internet
  - Android is based on (a modified version of) Linux
- kernel is the Linux "core" which was born on 1991 in Finland
  - went to be a kernel of the GNU Operating System, creating the duo GNU/Linux
- one thing about Linux that corporations like Microsoft and Apple, or Google, will never be able to offer: freedom to do whatever we want with our computer
- Linux has **ditributions**
- **distro** is made by a company or organization and packages the Linux core with additional programs and tooling
  - e.g., Debian, Red Hat, and Ubuntu (most popular)


## Using Linux

- GNU/Linux is a free alternative to UNIX
- [UNIX](https://en.wikipedia.org/wiki/Unix) is an umbrella term that groups many operating systems used in big corporations and institutions, starting from 70's
- macOS has access to the same exact commands
- Microsoft has an official [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) which can be installed on Windows
- most of the time we run a Linux in cloud via VPS (Virtual Private Server)
- shells explain [here](../11-basic-tools/50-cli.md#)


## Editors

- `vim` 
  - a popular file editor, especially among programmers
    - actively developed and frequently updated
    - big community
    - Vim conference
  - `vi` in modern systems is just an alias to `vim`, which means `vi` i`m`proved.
  - Vim has 2 main modes:
    - command (normal) mode
      - cannot enter any text
    - insert mode
      - pressing `i` key, `-- INSERT --` will appear at the bottom of the editor
  - move around the file with the arrow keys, or using:
    - `h` key for left
    - `l` key for right
    - `j` key for down
    - `k` key for up
  - `esc` key to exit **insert mode**, and go back to **command mode**
  - saving the file:
    - `:wq` to **save and quit**
    - `:q!` to **quit without saving**
    - `u` to **undo** in command mode
    - `ctrl`+`r` to **redo** (cancel undo)
  - some commands:
    - `x` key deletes the character currently highlighted
    - `A` key to go to the end of the currently selected line
    - `0` key to go to the start of the line
    - `dw` in the first character of a word to delete that word
    - `de` works the same with dw, but white space before the next word is preserved
    - use a number between `d` and `w` to delete more than 1 word, e.g., `d3w` deletes 3 words forward
    - `dd` deletes the entire line
    - `d$` deletes the entire line from where the cursor is, until the end
  - to learn more about Vim, check [Vim FAQ](https://vimhelp.org/vim_faq.txt.html)
  - `vimtutor` command to start `vim` exploration
- emacs
  - historically regarded as the editor for UNIX systems
  - `ctrl`+`x` `ctrl`+`w` once done editing
    - then overwrite it by answering `y` to get a confirmation of success
  - `ctrl`+`x` `ctrl`+`c` to exit Emacs
  - `ctrl+h` `r` to open Emacs built-in manual
  - `ctrl`+`h` `t` to open official tutorial
- `nano`
  - beginner friendly editor
  - can directly type characters into the file without worrying about modes
  - `ctrl`+`X` to quit without editing
    - if file was edited, editor will ask for confirmation to save or discard it


## Linux Filesystem

- every modern computer system relies on a filesystem to store and retrieve programs
- memory is completely wiped off any time the computer restarts, while the disk structure is persistent
- filesystem starts from `/`
  - root node which hosts the first level directories
- usual UNIX system directories:
  - `/bin` contains the main system commands
  - `/etc` contains the system configuration
  - `/dev` contains the system devices
  - `/usr` contains the user files
  - `/tmp` contains the temporary files
- Linux has standardised the folders using its Linux Standard Base effort, usual directories:
  - `/bin` the main system commands
  - `/boot` the files used to boot the machine (not existing on macOS)
  - `/dev` system devices
  - `/etc` system configuration files
  - `/etc/opt` user programs configuration files
  - `/home` the home directories of users (/Users in macOS)
  - `/lib` the system libraries (not existing on macOS)
  - `/mnt` mounted filesystems
  - `/opt` user programs
  - `/proc` user by kernel and processes (not existing on macOS)
  - `/root` the home folder of the root user (not existing on macOS)
  - `/run` (not existing on macOS)
  - `/sbin` system binaries user for booting the system
  - `/tmp` temporary files
  - `/usr` holds user software, libraries and tools
  - `/usr/bin` user binaries
  - `/usr/include` user header files
  - `/usr/lib` user libraries
  - `/usr/local` used by user software to store installations, like Homebrew on macOS
  - `/usr/sbin` system binaries
  - `/usr/share` contains architecture-independent data. It can hold a lot of miscellaneous stuff including documentation and man pages
  - `/usr/src` contains the source code of installed packages (not existing in macOS)
  - `/var` contains temporary files, logs and more
- macOS has various different folders, including:
  - `/Applications` stores the users applications
  - `/Library` holds the library (settings and resources) used globally by users of the system
  - `/System` holds system files
  - `/private` holds system files, logs and more
- folder or file valid name:
  - can be long from 1 to 255 characters
  - must be composed from any alphanumeric character (a-z/A-Z/0-9)
  - underscore (`_`), dot (`.`) and comma (`,`) characters
- name with space is not recommended because it needs to be escaped with a backslash (`\`) every time we reference it
