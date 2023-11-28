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