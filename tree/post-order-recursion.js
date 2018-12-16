//后序遍历二叉树
! function() {
    var result = [];

    function postOrderRec(root) {
        root.left && postOrderRec(root.left);
        root.right && postOrderRec(root.right);
        result.push(root.data);
        return result;
    }

    window.postOrderRec = postOrderRec;
}()