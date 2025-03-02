
function convertToFahrenheit(celsius){
    let Fahrenheit = celsius * 9/5 + 32;
    return Fahrenheit;
}
console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
console.log(convertToCelsius(86));