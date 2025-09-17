/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  /*

    time comp: O(n)
    space comp: O(1)
    */

  let counter = 0;
  let set = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (set.has(counter)) {
      counter++;
    } else {
      return counter;
    }
  }

  return nums.size;
};
