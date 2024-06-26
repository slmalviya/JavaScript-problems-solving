function containsValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage:
  let array = [1, 2, 3, 4, 5];
  let valueToCheck = 3;
  
  let isContained = containsValue(array, valueToCheck);
  console.log(isContained); // Output: true
  