//后序遍历二叉树
! function() {
    var result = [];

    function postOrder(root) {
        var stack = [];
        stack.push(root);
        while (stack.length) {
            var node = stack.pop();
            //左右子节点已处理完，当前节点不再入栈
            if ((!node.left || result.indexOf(node.left) > -1) &&
                (!node.right || result.indexOf(node.right) > -1)) {
                result.push(node);
            } else {
                stack.push(node); //当前节点再入栈
                node.right && stack.push(node.right); //右子节点入栈
                node.left && stack.push(node.left); //左字节点入栈
            }
        }
        return result.map(function(item) { return item.data });
    }

    window.postOrder = postOrder;
}()