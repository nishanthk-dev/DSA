// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function (nums, target) {
  // Create a new Set to store the numbers encountered so far
  const set = new Set();

  // Iterate through the nums array
  for (let i = 0; i <= nums.length; i++) {
    // Calculate the complement needed to reach the target sum
    const complement = target - nums[i];

    // Check if the complement is already in the set
    if (set.has(complement)) {
      // If the complement is found, get the index of the complement in nums array
      const complementIndex = nums.indexOf(complement); // This line should be corrected
      // Return the indices of the two numbers that sum up to the target
      return [complementIndex, i];
    }

    // If the complement is not found, add the current number to the set
    set.add(nums[i]);
  }
};

// Define the input array and target sum
let num = [7, 2, 11, 15];
let target = 9;

// Call the twoSum function and log the result
console.log(twoSum(num, target));
