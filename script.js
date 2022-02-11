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
}