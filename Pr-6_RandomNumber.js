function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage:
  let min = 1;
  let max = 10;
  let randomNum = getRandomNumber(min, max);
  console.log(`Random number between ${min} and ${max}: ${randomNum}`);
  