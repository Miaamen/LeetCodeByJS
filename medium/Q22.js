/*22. 括号生成*/

/*给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

//使用回溯的想法，递归实现
var generateParenthesis = function(n) {
    var res = [];
    //n为0则没有组合，特殊情况
    if(n === 0){
        return res;
    }
    //n不为0，则进行深度优先遍历
    dfs("",n,n,res);
    return res;
};

//left是左括号的个数，right是右括号的个数
var dfs = function(str,left,right,res){
    //递归函数的终止条件
    if(left == 0 && right == 0){
        res.push(str);
        return;
    }
    //先放左括号，我们不考虑第一个是右括号，因为一定错误
    if(left > 0){
        dfs(str + "(",left - 1,right,res);
    }
    //有左括号的前提，右括号的个数限制在左括号的个数
    if(right > 0 && left < right){
        dfs(str + ")",left,right - 1,res);
    }
}
