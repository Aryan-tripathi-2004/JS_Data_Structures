// Function to generate random birth months for 50 individuals
function generateBirthMonths() {
    let birthMonthMap = new Map();
  
    // Initialize the map with months 1 to 12
    for (let i = 1; i <= 12; i++) {
      birthMonthMap.set(i, []);
    }
  
    // Generate 50 random birth months
    for (let i = 1; i <= 50; i++) {
      let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
      birthMonthMap.get(month).push(i); // Store individual number in the respective month
    }
  
    return birthMonthMap;
  }
  
  // Function to display individuals grouped by birth month
  function displayBirthMonths(birthMonthMap) {
    console.log("Individuals Grouped by Birth Month:");
    for (let [month, individuals] of birthMonthMap.entries()) {
      console.log(`Month ${month}: ${individuals.length > 0 ? individuals.join(", ") : "No birthdays"}`);
    }
  }
  
  // Generate and display birth months
  let birthMonthMap = generateBirthMonths();
  displayBirthMonths(birthMonthMap);
  