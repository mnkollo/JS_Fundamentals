
function simulateMatch(team1, team2){
   return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1 and 4 seconds
    setTimeout(() => {
      const randomOutcome = Math.random();
      if(randomOutcome < 0.33){
        resolve(`${team1} wins!`);
      } else if(randomOutcome < 0.66){
        resolve(`${team2} wins!`);
      }else {
        resolve("It's a draw!");
      }
    }, delay);
  })
}

simulateMatch("Lakers", "Celtics")
  .then(result => console.log(result)) 
  .catch(error => console.log(error));