/*16. 最接近的三数之和*/

/*给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a - b);
    var res = nums[0] + nums[1] + nums[2];
    for(var i = 0; i < nums.length; i ++){
        var l = i + 1,r = nums.length - 1;
        while(l < r){
            var temp = nums[i] + nums[l] + nums[r];
            if(Math.abs(temp - target) < Math.abs(res - target))
                res = temp;
            if(temp > target){
                r --;
            }else if(temp < target){
                l ++;
            }else{
                return target;
            }
        }
    }
    return res;
};
