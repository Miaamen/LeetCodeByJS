/*39. 组合总和*/

/*给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
示例 2:

输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

//回溯方法
var combinationSum = function(candidates, target) {
    var res = [];
    var temp = [];
    candidates = candidates.sort((a,b) => a - b);
    backtrack(candidates,target,res,0,temp);
    return res; 
};

var backtrack = function(candidates,target,res,index,temp){
    if(target < 0){
        return;
    }
    if(target === 0){
        res.push(temp.slice()); // push一个数组
        return;
    }
    for(let i = index; i < candidates.length; i ++){
        if(target < 0){
            break;
        }
        temp.push(candidates[i]);
        backtrack(candidates,target - candidates[i],res,i,temp);
        temp.pop();
    }
}
