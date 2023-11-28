
export function printAge(age){
    console.log(age);
}

 class CustomerDetails{  
    printFirstName(firstName){
        console.log("First Name: " + firstName);
    }


    printLastName(firstName){
        console.log("First Name: " + firstName);
    }
}


export var customerDetails = new CustomerDetails();   // export the class