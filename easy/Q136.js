/*136. 只出现一次的数字*/

/*给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
*/

/*任何数于0异或为任何数 0 ^ n => n；相同的数异或为0: n ^ n => 0*/
var singleNumber = function(nums) {
    var res = 0;
    for(var i = 0; i < nums.length; i ++){
        res ^= nums[i]; 
    }
    return res;
};

var singleNumber = function(nums) {
    return res;*/
    nums = nums.sort((a,b) => a - b);
    for(var i = 0; i < nums.length - 1; i ++){
        if(nums[i] === nums[i + 1])
            i = i + 1;
        else
            return nums[i];
    }
    return nums[nums.length - 1];
};