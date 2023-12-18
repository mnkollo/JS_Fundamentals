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


var arr = ['John',
            'Bob', 
            'Mary', 
            10, 
            true, 
            [1,2,3],
            function(name){   

                return 'Hello ' + name;
            }
        ];  

console.log(arr[6](arr[0]))


var arr = new Array(1, 'John', false)     //array constructor - not used often
console.log(arr)



var colors = ['white', 'black', 'red']
colors[1] = 'blue'
console.log(colors)



var colors = ['white', 'black', 'red']
colors.push('blue')               //push - adds an item to the end of the array
console.log(colors)


var colors = ['white', 'black', 'red']
colors.push()               //pop - removes an item from the end of the array
console.log(colors)


var colors = ['white', 'black', 'red']
colors.shift()               //shift - removes an item from the beginning of the array
console.log(colors)

var colors = ['white', 'black', 'red']
colors.unshift('purple')  //unshift - adds an item to the beginning of the array
console.log(colors)        
console.log(colors.indexOf('red'))      //indexOf - returns the index of the item in the array


if(colors.indexOf('blue') === -1){

    colors.push('blue')

    console.log(colors)
}   