/*204. 计数质数*/

/*统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。*/

/*方法一：时间太长，会超出时间限制*/
var countPrimes = function(n) {
    var num = 0;
    for(var i = 2; i < n; i ++){
        if(isPrime(i))
            num ++;
    }
    return num;
};


var isPrime = function(n){
    for(var i = 2; i < n; i ++){
        if(n % i == 0)
            return false;
    }
    return true;
}
/*方法二：稍微缩短了时间，通过*/
var countPrimes = function(n) {
    var num = 0;
    for(var i = 2; i < n; i ++){
        if(isPrime(i))
            num ++;
    }
    return num;
};


var isPrime = function(n){
    for(var i = 2; i * i <= n; i ++){
        if(n % i == 0)
            return false;
    }
    return true;
}

/*方法三：厄拉多塞筛法*/
var countPrimes = function(n) {
    var isPrim = [];
    // 将数组都初始化为 true
    for(var o = 0; o < n; o ++){
        isPrim[o] = true;
    }
    for (var i = 2; i < n; i++)
        if (isPrim[i])
        // i 的倍数不可能是素数了
           for (var j = 2 * i; j < n; j += i)
                isPrim[j] = false;
    var count = 0;
    for (var i = 2; i < n; i++)
        if (isPrim[i]) count++;
    return count;
};