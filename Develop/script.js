// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set up the character lists that can be included in the password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Initialize the password as an empty array
var password = [];

function generatePassword() {
  // Promt user to start password generator
  var startApp = confirm("Do you want generate password?");
  if (!startApp) {
      alert('OK Mayby next time');
      return;
  }
  var passwordLength = prompt("Enter the desired password length (8-128 characters):");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter correct number");
    generatePassword();
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
