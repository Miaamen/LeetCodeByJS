// 中序遍历 --- 递归实现
var inorderTraversal = function(root) {
    let result = []
    function handle(root) {
        if(root !== null) {
            // 先左再中最后右
            if(root.left !== null) {
                handle(root.left)
            }
            result.push(root.val)
            if(root.right !== null) {
                handle(root.right)
            }
        }
    }
    handle(root)
    return result
};
// 中序遍历 --- 迭代实现
var inorderTraversal = function(root) {
    let result = []
    // 借助栈实现
    let stack = [];
    while (stack.length > 0 || root !== null) {
        if (root) {
            stack.push(root);
            root = root.left
        } else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
    return result;
}

// 前序遍历 --- 递归实现
var preorderTraversal = function(root) {
    let result = []
    function handle(root) {
        if(root) {
            result.push(root.val)
            if(root.left) {
                handle(root.left)
            }
            if(root.right) {
                handle(root.right)
            }
        }
        result.push()
    }
    handle(root)
    return result
};
// 前序遍历 --- 迭代实现
