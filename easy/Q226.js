/*226. 翻转二叉树*/

/*翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

var invertTree = function(root) {
    if(root == null){
        return root;
    }else{
        var tree = root.left;
        root.left = root.right;
        root.right = tree;
        root.left = invertTree(root.left);
        root.right = invertTree(root.right);
    }
    return root;
};