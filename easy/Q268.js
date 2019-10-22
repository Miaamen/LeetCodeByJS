/*268. 缺失数字*/

/*给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8*/

var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);
    if(nums[0] != 0)
        return 0;
    else if(nums[nums.length - 1] != nums.length)
        return nums.length;
    for(var i = 1; i < nums.length; i ++){
        var exNum = nums[i - 1] + 1;
        if(nums[i] != exNum){
            return exNum;
        }
    }
    return -1;
};