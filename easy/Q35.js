/*35. 搜索插入位置*/

/*给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1*/

var searchInsert = function(nums, target) {
    if(target > nums[nums.length - 1])
        return nums.length;
    if(target <= nums[0])
        return 0;
    for(var i = 0; i < nums.length; i ++){
        if(nums[i] === target)
            return i;
    }
    for(var j = 1; j < nums.length; j ++){
        if(target >= nums[j - 1] && target < nums[j])
            return j;
    }
    return -1;
};

/*其实不用想得那么复杂，给了一个已经排序的了，直接比大小就可以*/
var searchInsert = function(nums, target) {
    for(var i = 0; i < nums.length; i ++){
        if(nums[i] >= target)
            return i;
    }
    return nums.length;
};