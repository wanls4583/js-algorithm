//中序遍历二叉树*
! function() {
    var result = [];

    function midOrder(root) {
        stack = [];
        stack.push(root);
        while (stack.length) {
            var node = stack.pop();
            if (!node.left || result.indexOf(node.left) > -1) { //左子节点已经处理完毕，当前节点不再入栈
                result.push(node);
            } else {
                node.right && stack.push(node.right); //右子节点入栈
                stack.push(node); //当前节点再入栈
                node.left && stack.push(node.left); //左子节点入栈
            }
        }
        return result.map(function(item) { return item.data });
    }

    window.midOrder = midOrder;
}()