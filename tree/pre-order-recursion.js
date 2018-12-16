//前序递归遍历二叉树
! function() {
    var result = [];

    function preOrderRec(root) {
        result.push(root.data);
        root.left && preOrderRec(root.left);
        root.right && preOrderRec(root.right);
        return result;
    }

    window.preOrderRec = preOrderRec;
}()