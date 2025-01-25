// Check the Password Strength 

function validatePassword(password) {
    const specialChars = "@#!$%^&*";
    let hasDigit = false;
    let hasSpecial = false;
  
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
  
    for (let char of password) {
      if (!isNaN(char)) hasDigit = true;
      if (specialChars.includes(char)) hasSpecial = true;
    }
  
    if (!hasDigit) {
      return "Password must contain at least one digit.";
    }
  
    if (!hasSpecial) {
      return "Password must contain at least one special character (@, #, !, $, %, ^, &, *).";
    }
  
    return "Password is strong.";
  }
  
  // Test cases
 
  console.log(validatePassword("abc"));         
  