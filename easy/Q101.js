/*101. 对称二叉树*/

/*给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
/ \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3*/

var isSymmetric = function(root) {
    return isMirror(root,root);
};

var isMirror = function(left,right){
    if(left == null)
        return right == null;
    else if(right == null)
        return left == null;
    else if(left.val == right.val)
        return isMirror(left.left ,right.right) && isMirror(left.right , right.left);
    else
        return false;
}