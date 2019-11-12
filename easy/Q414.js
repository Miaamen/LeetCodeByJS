/*414. 第三大的数*/

/*给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

示例 1:

输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.
示例 2:

输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
示例 3:

输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
*/

var thirdMax = function(nums) {
    nums = nums.sort((a,b) => b - a);
    var set = new Set(nums);
    if(set.size < 3){
        return [...set][0];
    }else{
        return [...set][2];
    }
};

var thirdMax = function(nums) {
    var max1 = -Number.MAX_VALUE,max2 = -Number.MAX_VALUE,max3 = -Number.MAX_VALUE;
    for(let i = 0; i < nums.length;i ++){
        if(nums[i] > max1){
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        }else if(nums[i] < max1 && nums[i] > max2){
            max3 = max2;
            max2 = nums[i];
        }else if(nums[i] < max2 && nums[i] > max3){
            max3 = nums[i];
        }
    }
    if(max3 === -Number.MAX_VALUE){
        return max1;
    }
    return max3;
};