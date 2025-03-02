function getFormattedDate() {
    const date = new Date();  // Today's date and time , Class is just a template to create objects that have similar properties and methods
                              //new Date() creates a new date object with the current date and time
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
    const day = String(date.getDate()).padStart(2, '0');
  
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`.toString();
  }
  
  // Example usage in Cypress
console.log(getFormattedDate());

// let todos = [ pepper, greens, okra]

// todos.forEach(function(title) {
//   console.log(title)
// })