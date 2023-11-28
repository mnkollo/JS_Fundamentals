//Conditional statement

// if(condition){
//     //execute some code here
// }else{
//     //execute some code here
// }

// If hour between 6am and 12pm: print Good morning!
// If hour between 12pm and 18pm: print Good afternoon!
// Otherwise: print Good evening!

var hour = 12

if(hour >= 6 && hour < 12){
    console.log('Good morning!')
}else if (hour >= 12 && hour < 18){
    console.log('Good afternoon!')
}else{
    console.log('Good evening!')
}

//-------------------------------------------

var ageIsMoreThan18 = true
var isUSCitizen = true

if (ageIsMoreThan18 && isUSCitizen){
    console.log('This customer is eligible for DL')
}else{
    console.log('This customer is not eligible for DL')
}