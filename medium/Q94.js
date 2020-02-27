/*94. 二叉树的中序遍历*/

/*给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
*/

var inorderTraversal = function(root) {
    var res = [], stack = [];
    while(root || stack.length) {
        if(root.left) {
            stack.push(root);
            root = root.left;
        }else if(!root.left && !root.right) {
            res.push(root.val);
            root = stack.pop();
            root && (root.left = null)
        }else if(root.right) {
            res.push(root.val)
            root = root.right
        }
    }
    return res;
};
