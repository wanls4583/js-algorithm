//广度优先遍历
!function (){
	function bfs(root) {
		var stack = [root];
		var result = [];
		while(stack.length) {
			var node = stack.shift();
			result.push(node.data);
			node.left && stack.push(node.left);
			node.right && stack.push(node.right);
		}
		return result;
	}

	window.bfs = bfs;
}()