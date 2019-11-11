/*389. 找不同*/

/*给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

 

示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
*/

/*方法一，在t中删除s有的*/
var findTheDifference = function(s, t) {
    for(let item of s){
        t = t.replace(item, '')
    }
    return t;
};

/*方法二，算ASCII码*/
var findTheDifference = function(s, t) {
    var sSum = 0,tSum = 0;
    for(var i = 0; i < s.length;i ++){
        sSum += s[i].charCodeAt();
    }
    for(var j = 0; j < t.length;j ++){
        tSum += t[j].charCodeAt();
    }
    var lastSum = tSum - sSum;
    return String.fromCharCode(lastSum);
};

/*方法三，将s里的所有加进map，再查看tmap里有什么是map没有的*/
var findTheDifference = function(s, t) {
    var map = new Map();
    for(let i = 0; i < s.length; i ++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i]) + 1);
        }else{
            map.set(s[i],1);
        }
    }
    for(let i = 0; i < t.length; i ++){
        if(!map.has(t[i])){
            return t[i];
        }else if(map.get(t[i]) < 1){
            return t[i];
        }else{
            map.set(t[i],map.get(t[i]) - 1);
        }
    }
    return null;
};
