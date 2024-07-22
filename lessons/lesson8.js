// Declarative function

function helloOne() {                // declarative function can be envoked before it is declared
    console.log('Hello one!');           // declarative funcaton can be declaired at the beginning of the file
    //declarative function starts with the name function then the name of the function
}
helloOne();


// Anonymous function
var helloTwo = function () {
    console.log('Hello two!');  //Anonymous function can not be envoked before it is declared
}
helloTwo();


var hello = function () {
    console.log('Hello two!');  //Anonymous function can not be envoked before it is declared
}
hello();

//ES6 Arrow function or arrow function
var helloThree = () => {
    console.log('Hello three!');
}
helloThree();


//Function with arguments         // arguments are passed in the function
function printName(firstName, lastName, num) {
    console.log('Hello ' + firstName + ' ' + lastName + ' ' + num);
}
printName('John', 'Doe', 5);


//Function with return
function multipyByTwo(num) {
    var result = num * 2
    return result;           // return is used to return the value in a function
}
// var myResult = multipyByTwo(8);
// console.log(myResult);

console.log(multipyByTwo(20))



//import function
import { printAge } from '../helpers/printHelper.js';
printAge(20 + " years old");

// import everything from printHelper.js
import * as helper from '../helpers/printHelper.js';
helper.printAge(20);




var mike = () => {
    console.log('Hello Mike');
}
mike();

var mykea = function () {
    console.log('Hello Mykea')
}
mykea();


var luckyNumber = (num) => {
    var result = num * 2
    return result;
}
var myResult = luckyNumber(8);
console.log(myResult);