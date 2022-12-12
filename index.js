function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for(let a = i + 1; a < array.length; a++){
      if(array[a] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
  Add your pseudocode here
  iterate through each number in the array

  for the current number, identify a complement that adds to the target(complement = target - number) 

  iterate through the rest of the array
   check if any number is our complement
    if so, return true
  if I reach the end of the array,return false 
*/

/*
  Add written explanation of your solution here
  make a function that checks if there's any pair in an array that adds up to a specified target 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
