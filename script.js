// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
var lower = 'abcdefghijklmnop'
var number = '0123456789'
var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
var possible = '';
var password = '';
}

var characters = 8;

var hasLower = confirm('Has lowercase letter?');
var hasNumber = confirm('Has number?');
var hasSpecial = confirm('Has special character?');

if (hasLower) {
  possible += lower;
}
if (hasNumber) {
possible += number;
}

if (hasSpecial) {
  possible += special;
  }

  for (var i = 0; i < characters; i++) {
  }

  return '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
