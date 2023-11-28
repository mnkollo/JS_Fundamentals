//Concatination and interpolation

var price = 80
var itemName = "Cup"

//concatenation - a series of interconnected things or events.
var messageToPrint = "The price for your " +itemName+" is " +price+ " dollars"   //concatenation

//Interpolation - you replace a piece of your string with a variable
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation



console.log(messageToPrint)
console.log(messageToPrint2)

