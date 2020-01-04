/*78. 子集*/

/*给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]*/

var subsets = function(nums) {
    var res = [];
    var temp = [];
    backtrack(res,nums,0,temp);
    return res;
};

var backtrack = function(res,nums,index,temp){
    res.push(temp.slice());
    for(let i = index; i < nums.length; i ++){
        temp.push(nums[i]);
        backtrack(res,nums,i + 1,temp);
        temp.pop();
    }
}
