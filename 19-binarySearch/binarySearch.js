class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;
      for (let i = 0; i <= nums.length; i++) {
          if (nums[i] == target) return this.flag = true;
      }
      return this.flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;