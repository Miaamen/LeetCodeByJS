/*17. 电话号码的字母组合*/

/*给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var letterCombinations = function(digits) {
    var map = {
        2 : "abc",
        3 : "def",
        4 : "ghi",
        5 : "jkl",
        6 : "mno",
        7 : "pqrs",
        8 : "tuv",
        9 : "wxyz"
    }
    digits = digits.split('');
    if(digits.length === 0){
        return [];
    }
    if(digits.length === 1){
        return map[digits[0]].split('');
    }
    var res = map[digits[0]];
    for(let i = 1; i <digits.length; i ++){
        let num = digits[i];
        let list = [];
        for(let j = 0; j < res.length; j ++){
            for(let k = 0 ; k < map[num].length; k ++){
                list.push(res[j] + map[num][k]);
            }
        }
        res = list;
    }
    return res;
};
