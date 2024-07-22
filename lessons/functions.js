

function convertToFahrenheit(celsius){
  return (celsius * 9/5) + 32;
}
console.log(convertToFahrenheit(25))

function convertToCelsius(fahrenheit){
  return (fahrenheit - 32) * 5/9
}
console.log(convertToCelsius(86))

function convertTemperature(degrees, unit){
   if(unit === 'C'){
    let result = convertToFahrenheit(degrees)
    return `${result} C`;
   }else if (unit === 'F'){
    let result = convertToCelsius(degrees)
    return `${result} F`;
   }
}

console.log(convertTemperature(25, 'C'))
console.log(convertTemperature(86, 'F'))