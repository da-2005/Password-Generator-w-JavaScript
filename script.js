var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$^&%*()+=-[]{}|:<>?,.";
var numbers = "1234567890";

var pwd = "";
var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;

function generate() {
    var confirmLength = "";

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

    var characters = '';
    characters += (lowerSelection ? lowerCase : '');
    characters += (upperSelection ? upperCase : '');
    characters += (specialSelection ? specialChars : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;
}

function password( i, characters) {
    var pwd = '';
    for (var i = 0; i < 1; ++i ) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pwd;
}

function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
}