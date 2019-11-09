/*303. 区域和检索 - 数组不可变*/

/*给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

示例：

给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
*/

var NumArray = function(nums) {
    this.nums = nums;
};

NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    for(var h = i ; h <= j; h ++){
        sum += this.nums[h];
    }
    return sum;
};