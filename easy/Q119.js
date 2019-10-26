/*119. 杨辉三角 II*/

/*给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。*/

var getRow = function(rowIndex) {
   var res = [];
    for(let i = 1; i <= rowIndex + 1; i ++){
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
    return res[rowIndex]; 
};