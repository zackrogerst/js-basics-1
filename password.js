

console.log("Welcome to Zackaroni's Password Validation Tool.");

const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Please enter a password to validate:", function (input) {
    const tokens = input.split(' ');
    const password = tokens[0];

    let passMinLength = 10;

    if (password.length >= passMinLength) {
        console.log("Success: password meets or exceeds", passMinLength, "characters and has been valiated.");
    } else {
        console.log("Failed: password does not meet or exceed", passMinLength, "characters. Recommended to update password length.");
    }

    reader.close();
});