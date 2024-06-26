function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  let array = [1, 2, 3, 4, 5];
  let itemToRemove = 3;
  
  let updatedArray = removeItem(array, itemToRemove);
  console.log(updatedArray); // [1, 2, 4, 5]
  