let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialChars = "!@#$^&%*()+=-[]{}|:<>?,.";
let numbers = "1234567890";

let pwd = "";
let lowerSelection = false;
let upperSelection = false;
let specialSelection = false;
let numberSelection = false;

function generate() {
    let confirmLength = "";

    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }

    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        }

        if (confirm("Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true;
        }

        if(confirm("Would you like to use numerical characters?") == true) {
            numberSelection = true
        }

        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected.")
        }
    }

     let characters = "";
     characters += (lowerSelection ? lowerCase : '');
     characters += (upperSelection ? upperCase : '');
     characters += (specialSelection ? specialChars : '');
     characters += (numberSelection ? numbers : '');
}