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
    let stack = []
    while (stack.length > 0 || root !== null) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }
    return result
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
}

// 前序遍历 --- 迭代实现
var preorderTraversal = function(root) {
    let result = []
    let stack = []
    if (root) stack.push(root)  // 先root.val
    while (stack.length) {
        root = stack.pop()
        result.push(root.val)
        root.right && stack.push(root.right)
        root.left && stack.push(root.left)
    }
    return result
}

// 后序遍历 --- 递归实现
var postorderTraversal = function(root) {
    let result = []
    function handle(root){
        if(root) {
            if(root.left !== null) {
                handle(root.left)
            }
            if(root.right !== null) {
                handle(root.right)
            }
            result.push(root.val)
        }
    }
    handle(root)
    return result
}

// 后序遍历 --- 迭代实现
var postorderTraversal = function(root) {
    let result = []
    let stack = []

    if(root) {
        stack.push(root)
    }
    while(stack.length > 0) {
        let node = stack.pop()
        result.unshift(node.val)
        if(node.left !== null) {
            stack.push(node.left)
        }
        if(node.right !== null) {
            stack.push(node.right)
        }
    }
    return result
}
