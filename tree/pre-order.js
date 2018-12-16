//前序遍历二叉树
! function() {
    var result = [];

    function preOrder(root) {
        var stack = [];
        stack.push(root);
        while (stack.length) {
            //取出队列第一个
            var tmp = stack.pop();
            result.push(tmp.data);
            //先右字节点入栈
            tmp.right && stack.push(tmp.right);
            //左子节点入栈
            tmp.left && stack.push(tmp.left);
        }
        return result;
    }

    window.preOrder = preOrder;
}()