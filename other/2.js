/*问题描述：在一个n*n个格子里，n个皇后不在同一列，也不在同一行，并且不在同一斜线。问有多少种摆法？*/
!function(){
	var count = 1;
	var NUM = 0;
	var result = [];
	//检查第n个皇后的位置是否合法
	function check(n) {
		for(var i=1; i<n; i++) {
			if(result[i-1] == result[n-1] || Math.abs(n-i) == Math.abs(result[n-1] - result[i-1])) {
				return true;
			}
		}
	}
	function put(n) {
		if(n == 1) {
			result = [];
		}
		for(var i=1; i<=NUM; i++) {
			result[n-1] = i;
			if(!check(n)) {
				if(n == NUM) { //n个皇后放置完整
					console.log('第'+count+'个解:\n',result);
					count++;
				} else { //放置下一行
					put(n+1);
				}
			}
		}
	}
	function queen(n) {
		NUM = n;
		put(1);
	}

	window.queen = queen;
}()