/*258. 各位相加*/

/*给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

输入: 38
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
*/

/*方法一：用递归，好像用循环会超出时间范围*/
var addDigits = function(num) {
    var sum = 0;
    num = num.toString().split('');
    for(let i = 0; i < num.length; i ++){
        sum += parseInt(num[i]);
    }
    num = sum;
    if(num >= 10)
        return addDigits(num);
    else
        return num;
};