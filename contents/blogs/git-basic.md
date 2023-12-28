---
title: 'Git Basic'
description: 'For beginners, Git basics are described to be easy to understand'
date: '2022-12-26'
image: '/images/blogs/git-basic/feature-image-en.png'
tags:
  - Git
  - GitHub
  - VCS
  - Tutorial
---

## Prerequisites

- You need to install Git on your PC. [Download Here](https://git-scm.com/downloads)

- A Github account. [Register Here](https://github.com/signup)
  _( Since some of the following processes will be explained using GitHub )_

- You need to log in to your Git account on your machine

### Git Account Login

If you already have a Git Account login on your PC, you can skip this step.

```bash
git config --global user.name "Your Username"
git config --global user.email youremail@mail.com
```

> Git Config only uses to set configuration values in the Local Device and does not have a Git Account Login Process. You will receive a login link to log in through the browser only when the commands related to Git remote are run.

## Git

Git is a tool for tracking file (or code) changes, enabling users to maintain different versions of code, facilitating reuse and reverting to previous code versions. It also performs various other functions.

## Initializing

To use Git, you must first initialize a Git Repository (Repo) in the project folder where you want to work.
To initialize the Git repo, open the terminal and navigate to the project folder's path, then execute the following command:

```
git init
```

Once the command execution is complete, a folder named `.git` will appear in the project file. After this folder appears, you can commence using Git.

![Dot Git Folder](/images/blogs/git-basic/dot-git-folder.png)

> Projects created with commands like `npx create-react-app` and `laravel new` will include `.git` folders as part of the Framework Create commands.

`.git` is a folder that stores the code history and information data related to the Git repo.

While all the code history and informational data are stored in the Git repo, the working directory will only display the code from the current **branch** and **commit** (to be explained later).

![Repo and Working Dir](/images/blogs/git-basic/repo-wd.png)

## Committing

In Git, the process of storing code by version is typically referred to as a commit.

![Git Commits](/images/blogs/git-basic/git-commits.png)

Committed data is stored in the Git repo, and if necessary, the previous version node (commit) can be reverted.

In order to do a Git commit, you must first add the files you want to commit to the Staging Area.

![Repo, Staging and Working Dir](/images/blogs/git-basic/repo-staging-wd.png)

> Staging Area is a place where the files that are intended to be committed are taken as a list.

> The files to be committed must be added only after they have been added to the Staging Area

### Git Add

To add files to the Staging Area, you need to run the following command:

Add all the changes file

```
git add .
```

Add only the files you want

```
git add <filenames>
```

For example:

```
git add index.html

git add index.html hello.html
```

![Git Add](/images/blogs/git-basic/git-add-command.png)

### Git Status

You can see which files are in the Staging Area using the following command or GUI Tools such as [Sourcetree](https://www.sourcetreeapp.com/) , [tortoise](https://tortoisegit.org/) and VS Code's built-in Source Control. You can also see it in the panel.

```
git status
```

![Git Staging in VS Code](/images/blogs/git-basic/git-staging-vscode.png)

### Git Commit

Now that the files you want to commit have been added to the staging area, you can proceed to commit by running the following command:

```
git commit -m "Your commit message"
```

![Git Commit Command](/images/blogs/git-basic/git-commit-command.png)

You can view commit history by running the following command or using GUI tools:

```
git log
```

## Branching

Branches in Git are like parallel universes for projects. This means that each branch is going with its own timeline / code base.

![Git Branches](/images/blogs/git-basic/git-branches.png)

By using branches, there's no need to directly modify the code in the main branch. This allows you to work on new features or bug fixes independently in separate branches. Users can create new branches, switch between them, and merge different branches together.

> After initializing Git, the `master` or `main` branch is automatically created by default.

### Git Branch

You can create a new Git branch by executing the following command:

```
git branch <branch_name>
```

For example:

```
git branch develop

git branch feature/add-home-page

git branch feature/bug-fix
```

If you want to review the list of created branches, you can use the following command:

```
git branch
```

> When you create a new branch, it will contain the codebase from the latest commit of the current branch.

### Git Checkout

You can switch to the created branch by executing the following command:

```
git checkout <branch_name>
```

If you want to **create + switch** the branch at once, you can do it by running the following command

```
git checkout -b <branch_name>
```

Here `-d` is the command to create a new branch

### Git Merge

If you want to merge two branches in Git, switch to the branch where you want to incorporate changes and execute the following command. Replace `<branch_name>` with the name of the branch you intend to merge:

```
git merge <branch_name>
```

![Git Merge](/images/blogs/git-basic/git-merge.png)

## Remote Repository

A remote repo is essential for developers involved in a project. It serves as a centralized repo to store the entire history of code changes and information. Remote repos are typically hosted on Git servers such as GitHub, GitLab, and Bitbucket.

![Git Repos](/images/blogs/git-basic/git-repos.png)

> Beginners often mistake Git and GitHub for the same thing

> Basically, git is a tool, and GitHub is a repo on the cloud to work with other developers on a project that using git.

### Create GitHub Repo

Create a Repository in GitHub at this [link](https://github.com/new).
If you have already built a new GitHub Repo, you can skip this step.

Give the repo a name you like. Then click `Create Repository` and wait for a while, you will get a new GitHub Repo

![GitHub Create Repo](/images/blogs/git-basic/create-github-repo.png)

You can get the GitHub Repo link by copying it from the URL bar and by copying GitHub's Quick setup session.

![Get GitHub Repo Link](/images/blogs/git-basic/get-github-repo-link.png)

### Git Remote

Since there is already a remote repo (GitHub), if you run the following command in the terminal of the local project, it will connect to the local repo and the remote repo.

```
git remote add <name> <url>
```

> You can choose any name for `<name>`, but `origin` is commonly used.

For example:

```
git remote add origin https://github.com/dev-zha/my-project-repo
```

> The Repo to be connected must be Public, or if it is Private, it must be the repo of your own git account. If it's someone else's Private Repo, you need to participate in that repo as a Collaborator

You can view the connected remote repo by executing the following command:

```
git remote show <name>
```

If you want to disconnect from a remote repo, you can do so by running the following command:

```
git remote remove <name>
```

### Git Push

The `git push` command is utilized to send and update local commits made by the user to a remote repo. The syntax for this command is as follows:

```
git push <remote-name> <branch-name>
```

For example:

```
git push origin main
```

> If you don't have a GitHub account login on your PC, when you run `git push` command, a login link will appear in your browser to connect your Github account to your PC.

### Git Fetch

The `git fetch` command is used to retrieve code changes from the remote repo for the current branch. When acquiring code changes, local code and remote code are not automatically merged; they are stored separately in the local repo until the user runs the command to merge. The command is:

```
git fetch <remote-name> <branch-name>
```

For example:

```
git fetch origin main
```

### Git Pull

The `git pull` command is employed to fetch code changes from a remote repo and automatically merge the resulting code into the current local branch. It combines the functionalities of the `git fetch` and `git merge` commands. The syntax is as follows:

```
git pull <remote-name> <branch-name>
```

For example:

```
git pull origin main
```

### Git Clone

The `git clone` command is used to create a copy of a remote repo on your local machine. The syntax for the command is:

```
git clone <repository-url>
```

For example:

```
git clone https://github.com/dev-zha/my-project-repo
```

> `git clone` is the first command used when starting a project and links the local machine to the remote repo for getting/uploading code changes.

![Git Commands](/images/blogs/git-basic/git-commands.png)

## Conclusion

I hope that understanding Git basics will make your team collaboration and code management easier.
