function hasTargetSum(array, target) {
  // Create an object to keep track of all the numbers we've seen
  const seenNumbers = new Set();

  // Iterate over the array of numbers
  for (const number of array) {
    // For the current number, identify a complementary number that adds to our target
    const complement = target - number;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set for future reference
    seenNumbers.add(number);
  }

  // If we reach the end of the array, return false
  return false;
}

/* 
  Big O time complexity of the function:
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  Pseudocode:
  - Create a set to keep track of seen numbers
  - Iterate over the array
    - Calculate the complement for the current number and the target
    - Check if the complement exists in the set
      - If it does, return true
    - Add the current number to the set
  - If the loop completes, return false
*/

/*
  Written explanation of the solution:
  The function iterates through the array once, keeping track of seen numbers in a set. 
  For each number, it calculates its complement with respect to the target. 
  If the complement exists in the set, it means there's a pair that adds up to the target, so it returns true. 
  If the loop completes without finding a pair, it returns false.
*/

// Custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
