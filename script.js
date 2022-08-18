// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
var lower = 'abcdefghijklmnop'
var number = '0123456789'
var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
var possible = '';
var password = '';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);