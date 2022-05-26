// nums = [-2,1,-3,4,-1,2,1,-5,4] 输出： 6 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6 。
const nums = [-2,1,-3,4,-1,2,1,-5,4];

const maxSubArray = nums => {
  let pre = 0, max = nums[0];
  nums.forEach(num => {
    console.log('brefor', pre, max);
    pre = Math.max(pre + num, num);
    max = Math.max(max, pre);
    console.log('after', pre, max);
  });
  return max;
}

console.log(maxSubArray(nums));

// 连续子数组最大和 https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
