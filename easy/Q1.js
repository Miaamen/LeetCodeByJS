/*1. 两数之和*/

/*给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

/*解法一：很传统的两层for循环：*/
var twoSum = function(nums, target) {
    var res = [];
    for(var i = 0 ; i < nums.length; i ++){
        for(var j = i + 1; j < nums.length; j ++){
            if(nums[i] + nums[j] === target){
                res[0] = i;
                res[1] = j;
                return res;
            }
        }
    }
    return res;
};

/*用map：*/
var twoSum = function(nums, target) {
    var map = new Map();
    var arr = [];
    for(let i in nums){
        map.set(nums[i],i);
    }
    for(let j = 0; j < nums.length - 1; j ++){
        if(map.has(target - nums[j]) && map.get(target - nums[j]) != j){
            arr.push(j,map.get(target - nums[j]));
            return arr;
        }
    }
};

/*用index：*/
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++){
        let index = nums.indexOf(target - nums[i]);
        if(i != index && index != -1){
            return [i,index];
        }
    }
};