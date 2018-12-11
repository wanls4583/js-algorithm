//给定一个数组，从中选取n个数，使其相加的和为sum
//算法复杂度: O(n^2)
function pick(arr, n, sum) {
    function _cal(arr) {
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
            num += arr[i];
        }
        return num;
    }
    /**
     * 从数组中递归选取元素
     * @param  {Array} resultArr 选取结果
     * @param  {Numbe} num       递归次数
     * @param  {Array} restArr   可选数组(避免重复选择)
     * @return {Array}           正解
     */
    function _pick(resultArr, num, restArr) {
        for (var i = 0; i < restArr.length - (n - num); i++) {
            var result = resultArr.concat(restArr[i]);
            if (num == n) {
            	//已经选取了n个元素，计算和
                if (_cal(result) == sum) {
                    return result;
                }
            } else {
            	//剩余的可选元素,防止回溯
            	var rest = restArr.slice(i + 1);
                result = _pick(result, num + 1, rest);
                if (result) {
                    return result;
                }
            }
        }
    }
    return _pick([], 1, arr);
}