function countVowels(str) {
    let count = 0;
    
    let lowerStr = str.toLowerCase();
  
    
    for (let char of lowerStr) {
      // Check if the character is a vowel
      if ("aeiou".includes(char)) {
        // If it is, increment the count
        count++;
      }
    }
  
   
    return count;
  }
  
  
  const exampleString = "Hello World";
  const numberOfVowels = countVowels(exampleString);
  
  console.log(numberOfVowels); // Output: 3
  