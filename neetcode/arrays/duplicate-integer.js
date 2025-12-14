/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  for (num of nums) {
    if (map[num] != null) {
      return true;
    }
    map[num] = 1;
  }
  return false;
};
