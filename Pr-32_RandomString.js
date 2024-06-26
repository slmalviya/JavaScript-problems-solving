function generateRandomString(length) {
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    
    for (let i = 0; i < length; i++) {
    
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    
    // Return the generated random string
    return result;
  }
  
  // Example usage:
  const randomString = generateRandomString(10);
  console.log(randomString);
  