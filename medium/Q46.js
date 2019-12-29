/*46. 全排列*/

/*给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

//还是回溯
var permute = function(nums) {
    var res = [];
    dfs([],nums,res,0,nums.length);
    return res;
};

var dfs = function(cur,nums,res, i ,j){
    if(i === j){
        res.push(cur.concat());
        return;
    }
    for(let k = i; k < j; k ++){
        swap(nums,i,k);
        cur.push(nums[i]);
        dfs(cur,nums,res,i + 1,j);
        cur.pop();
        swap(nums,i,k);
    }
}

var swap = function(nums,i,j){
    var t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}
