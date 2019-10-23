/*104. 二叉树的最大深度*/

/*给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7*/

/*方法一，递归*/
var maxDepth = function(root) {
    if(root == null){
        return 0;
    }else{
        return root = Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
    }
};

/*方法二，用栈压，看有没有子代进行迭代*/
var maxDepth = function(root) {
    //没有节点即0
    if(root == null)
        return 0;
    var num = 0;
    //将root节点放入栈
    var arr = [root];
    while(arr.length){
        let a = [];
        while(arr.length){
            let curr = arr.shift();
            if(curr.left){
                a.push(curr.left);
            }
            if(curr.right){
                a.push(curr.right);
            }
        }
        num ++;
        arr = a;
    }
    return arr.length;
};