## **Git commands**

---

### **1. Git Basics**
```bash
# Initialize a Repository
git init

# Check Repository Status
git status

# Clone a Repository
git clone <repository-url>

# Show Configuration
git config --list
```

---

### **2. Adding and Committing Changes**
```bash
# Track New Files
git add <file>

# Track All Changes
git add .

# Commit Changes
git commit -m "Commit message"

# Modify last commit message
git commit --amend -m "New commit message"
```

---

---

### **3. Remote Repositories**
```bash
# Add a Remote Repository
git remote add origin <repository-url>

# List Remote Repositories
git remote -v

# Push to a Remote Repository
git push origin <branch-name>

# Pull Changes from Remote
git pull origin <branch-name>

# Fetch Changes (Without Merge)
git fetch origin
```

---

### **4. Viewing History and Logs**
```bash
# View Commit History
git log

# Compact Log
git log --oneline

# Show Changes in a Commit
git show <commit-hash>

# Compare Changes in Working Directory
git diff
```
### **5. Branching and Merging**
```bash
# Create a New Branch
git branch <branch-name>

# Switch to a Branch 
git checkout <branch-name>

# Switch or Create a Branch
git switch -c <branch-name>

# Merge Branches
git merge <branch-name>

# Delete a Branch Locally
git branch -d <branch-name>
```
---

### **6. Undoing Changes**
```bash
# Unstage a File
git reset <file>

# Discard Changes in a File
git checkout -- <file>

# Reset to a Specific Commit (Discard Changes)
git reset --hard <commit-hash>
```


--- 
Here is a table of Git commands along with their undo commands and explanations:  

| **Git Command**                       | **Undo Command**                     | **Explanation**                                                                                     |  
|---------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------|  
| `git init`                            | No direct undo                       | Initializes a new Git repository in the current directory.                                         |   
| `git add <file>` / `git add .`        | `git reset <file>` / `git reset`     | Adds specific files or all files to the staging area.                                              |  
| `git commit -m "message"`             | `git reset --soft HEAD~1`            | Records the staged changes with a descriptive message in the local repository.                     |  
| `git push`                            | `git reset --soft HEAD~1` + `git push --force` | Pushes the committed changes to the remote repository.                                             |  
| `git branch <branch-name>`            | `git branch -d <branch-name>`        | Creates a new branch in the local repository.                                                      |  
| `git checkout <branch-name>`          | `git checkout -`                     | Switches to the specified branch. Undo by switching back to the previous branch.                   |  
| `git merge <branch-name>`             | `git reset --merge`                  | Combines changes from the specified branch into the current branch.                                |  
| `git remote add origin <url>`         | `git remote remove origin`           | Links your local repository to a remote repository.                                                |  
| `git stash`                           | `git stash apply` or `git stash pop` | Temporarily saves uncommitted changes without committing them.                                     |  
| `git revert <commit-hash>`            | `git revert <commit-hash>` (revert the revert) | Reverts a specific commit by creating a new commit that undoes the changes.                        |  
| `git push --force`                    | `git reset --soft HEAD~1` + `git push --force` | Forcibly pushes changes to overwrite the remote branch.                                            |  
