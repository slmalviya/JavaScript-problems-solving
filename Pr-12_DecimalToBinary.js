function decimalToBinary(decimal) {
    if (decimal === 0) {
        return '0';
    }
    
    let binary = '';
    let num = decimal;

    while (num > 0) {
        let remainder = num % 2;
        binary = remainder + binary;
        num = Math.floor(num / 2);
    }

    return binary;
}

// Example usage
let decimal = 25;
let binary = decimalToBinary(decimal);
console.log(`Decimal: ${decimal}, Binary: ${binary}`);  // Output: Decimal: 25, Binary: 11001
