/*110. 平衡二叉树*/

/*给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。
*/

var isBalanced = function(root) {
    return balance(root) != -1;
};

var balance = function(root){
    if(root == null){
        return 0;
    }
    var left = balance(root.left);
    if(left == -1)
        return -1;
    var right = balance(root.right);
    if(right == -1)
        return -1;
    if(Math.abs(left - right) > 1)
        return -1;
    return ((left > right) ? left : right) + 1;
}