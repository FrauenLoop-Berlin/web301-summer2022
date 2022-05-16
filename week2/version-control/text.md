# Training Version Control

## Useful commands:
1. to bring changes in
- [] git pull => get the changes from remote to your local branch
- [] git pull origin main => get the changes from remote main branch to your local branch
- [] git pull <branch you choose> <other branch you choose>

2. to move a change from your branch to some other branch
- [] git push => usually from your local to a remote branch

3. checking the status of things
- [] git status => check the status of your branch
- [] git log => tell you all the commits history in the repo

4. working with branches
- [] git branch => tells you which branches you have access to
- [] git fetch => gives you access to other branches
- [] git checkout -b <new branch name> => create a new branch
- [] git branch -D <branch you want to delete> => deletes a branch

## Exercise: Add your bio in alphabetic order
This is an exercise to learn how to work colaborativelly using git as a version control system.

You need to add your name and one line about you in alphabetic order.

You will do that in 2 stages: first you will add your name. You never change the master branch! You create a branch, commit your change, push it the remote branch, open a pull request, wait for approval, than you finally merge. Second part you will add one paragraph about you.

Before creating a new branch you pull changes from master, make sure you are up to date. Than you repeat the process.
### Paloma Oliveira
Paloma is a proud mother of George, the cat.Her favorite color is yellow.
