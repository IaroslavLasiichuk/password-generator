// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for password generator
function generatePassword() {

  // Set up the character lists that can be included in the password
  var lowerCases = "abcdefghijklmnopqrstuvwxyz";
  var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*()_+-=[]{};':\"|.<>/?\\";

  // Initialize the password as an empty array
  var password = '';
  // Promt user to start password generator
  var passwordLength = prompt("Enter the desired password length (at least 8 characters and no more than 128 characters):");

  // Validate the user's input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter correct number at least 8 characters and no more than 128 characters");
    return password = '';
  }
 
  // Promt user to select for character types to include in the password
  var includeLowercase = confirm("Include lowercase characters in the password?");
  var includeUppercase = confirm("Include uppercase characters in the password?");
  var includeNumeric = confirm("Include numeric characters in the password?");
  var includeSpecial = confirm("Include special characters in the password?");
  

  // Use a for loop to continuously prompt the user for password criteria until at least one character type is selected
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (let i = 0; i < passwordLength; i++) {

      // Initialize the character list as an empty string
      var charList = "";

      // Prompt the user for password criteria
      if (includeLowercase) {
        charList += lowerCases;
      }

      if (includeUppercase) {
        charList += upperCases;
      }

      if (includeNumeric) {
        charList += numbers;
      }

      if (includeSpecial) {
        charList += specialCharacters;
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
    return password = '';
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);