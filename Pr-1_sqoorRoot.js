function squreRoot(number) {
    if ( number < 0 ){
        return NaN;
    }
    let guess = number / 2 ;
    let preGuess;

    while (guess  !== preGuess) {
        preGuess = guess;
        guess = (guess + number / guess) / 2
    }
    return guess;
}

const number = 16;
const result = squreRoot(number);
console.log(result);