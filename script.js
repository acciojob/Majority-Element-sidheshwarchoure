//your code here
const nums = [2, 1, 2];
const result = majorityElement(nums);
console.log(result); // Output: 2

function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
}