// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword () {
var lower = 'abcdefghijklmnop'
var number = '0123456789'
var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
var password = '';
var characters = 8;
}

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

var hasLower = confirm('Has lowercase letter?');
var hasNumber = confirm('Has number?');
var hasSpecial = confirm('Has special character?');

if (choice) {
  for (var i = 0; i <= characters; i++) {
    var random = Math.floor(Math.random() * number.length, special.length, lower.length);
  password += number, special, lower (random +1);

    debugger;

}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  document.querySelector("#generate").innerHTML = "Generate Password";
}