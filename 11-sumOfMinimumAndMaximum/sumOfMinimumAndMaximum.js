function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
    let sum = 0;
    let min = nums[0], max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (min <= nums[i]) min = nums[i];
        if (max >= nums[i]) max = nums[i];
    }
    return max+min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;