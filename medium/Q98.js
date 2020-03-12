/*98. 验证二叉搜索树*/

/*给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
*/


//中序遍历
//二叉树的中序遍历结果会是有序的，判断是否有序->验证是否有效二叉树
var isValidBST = function(root) {
    var res = dfs(root);
    for(let i = 0; i < res.length - 1; i ++){
       if(res[i] >= res[i + 1]) return false;
    }
    return true;
};


var dfs = function(root){
    var result = [];
    function pushRoot(root){
        if(root != null){
            if(root.left != null){
                pushRoot(root.left);
            }
            result.push(root.val);
            if(root.right !=null){
                pushRoot(root.right);
            }
        }
    }
    pushRoot(root);
    return result;
}
