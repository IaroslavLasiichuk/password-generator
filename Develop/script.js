// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set up the character lists that can be included in the password
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+-=[]{};':\"|.<>/?\\";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";

// Initialize the password as an empty array
var password = [];

function generatePassword() {
  // Promt user to start password generator
  var passwordLength = prompt("Enter the desired password length (8-128 characters):");
   // Validate the user's input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter correct number");
    return;
  }
  // Promt user to select for character types to include in the password
  var includeLowercase = confirm("Include lowercase characters in the password?");
  var includeUppercase = confirm("Include uppercase characters in the password?");
  var includeNumeric = confirm("Include numeric characters in the password?");
  var includeSpecial = confirm("Include special characters in the password?");
   // Use a for loop to continuously prompt the user for password criteria until at least one character type is selected
  if (passwordLength > 8 && passwordLength < 128) {
    for (let i = 0; i < passwordLength; i++) {
         // Initialize the character list as an empty string
          var charList = "";

          // Prompt the user for password criteria
          if (includeLowercase) {
              charList += lowerCases;
              console.log(charList);
          }

          if (includeUppercase) {
              charList += upperCases;
              console.log(charList);
          }

          if (includeNumeric) {
              charList += numbers;
              console.log(charList);
          }

          if (includeSpecial) {
              charList += specialCharacters;
              console.log(charList);
          }

          // Generate a random index to select a character from the charList
          var index = Math.floor(Math.random() * charList.length);

          // Add the character at the randomly-selected index to the password
          password += charList[index];
    
      }
  }
      // Validate the user's input
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("You must select at least one character type to include in the password!");
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
