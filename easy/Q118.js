/*118. 杨辉三角*/

/*给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
*/

var generate = function(numRows) {
    var res = [];
    for(let i = 1; i <= numRows; i ++){
        let row = [];
        for(let j = 0; j < i; j ++){
            //第一个和最后一个是1
            if(j == 0 || j == i - 1){
                row.push(1);
            }else{//其他的是上一行的前一个和对应位置的一个
                row.push(res[i - 2][j - 1] + res[i - 2][j]);
            }
        }
        res.push(row);
    }
    return res;
};