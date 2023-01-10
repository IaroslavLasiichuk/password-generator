// Assignment Code
var generateBtn = document.querySelector("#generate");

 // Set up the character lists that can be included in the password

// Initialize the password as an empty array
var password = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
