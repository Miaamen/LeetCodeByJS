/*168. Excel表列名称*/

/*给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
示例 1:

输入: 1
输出: "A"
*/

var convertToTitle = function(n) {
    const map = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
    let res = "";
    while(n){
        res += map[n % 26];
        n = n % 26 === 0 ? Math.floor(n / 26) - 1: Math.floor(n / 26);
    }
    return res.split('').reverse().join('');
};