// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

var topKFrequent = function (nums, k) {
  // Step 1: Create a hashmap to count the frequency of each number
  let map = {};
  // Step 2: Create a bucket to store numbers with the same frequency
  let bucket = [];
  // Step 3: Initialize an array to store the final result
  let result = [];

  // Step 4: Count the frequency of each number in the nums array
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1; // If the number is encountered for the first time, initialize its frequency count to 1
    } else {
      map[nums[i]]++; // If the number is encountered again, increment its frequency count
    }
  }

  // Step 5: Populate the bucket with numbers based on their frequency
  for (let [num, freq] of Object.entries(map)) {
    if (!bucket[freq]) {
      bucket[freq] = new Set().add(num); // Initialize a new set if the bucket at freq index doesn't exist
    } else {
      bucket[freq] = bucket[freq].add(num); // Add the number to the existing set
    }
  }

  // Step 6: Iterate through the bucket from the end to get the k most frequent elements
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]); // Add elements from the set to the result array
    if (result.length === k) break; // If k elements are found, exit the loop
  }

  // Step 7: Return the result array containing the k most frequent elements
  return result;
};
