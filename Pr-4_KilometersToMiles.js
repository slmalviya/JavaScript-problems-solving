//funcition to convert kilometer to Miles
function kilometerToMiles(kilometers){
    const conversionFactor = 0.621371;
    let miles = kilometers * conversionFactor;
    return miles;
}

let kilometers = 10;
let miles = kilometerToMiles(kilometers);
console.log(miles)