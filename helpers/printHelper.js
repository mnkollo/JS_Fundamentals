
export function printAge(age){
    console.log(age);
}

 class CustomerDetails{  

    printFirstName(firstName){
        console.log("First Name: " + firstName);
    }

    /**
     * this method will print the last name
     * @param {*} lastName 
     */
    printLastName(lastName){
        console.log("Last Name: " + lastName);
    }
}


export var customerDetails = new CustomerDetails();   // export the class

//created an instance of the class and exported it.


//In JavaScript, the term "instance" typically refers to an individual occurrence or 
//realization of an object that is created using a constructor function or a class.