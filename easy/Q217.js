/*217. 存在重复元素*/

/*给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
*/

/*方法一：*/
var containsDuplicate = function(nums) {
    for(var i = 0; i < nums.length; i ++){
        for(var j = i + 1; j < nums.length; j ++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
};

/*方法二，先排序，就会少一层循环*/
var containsDuplicate = function(nums) {
    nums = nums.sort((a,b) => a - b);
    for(var i = 0; i < nums.length - 1; i ++){
        var j = i + 1;
        if(nums[i] === nums[j])
            return true;
    }
    return false;
};

/*方法三：用Set结构，比较数组和Set的长度*/
var containsDuplicate = function(nums) {
    var set = new Set(nums);
    if(set.size != nums.length){
        return true;
    }else{
        return false;
    }
};