/*144. 二叉树的前序遍历*/

/*给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/*方法一：递归，顺序是根->左节点->右节点*/
var preorderTraversal = function(root) {
    var res = [];
    if(root === null){
        return res;
    }
    res = search(root,res);
    return res;
};

var search = function(root,res){
    res.push(root.val);
    if(root.left !== null){
        search(root.left,res);
    }
    if(root.right !== null){
        search(root.right,res);
    }
    return res;
}

/*方法二：迭代，用一个辅助栈，因为先进(push)的后出(pop)，所以先放右节点，再放左节点*/
var preorderTraversal = function(root) {
    var res = [];
    var stack = [];
    if(root === null){
        return res;
    }
    stack.push(root);
    while(stack.length !== 0){
        let temp = stack.pop();
        res.push(temp.val);
        if(temp.right !== null){
            stack.push(temp.right);
        }
        if(temp.left !== null){
            stack.push(temp.left);
        }
    }
    return res;
};
