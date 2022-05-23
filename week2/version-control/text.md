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
- [] git fetch => gives you access to other branches by retrieving the latest meta-data info from the original
- [] git checkout -b <new branch name> => create a new branch
- [] git branch -D <branch you want to delete> => deletes a branch
- [] git checkout <branch name> => changes the branch you are working

## Step-by-step
1. get newest from main, from main branch: git pull origin main
2. create a new branch: git checkout -b <new-branch-name>
3. do the changes
4. add the changes: git add <file-name>
5. add commit message: git commit -m "Your nice message"
6. push changes to remote branch: git push
7. publish remote branch: git push --set-upstream origin <branch>
8. go to GitHub page, create PullRequest
9. Merge pull PullRequest
10. Delete branch: git branch -D <branch>
## Exercise: Add your bio in alphabetic order

This is an exercise to learn how to work colaborativelly using git as a version control system.

You need to add your name and one line about you in alphabetic order.

You will do that in 2 stages: first you will add your name. You never change the master branch! You create a branch, commit your change, push it the remote branch, open a pull request, wait for approval, than you finally merge. Second part you will add one paragraph about you.

Before creating a new branch you pull changes from master, make sure you are up to date. Than you repeat the process.

### George MacMoustasche

### Ira Karpova
Ira really wishes to become a developer in a nearest future.

### Jovana Kovacevic
Jovana likes to ride a skateboard. Her favorite band is Arctic Monkeys.

### Natalie Sakina Mbatha
I love Manchester United football club!!!

### Niloo

### Paloma Oliveira

Paloma is a proud mother of George, the cat.Her favorite color is yellow.
