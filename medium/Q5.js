/*5. 最长回文子串*/

/*给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
*/

var longestPalindrome = function(s) {
    /*var res = "";
    var maxLen = 0;
    var len = s.length;
    for(let i = 0 ; i < len; i ++){
        for(let j = i + 1; j <= len; j ++){
            var temp = s.substring(i,j);
            if(isPalindromic(temp) && temp.length > maxLen){
                res = s.substring(i,j);
                maxLen = res.length;
            }
        }
    }
    return res;*/
    var len = s.length;
    if (len < 2) {
        return s;
    }

    var maxLen = 1;
    var res = s.substring(0, 1);
        
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (j - i + 1 > maxLen && isPalindromic(s, i, j)) {
                maxLen = j - i + 1;
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};

var isPalindromic = function(s,left,right){
    /*let len = s.length;
    for(let i = 0; i < len / 2; i ++){
        if(s[i] != s[len - i - 1]){
            return false;
        }
    }
     return true;*/
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/*
while 和 for之间，for太多了，超过时间限制了，所以改成while
 */
