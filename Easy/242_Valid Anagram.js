// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//* Method -1

var isAnagram = function (s, t) {
  let one = s.split("").sort().join("");
  let two = t.split("").sort().join("");
  if (one === two) {
    return true;
  }
  return false;
};

console.log(isAnagram("anagram", "nagaram"));
//* Method -2
const s = "anagram",
  t = "nagaram";
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = Array(26).fill(0);

  for (let char of s) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  for (let char of t) {
    if (count[char.charCodeAt(0) - "a".charCodeAt(0)] === 0) {
      return false;
    }
    count[char.charCodeAt(0) - "a".charCodeAt(0)] -= 1;
  }

  return true;
};

console.log(isAnagram(s, t));
