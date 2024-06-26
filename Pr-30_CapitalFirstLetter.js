function capitalizeFirstLetter(str) {
    return str ? str[0].toUpperCase() + str.slice(1) : str;
  }
  
 
  const originalString = "hello";
  const capitalizedString = capitalizeFirstLetter(originalString);
  
  console.log(capitalizedString); // Output: "Hello"
  