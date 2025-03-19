function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * 900) + 100); // Generates 3-digit number (100-999)
    }
    return numbers;
  }
  
  function findSecondLargestAndSmallest(arr) {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;
  
    for (let num of arr) {
      // Finding first and second max
      if (num > firstMax) {
        secondMax = firstMax;
        firstMax = num;
      } else if (num > secondMax && num !== firstMax) {
        secondMax = num;
      }
  
      // Finding first and second min
      if (num < firstMin) {
        secondMin = firstMin;
        firstMin = num;
      } else if (num < secondMin && num !== firstMin) {
        secondMin = num;
      }
    }
  
    console.log("Numbers:", arr);
    console.log("2nd Largest:", secondMax);
    console.log("2nd Smallest:", secondMin);
  }
  
  // Generate 10 random numbers
  const numbers = generateRandomNumbers(10);
  
  // Find 2nd largest and 2nd smallest
  findSecondLargestAndSmallest(numbers);
  