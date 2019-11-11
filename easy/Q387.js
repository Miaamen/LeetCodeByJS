/*387. 字符串中的第一个唯一字符*/

/*给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
*/

var firstUniqChar = function(s) {
    var map = new Map();
    for(var i = 0; i < s.length; i ++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i]) + 1);
        }else{
            map.set(s[i],1);
        }
    }
    for(let i = 0; i < s.length; i ++){
        if(map.get(s[i]) === 1)
            return i;
    }
    return -1;
};