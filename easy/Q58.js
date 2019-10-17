/*58. 最后一个单词的长度*/

/*给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:

输入: "Hello World"
输出: 5*/

/*方法一*/
var lengthOfLastWord = function(s) {var lengthOfLastWord = function(s) {
    s = s.replace(/ *?$/g,'');//去掉行尾的空格的正则表达式
    var x = s.split(" ");
    if(x.length == 0){
        return 0;
    }else{
        var y = x[x.length-1].split('');
        return y.length;
    }
};

/*方法二*/
var lengthOfLastWord = function(s) {
    var end = s.length - 1;
    //去空格
    while(end >= 0 && s[end] == " ")
        end --;
    //没有单词
    if(end < 0)
        return 0;
    var start = end;
    //遇到空格则是另一个单词了
    while(start >= 0 && s[start] != " ")
        start --;
    return end - start;
};