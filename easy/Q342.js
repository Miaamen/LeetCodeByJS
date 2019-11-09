/*342. 4的幂*/

/*给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

示例 1:

输入: 16
输出: true
示例 2:

输入: 5
输出: false
*/

var isPowerOfFour = function(num) {
    if(num == 1)
        return true;
    while(num){
        if(num == 4)
            return true;
        else
            num = num / 4;
    }
    return false;
};