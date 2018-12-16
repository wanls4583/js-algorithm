//中序遍历二叉树 
! function() {
    var result = [];

    function midOrderRec(root) {
        root.left && midOrderRec(root.left);
        result.push(root.data);
        root.right && midOrderRec(root.right);
        return result;
    }

    window.midOrderRec = midOrderRec;
}()