
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

// Merge arrays
const mergedArray = array1.concat(array2);

// Remove duplicates
const uniqueArray = mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
