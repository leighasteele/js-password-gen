// Assignment Code
var generateBtn = document.querySelector("#generate");

//Possible Outcomes
var numbers = '0123456789';
var symbols = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'; 
var lower = 'abcdefghijklmonpqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var possible = '';
var password = '';

function generatePassword() {

  var characters = prompt('How many characters in your password? (8-128)');

  //Prompts
  if (characters >= 8 && characters <= 128) {
    var hasLower = confirm('Has lowercase letter?');
    var hasUpper = confirm('Has uppercase letter?');
    var hasNumbers = confirm('Has number?');
    var hasSymbols = confirm('Has special character?');
    //string of possible characters from prompt selection
    if (hasLower) {
      possible += lower;
    }
    if (hasUpper) {
      possible += lower;
    }
    if (hasNumbers) {
      possible += lower;
    }
    if (hasSymbols) {
      possible += lower;
    }
  }

  //builds password by randomly selecting string character
  for (var i = 0; i < characters; i++) {
    var random = Math.floor(Math.random() * possible.length);
    password += possible[random];
  }
  //shows the actual password
  return password;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
