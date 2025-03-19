function getPrimeFactors(n) {
    let factors = [];
  
    // Divide by 2 until n is odd
    while (n % 2 === 0) {
      factors.push(2);
      n = n / 2;
    }
  
    // Check odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }
  
    // If n is still greater than 2, it must be prime
    if (n > 2) {
      factors.push(n);
    }
  
    return factors;
  }
  
  // Example usage
  let number = 56; // Change this number to test with different inputs
  let primeFactors = getPrimeFactors(number);
  console.log(`Prime Factors of ${number}:`, primeFactors);
  