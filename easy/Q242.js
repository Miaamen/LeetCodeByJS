/*242. 有效的字母异位词*/

/*给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
*/

var isAnagram = function(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    if(s === t)
        return true;
    else
        return false;
};

var isAnagram = function(s, t) {
    var map = new Map();
    for(let i = 0; i < s.length; i ++){
        //先看看map里是不是已经加入一样的字母
        let getMap = map.get(s[i]);
        if(!getMap){
            map.set(s[i] , 1);
        }else{
            map.set(s[i],getMap + 1);
        }
    }
    for(let i = 0; i < t.length; i ++){
        let getMap = map.get(t[i]);
        if(getMap === 1){
            map.delete(t[i]);
        }else if(getMap){
            map.set(t[i],getMap - 1);
        }else{
            map.set(t[i] , 1);
        }
    }
    
    if(map.size){
        return false;
    }else{
        return true;
    }
};
