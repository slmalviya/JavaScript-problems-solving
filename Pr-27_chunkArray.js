function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
  
 
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkSize = 3;
  const result = chunkArray(array, chunkSize);
  
  console.log(result);
  // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  