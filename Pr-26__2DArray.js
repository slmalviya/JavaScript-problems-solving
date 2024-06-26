
const rows = 3;
const cols = 4;
const twoDimensionalArray = [];

for (let i = 0; i < rows; i++) {
  twoDimensionalArray[i] = [];
  for (let j = 0; j < cols; j++) {
    twoDimensionalArray[i][j] = `(${i},${j})`; 
  }
}

console.log(twoDimensionalArray);
