function checkNumber(number){
    if (number < 0) {
        return `${number} is Positive`;
    }
    else if (number < 0) {
        return `${number} is Negative`;
    }
    else {
        return`${number} is Zero`;
    }
}

// Examples
console.log(checkNumber(5));   // Output: 5 is positive
console.log(checkNumber(-3));  // Output: -3 is negative
console.log(checkNumber(0));   // Output: 0 is zero