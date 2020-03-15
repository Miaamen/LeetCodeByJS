/**/

/**/

/*方法一：递归*/
var postorderTraversal = function(root) {
    var res = [];
    if(root === null){
        return res;
    }
    res = search(root,res);
    return res;
};

var search = function(root,res){
    if(root.left !== null){
        search(root.left,res);
    }
    if(root.right !== null){
        search(root.right,res);
    }
    res.push(root.val);
    return res;
}

/*方法二：迭代。将左->右->根 反向看成 跟->右->左，即转换为先右再左的的前序遍历*/
var postorderTraversal = function(root) {
    var res = [];
    var stack = [];
    if(root === null){
        return res;
    }
    stack.push(root);
    while(stack.length !== 0){
        let temp = stack.pop();
        res.push(temp.val);
        if(temp.left !== null){
            stack.push(temp.left);
        }
        if(temp.right !== null){
            stack.push(temp.right);
        }
    }
    return res.reverse();
};
