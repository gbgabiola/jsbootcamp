# Git

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Initialize a Git Repository](#initialize-a-git-repository)
- [Committing Changes](#committing-changes)
- [Branches](#branches)
- [Push and Pull](#push-and-pull)
- [Conflicts](#conflicts)
- [Graphical Git Tools](#graphical-git-tools)
- [A Git Strategy](#a-git-strategy)
- [Navigate a repository history](#navigate-a-repository-history)


## Introduction

- Git is a free and Open Source _Version Control System_ (VCS)
  - a technology used to track older versions of files
  - provides the ability to roll back and maintain separate different versions at the same time
  - successor of SVN and CVS, two very popular version control systems of the past
  - developed by Linus Torvalds (creator of Linux)
  - we can't avoid when making use of Open Source software
- **Distributed VCS**
  - Git is a distributed system
    - many developers can _clone_ a repository from a central location
    - work independently on some portion of code
    - _commit_ the changes back to the central location where everybody updates
  - makes it very easy for developers to collaborate on a codebase simultaneously
  - GitHub is a popular service that hosts Git repositories
    - especially for Open Source software
    - other services are: BitBucket, GitLab
- **Git Installation**
  - **OSX**: using Homebrew, run:

    ```sh
    $ brew install git
    ```

  - **Windows**: Download and install [Git for Windows](https://gitforwindows.org/)
  - **Linux**: using the package manager of our distribution to install Git:

    ```sh
    $ sudo apt-get install git

    # or
    $ sudo yum install git
    ```


## Initialize a Git Repository

- `git` shows different commands, once Git is installed
- `git init` initializes a Git repository
  - creates a hidden `.git` folder
- `git status` tells us about the untracked and staged files
- `git add <FILE>` to add the file into staging area
- `git reset <FILE>` to remove it from staging area


## Committing Changes

- once we have one or more changes to the staging area, we can commit them using:

  ```sh
  $ git commit -am "Description of the change"
  ```

  - this cleans the status of the staging area and permanently stores the edit we made
- `git log` is where the records are stored


## Branches

- Git allows us to work simultaneously on multiple, separate branches, different lines of development which represent forks of the main branch
- Git is flexible: we can have an indefinite number of branches active at the same time, and they can be developed independently until we want to merge one of them into another
- Git by default creates a branch called master
- `git checkout -b develop` creates a new branch called `develop`
  - which points to the latest commit made on the current branch
  - checking `git log`, we'll see the same log as the previous branch
- `git branch` lists the branches that the repository has
- `git checkout <BRANCH>` to switch to a different branch


## Push and Pull

- Git we always commit locally
  - which is big advantage over SVN or CSV where all commits had to be immediately pushed to a server
- **Add a remote**
  - remote is a clone of our repository, positioned on another machine
  - alternative approach is creating a blank repo on GitHub and cloning it locally
    - this will automatically add the remote for us

  ```sh
  $ git remote add origin https://github.com/<YOUR_USERNAME>/<REPONAME>.git # to add the remote type
  ```

- **Push** sends our changes to the remote
  - `git push <REMOTE> <BRANCH>` to push our code to the remote
  - we specify `origin` as the remote, because we can technically have more than one remote
    - that's the name of the one we added previously, and it's a convention

  ```sh
  $ git push origin master
  ```

- **Pull** downloads remote changes to our working copy

  ```sh
  $ git pull origin master
  ```

  - tells Git to pull the master branch from `origin`, and merge it in the current local branch


## Conflicts

- if the remote contains changes incompatible with our set of commits, the operation will fail
- this happens when the remote contains changes subsequent to our latest pull, which affects lines of code we worked on as well
- in push, this is usually solved by pulling changes, analyzing the conflicts, and then making a new commit that solves them
- in pull, our working copy will automatically be edited with the conflicting changes, and we need to solve them, and make a new commit so the codebase now includes the problematic changes that were made on the remote


## Graphical Git Tools

- [GitHub Desktop](https://desktop.github.com/), only available for Mac and Win
- [Tower](https://www.git-tower.com/), only available for Mac and Win
- [GitKraken](https://www.gitkraken.com/), available on Mac, Win and Linux


## A Git Strategy

- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/) blog post
- 2 permanent branches: **master** and **develop**
- **feature is a quick one**: if commits won't break the code
  - commit directly on develop
  - or do a quick feature branch, and then merge it to develop
- **feature will take more than one commit to finish**: maybe it will take days of commits before the feature is finished and gets stable again:
  - do a feature branch, then merge to develop once ready
- **hotfix**: if something on our production server requires immediate action, like a bugfix
  - do a short hotfix branch
  - fix the thing
  - test the branch locally and on a test machine
  - then merge it to master and develop
- **develop is unstable, master is the latest stable release**
  - develop branch will always be in a state of flux
    - it should be put on a 'freeze' when preparing a release
    - code is tested and every workflow is checked to verify code quality
    - prepared for a merge into master
  - every time develop or another hotfix branch is merged into master, **tag it with a version number**
    - if on GitHub, create a **release**, so it's easy to move back to a previous state if something goes wrong


## Navigate a repository history

- **regression bug** is an unexpected problem that is caused by an unrelated change in the code
- first thing to do is to **determine where the bug is**
  - check some specifc commit
    - check if yesterday's version of the codebase worked fine

    ```sh
    $ git checkout <COMMIT_SHA>
    ```

    - move to a commit we want to roll back to, look something like `5a06d3ca5e7adb6e67`
    - do it with the previous commits until we find a commit where the code works
- apply the **divide and conquer** principle
  - pick a commit in the middle of the last one that didn't work and the one that works
  - repeat the process and cut in half every time the interval of commits, until we identify the commit that introduced the problem
  - `bisect` command automate this process
  - start from the latest commit, e.g., `git checkout master`

    ```sh
    $ git bisect start
    $ git bisect bad HEAD # tell Git a bad commit reference where code doesn't work
    $ git bisect good 7f4d976e7540e28c6b0 # and a good commit, where the code worked

    Bisecting: 3 revisions left to test after this (roughly 2 steps)
    [d18ebf1c7db9a9b44e8facc5ddb3551e641a64e2] fixes #25
    ```

    - 6 commits between HEAD and the commit mentioned as good, Git tells us, 2 more steps until we find the problematic commit
  - test the code, then tell Git the result: `git bisect bad` or `git bisect good` depending on the success
  - repeat until we find the bad commit, and then run `git bisect reset` to get back to the HEAD commit
