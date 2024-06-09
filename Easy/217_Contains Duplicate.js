// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//* method-1
var containsDuplicate = function (nums) {
  let uniqueArr = new Set(nums);
  return uniqueArr.size !== nums.length;
};
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));

//* method-2
var containsDuplicate = function (nums) {
  const arr = [];
  for (var i of nums) {
    if (arr.includes(i)) {
      return true;
    }
    arr.push(i);
  }
  return false;
};
nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));

//* method-3

var containsDuplicate = function (nums) {
  const uniqueset = new Set();
  for (var i of nums) {
    if (uniqueset.has(i)) {
      return true;
    }
    uniqueset.add(i);
  }
  return false;
};
nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
