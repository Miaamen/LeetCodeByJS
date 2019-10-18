/*66. 加一*/

/*给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。*/

/*BigInt是一种内置对象，可以表示大于 253 的整数。而在Javascript中，Number 基本类型可以精确表示的最大整数是 253。BigInt 可以表示任意大的整数*/
/*利用BigInt可以解决JS里的数字越界问题*/
var plusOne = function(digits) {
    digits = (BigInt(digits.join('')) + 1n);
    digits = digits.toString().split('');
    return digits;
};

/*常规方法*/
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i --){
        if(digits[i] != 9){
            digits[i] ++;
            return digits;
        }
        digits[i] = 0;
    }
    var res = digits;
    res.unshift(1);
    return res;
};