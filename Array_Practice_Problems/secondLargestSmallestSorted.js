function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * 900) + 100); // Generates 3-digit number (100-999)
    }
    return numbers;
  }
  
  function findSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    console.log("Sorted Numbers:", arr);
    console.log("2nd Smallest:", arr[1]);
    console.log("2nd Largest:", arr[arr.length - 2]);
  }
  
  // Generate 10 random numbers
  const numbers = generateRandomNumbers(10);
  
  // Find 2nd largest and 2nd smallest after sorting
  findSecondLargestAndSmallestSorted(numbers);
  