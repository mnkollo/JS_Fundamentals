//Loops

// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')

// for(statement1; statement2; statement3){   //statement1: initialization, statement2: condition, statement3: increment
//     //execute some code here
// }

//for look (for i loop)
// 8035 BackOffice - Verify user can set current Version for Bid Increment Tier  gives a good example of for loop

for(let i=0; i<10; i++){                              
    console.log('Hello World! ' + i)
}


console.log("************")

var players = ['Lebron','Kobe','Jordan']
for(let i=0; i<players.length; i++){
    console.log("Player: " + players[i])
}


console.log('*****************')

var cars = ["Volvo","break", "BMW", "Fiat"];   //iterator is i
//for of loop
for (let c of cars){
   console.log(c) 
   if(c === "BMW"){
    break;
   }
}

console.log("************")

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
    
})

console.log("************")


const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("************ Looping over a range of numbers")

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log("************")


const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum);


console.log("************ Nested for loop")

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

//****************************************************************************************/
//initialization - var i = 0
//Initialization refers to the process of setting the initial values of variables or parameters in a system or program before they are used


var arr = ['John','Nick', 'Bob','Michael','Mary']

for(var i = 0; i < arr.length; i++){
   if(arr[i] === 'Bob'){
    console.log(arr[i] + ' is my brother');
    break;
   }
}


var i = 0
while (i <= 10){
    
    i++
    console.log(i)
}


var colors = ['white', 'black', 'red', 'blue', 'green']
var i = 0

while(i < colors.length){
    i++;
    console.log(colors[i])
}