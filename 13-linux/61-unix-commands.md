# Common UNIX commands

## Table of Contents <!-- omit in toc -->

- [mkdir](#mkdir)
- [cd](#cd)
- [pwd](#pwd)
- [rmdir](#rmdir)
- [ls](#ls)
- [touch](#touch)
- [mv](#mv)
- [cp](#cp)
- [less](#less)
- [tail](#tail)
- [cat](#cat)
- [find](#find)


## mkdir

- `mkdir` command creates a folder: `mkdir projects`
- create multiple folders with one command: `mkdir documents pictures `
- `-p` option creates multiple nested folders
  - multiple options can be combined

  ```sh
  $ mkdir -p projects/web-projects
  ```


## cd

- cd command means **c**hange **d**irectory, invoke it by specifying a folder to move into: `cd projects`
- `..` special path indicates the parent folder: `cd ..`
- `.` indicates the **current** folder
- absolute paths, which start from the root folder `/`: `cd /etc`


## pwd

- `pwd` command means **p**rint **w**orking **d**irectory which displays the current folder path


## rmdir

- `rmdir` command deletes a folder: `rmdir projects`
- can delete multiple folders with one command, but folders must be empty
- `rm` command with `-rf` options deletes files and folders: `rm -rf projects documents`
- **Note**:
  - be careful with `rm -rf` as this command doesn't ask for confirmation and immediately delete files/folders
  - there is no **bin** when removing files from the command line, and recovering lost files can be hard


## ls

- `ls` command list all the files inside a folder
- `ls /bin` prints the folder contents
- `-l` options returns a set of data, from left to right:
  - file permissions
  - number of links to that file
  - owner of the file
  - group of the file
  - file size in bytes
  - file modified datetime
  - filename
- `-a` option shows hidden files/folders
  - hidden files start with a dot (`.`)


## touch

- `touch` command creates an empty file: `touch file`
- if the file already exists, it opens the file in write mode, and the timestamp of the file is updated


## mv

- `mv` command moves a file by specifying the file current path and new path
- `mv file file2` renamed `file` into `file2`
- if last parameter is a folder, the file located at the first parameter path will moved into that folder


## cp

- `cp` command copies a file: `cp file projects`
- `-r` option recursively copies the whole folder contents: `cp -r web-projects projects`


## less

- `less` command shows the contents stored inside a file, in a nice and interactive UI: `less file`
- `q` to quit once inside the a `less` session
- `/` and typing a word to search contents inside the file _forward_
- `?` and typing a word to search contents inside the file _backward_
- pressing `v` key opens a default editor directly
- pressing the `F` key enters _follow mode_, or _watch mode_ to see the changes _live_, when the file is changed by someone else
  - `ctrl`+`C` to quit this mode
- open multiple files, and navigate through them using `:n` (to go to the next file) and `:p` (to go to the previous)


## tail

- `tail` command with `-f` option opens the file at the end, and watches for file changes
  - any time there is new content in the file, it is printed in the window
- great for watching log files: `tail -f /var/log/system.log`
- print the last 10 lines: `tail -n 10 <FILENAME>`
- print the whole file content starting from a specific line using `+` before the line number: `tail -n +10 <FILENAME>`


## cat

- `cat` command is similar to tail, but can also add content to a file
- `cat file` prints a `file` content to the standard output
- print the content of multiple files: `cat file file2`
- `>` output redirection operator concatenates the content of multiple files into a new file: `cat file2 file3 > file`
- `>>` appends the content of multiple files into a new file, creating it if it does not exist: `cat file2 file3 >> file`
- `-n` option to see the line numbers: `cat -n file`
- `-b` option adds a number to non-blank lines
- `-s` option removes all the multiple empty lines
- `|` pipe operator feeds a file content as input to another command: `cat file | anothercommand`


## find

- `find` command finds files or folders matching a particular search pattern
- find all the files under the current tree that have `.js` extension and print the relative path of each file matching: `find . -name '*.js'`
  - **Note**: use quotes around special characters like `*` to avoid the shell interpreting them
- find directories under the current tree matching the name "src": `find . -type d -name src`
- `-type f` searches only files
- `-type l` to only search symbolic links
- `-name` is case sensitive
- `-iname` performs a case-insensitive search
- search under multiple root trees: `find folder1 folder2 -name file`
- find directories under the current tree matching the name "node_modules" or "public": `find . -type d -name node_modules -or -name public`
- `-not -path` to exclude a path: `find . -type d -name '*.md' -not -path 'node_modules/*'`
- search files that have more than 100 characters (bytes) in them: `find . -type f -size +100c`
- search files bigger than 100KB but smaller than 1MB: `find . -type f -size +100k -size -1M`
- search files edited more than 3 days ago: `find . -type f -mtime +3`
- search files edited in the last 24 hours: `find . -type f -mtime -1`
- `-delete` option delete all the files matching a search, e.g., deletes all the files edited in the last 24 hours: `find . -type f -mtime -1 -delete`
- execute a command on each result of the search, e.g., print the file content: `find . -type f -exec cat {} \;`
  - `{}` is filled with the file name at execution time
