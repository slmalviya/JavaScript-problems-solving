function fibonacci(numTerms) {
    let sequence = [];
    if (numTerms === 1) {
        sequence[0] = 0;
    } else if (numTerms >= 2) {
        sequence[0] = 0;
        sequence[1] = 1;
        for (let i = 2; i < numTerms; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
    }
    return sequence;
}


let numTerms = 10; 
let result = fibonacci(numTerms);
console.log(`Fibonacci sequence of ${numTerms} numbers: ${result.join(', ')}`);