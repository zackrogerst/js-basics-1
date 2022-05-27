
const verified = ["10+ characters", "1+ UPPER-CASE letter", "1+ lower-case letter", "1+ of any of the following characters: ! @ # $ % ^ & *", "1+ number"]

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
    let passwordCharacter = false;
    let charArr = ['!', '@', '#', '$', '%', '^', '&', '*']

    for (i = 0; i <= password.length; i++){
        if(password.includes("!")){
            passwordCharacter = true;
        } else if (password.includes("@")){
            passwordCharacter = true;
        } else if (password.includes("#")){
            passwordCharacter = true;
        } else if (password.includes("$")){
            passwordCharacter = true;
        } else if (password.includes("%")){
            passwordCharacter = true;
        } else if (password.includes("^")){
            passwordCharacter = true;
        } else if (password.includes("&")){
            passwordCharacter = true;
        } else if (password.includes("*")){
            passwordCharacter = true;
        } else {
            passwordCharacter = false;
            console.log(passwordCharacter)
        }
    }


    if (password.length >= passMinLength && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && passwordCharacter === true) {
        console.log("Success: password valiated.");
    } else {
        console.log("Failed: does not meet minimum requirements. Please review requirements.");
    }

    reader.close();
});