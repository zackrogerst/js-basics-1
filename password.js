
const verified = ["10+ characters", "1+ UPPER-CASE letter", "1+ lower-case letter", "1+ of any of the following characters: ! @ # $ % ^ & *"]

console.log("Welcome to Zackaroni's Password Validation Tool.", "To validate your password it must contain", verified);


const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Please enter a password to validate:", function (input) {
    const tokens = input.split(' ');
    const password = tokens[0];


    const lowerCaseLetters = (/[a-z]/g);


    let passMinLength = 10;

    if (password.length >= passMinLength && /[a-z]/.test(password) && /[A-Z]/.test(password) && password.includes('!', '@', '#', '$', '%', '^', '&', '*')) {
        console.log("Success: password valiated.");
    } else {
        console.log("Failed: does not meet minimum requirements. Please review requirements.");
    }

    reader.close();
});