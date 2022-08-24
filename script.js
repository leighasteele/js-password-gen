// Assignment Code
var generateBtn = document.querySelector("#generate");

//Possible Outcomes
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = lower.toUpperCase();
var possible = '';
var password = '';
var characters = 8

function generatePassword() {
  
  var characters = prompt('How many characters in your password? (8-128)');

  //Prompts
  if (characters >= 8 && characters <= 128) {
  var hasLower = confirm('Has lowercase letter?');
  var hasUpper = confirm('Has uppercase latter?');
  var hasNumber = confirm('Has number?');
  var hasSpecial = confirm('Has special character?');
//string of possible characters from prompt selection
  if (confirm) {
    for (var i = 0; i <= characters; i++) {
      var random = Math.floor(Math.random() * numbers.length, symbols.length, lower.length);
      password += numbers, symbols, lower;

      var possibleCharacters = [];

      if (numbersprompt) {
        possibleCharacters = possibleCharacters.concat(numbers)
      }
      if (symbolprompt) {
        possibleCharacters = possibleCharacters.concat(symbols)
      }
      if (uppercaseprompt) {
        possibleCharacters = possibleCharacters.concat(uppercase)
      }
      if (lowercaseprompt) {
        possibleCharacters = possibleCharacters.concat(lowercase)
      }
    }
  }

for (var i = 0; i < characters; i++) {
  var random = Math.floor(Math.random() * possible.length);
  password += possible[random];
}

  return password;
}}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
