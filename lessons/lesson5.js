// Logical "AND" operator
// console.log(true && true) // all values must be TRUE for expression to be TRUE

// // Logical "OR" operator
// console.log(true || false) // only one value must be TRUE for expression to be TRUE

var ageIsMoreThan18 = true
var isUSCitizen = false

var eligibilityForDriversLicense = ageIsMoreThan18 && isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)


var ageIsMoreThan18 = false
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThan18 || isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)


// Logical "NOT" operator
console.log(!true)
console.log(6 == 10)
console.log(6 !== 10) // not equal to



var basketballFun = false
var footballFun = true

var sportsFan = basketballFun || footballFun
console.log("This person is a sports fan: " + sportsFan)


let x = 5;
let y = 10;

// Using the logical "or" operator
if (x > 0 || y > 0) {
    console.log("At least one of x or y is greater than 0");
} else {
    console.log("Neither x nor y is greater than 0");
}
