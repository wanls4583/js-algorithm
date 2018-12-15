/*问题描述：从n个人中选k个人当班委（不区分职务），一共有多少种选法？(类似于数学中的Cn^k)*/
!function(){
	function cnk(n,k) {
		if(n==k) {
			return	1;
		} else if(k == 1) {
			return n;
		}
		//如果选择了 n，则从其后 n-1 个中再选择 k-1 个，否则从其后n-1个中再选择 k 个
		return cnk(n-1,k-1) + cnk(n-1,k);
	}

	window.cnk = cnk;
}()