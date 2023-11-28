//objects
// objects - is an intity that can hold multiple values at the same time
// variables - can only hold one value at a time

// objects - defined by curly braces and the information is stored in key value pairs
var customer = {
    firstName: 'John',                
    lastName:'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
var shoes = {
    jordan: 'Air Jordan 1',
    lebron: 'Lebron 17',
    kobe: 'Kobe 5'
}
console.log(customer['firstName'])      // Bracket notation
console.log(shoes.jordan)           // Dot notation

// Dot notation
customer.firstName = 'Mike'
//Bracket notation
customer['lastName'] = 'William'

//console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`)


//arrays  
//array - is a list of items that you want to save
//arrays - defined by square brackets and the information is stored in a list and is indexed
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "Honda"
console.log(car[1])
console.log(customer.cars[2])


var cars = {
    car1: 'Volvo',
    car2: 'Toyota',
    car3: 'Mercedes',
    car4: ['Van', 'Truck', 'Suv']
}




