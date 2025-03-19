// Function to simulate rolling a die (1-6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to roll the die until any number appears 10 times
  function rollUntilLimit(limit) {
    let dieResults = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
  
    while (true) {
      let roll = rollDie();
      dieResults.set(roll, dieResults.get(roll) + 1);
  
      // Stop when any number reaches the limit
      if (dieResults.get(roll) === limit) break;
    }
  
    // Extract keys and values
    let entries = [...dieResults.entries()];
  
    // Find max and min occurrence
    let maxEntry = entries.reduce((a, b) => (a[1] > b[1] ? a : b));
    let minEntry = entries.reduce((a, b) => (a[1] < b[1] ? a : b));
  
    console.log("Die Roll Results:", Object.fromEntries(dieResults));
    console.log("Most Frequent Number:", maxEntry[0], "appeared", maxEntry[1], "times");
    console.log("Least Frequent Number:", minEntry[0], "appeared", minEntry[1], "times");
  }
  
  // Run the function with limit 10
  rollUntilLimit(10);
  