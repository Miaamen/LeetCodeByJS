/*326. 3的幂*/

/*给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

输入: 27
输出: true
示例 2:

输入: 0
输出: false
示例 3:

输入: 9
输出: true
示例 4:

输入: 45
输出: false
*/

var isPowerOfThree = function(n) {
    if(n == 1)
        return true;
    while(n){
        if(n == 3)
            return true;
        else
            n = n / 3;
    }
    return false;
};

var isPowerOfThree = function(n) {
    return n > 0 && 1162261467%n == 0;
    //数论的知识，3的幂次的质因子只有3，而所给出的n如果也是3的幂次，
    //故而题目中所给整数范围内最大的3的幂次的因子只能是3的幂次，
    //1162261467是3的19次幂，是整数范围内最大的3的幂次
};