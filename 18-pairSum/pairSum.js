function pairSum(nums, target) {
  // Insert code here;

        if (nums.length <= 1) throw new RangeError("Should not be less than or equal to 1!");

        for (let i = 0; i < nums.length; i++) {
            for (let j = 1 + i; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) return true;
            }
        }
        return false;    

}

// Do not edit this line;
module.exports = pairSum;