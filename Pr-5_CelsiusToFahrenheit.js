// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Example usage:
  let celsius = 25;
  let fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
  
  fahrenheit = 77;
  celsius = fahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit}°F is equal to ${celsius}°C`);
  