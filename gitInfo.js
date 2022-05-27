/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a version control tool which uses snapshots of code to save certain states of a project.";
// console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is a websites used to store cloud-based saves of local Git save states. This website can be used to upload and access Git files from the web."
// console.log(gitHubDefinition);

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {description:"'init' initializes a git save state.'", code:"use the 'init' command by typing 'git init' to initialze a save state."};
// console.log("git-init:", init);

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {description:"'clone' creates a clone of a repository into a new directory'", code:"use the 'clone' command by typing 'git clone' to create a cloned repository in a new directory."};
// console.log("git-clone:", clone);

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {description:"'status' is used to view and compare the save state of the branch and origin'", code:"use the 'status' command by typing 'git status' to view any differences in the working tree."};
// console.log("git-status:", status);

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {description:"'add' is used to add the changes made to a document to the index.", code:"use the 'add' command by typing 'git add [INSERT FILE NAME]' to add the changed document to the index"};
console.log("git-add:", add);

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {description:"'commit' is used to commit the changes made to a document to the index.", code:`use the 'commit' command by typing 'git commit -m "comment"' to commit the changed document to the index`};
// console.log("git-commit:", commit);

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {description:"'push' is used to push the changes made to an index to GitHub.", code:`use the 'push' command by typing 'git push -u origin main' to push the changed index to GitHub`};
// console.log("git-push:", push);