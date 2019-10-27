/*125. 验证回文串*/

/*给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false*/

var isPalindrome = function(s) {
    if(s.length === 0){
        return true;
    }
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    var len = s.length;
    for(var i = 0; i < len / 2; i ++){
        if(s[i] != s[len - 1 - i])
            return false;
    }
    return true;
};