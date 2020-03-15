/*59. 螺旋矩阵 II*/

/*给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

var generateMatrix = function(n) {
    var left = 0, right = n - 1, top = 0 , bottom = n - 1;
    var res = [];
    for (let i = 0; i < n; i++){
        res[i] = [];
    }
    var num = 1,lastNum = n * n;
    while(num <= lastNum){
        for(let i = left; i <= right; i ++){
            res[top][i] = num ++;
        }
        top ++;
        for(let i = top; i <= bottom; i ++){
            res[i][right] = num ++;
        }
        right --;
        for(let i = right; i >= left; i --){
            res[bottom][i] = num ++;
        }
        bottom --;
        for(let i = bottom; i >= top; i --){
            res[i][left] = num ++;
        }
        left ++;
    }
    return res;
};
