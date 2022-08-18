// Assignment Code
var generateBtn = document.querySelector("#generate");

//Possible Outcomes
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var possible = '';
var password = '';
var characters = 8

function generatePassword () {

var init = function() {
  var input = prompt('How many characters?');
  var choice;
  if (input) {
    choice = input[0];
  } else {
    alert('Please enter how many characters.');
    init();
  }
}
//Prompts
var hasLower = confirm('Has lowercase letter?');
var hasNumber = confirm('Has number?');
var hasSpecial = confirm('Has special character?');

if (confirm) {
  for (var i = 0; i <= characters; i++) {
    var random = Math.floor(Math.random() * numbers.length, symbols.length, lower.length);
  password += numbers, symbols, lower;

  var possibleCharacters = [];

  if (numbersprompt === true) { 
    possibleCharacters = possibleCharacters.concat(numbers)
  }
  if(symbolprompt === true) {
     possibleCharacters = possibleCharacters.concat(symbols)
   }
  if(uppercaseprompt === true) {
    possibleCharacters = possibleCharacters.concat(uppercase)
  }
  if(lowercaseprompt === true) {
    possibleCharacters = possibleCharacters.concat(lowercase)
  }
}
}

return init;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
