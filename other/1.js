//给定一个数组，从中选取n个数，使其相加的和为sum
//算法复杂度: O(2^n)
!function(){

    function pick(arr, n, sum) {
        var result = [];

        function _pick(s, index ,num) {
            //最多选取n个元素
            if(index >= arr.length || num >= n) {
                return false;
            }
            //有正解
            if(s+arr[index] == sum) {
                result.push(arr[index]);
                return true;
            }
            //需要下标为index的元素
            var bool = _pick(s+arr[index], index+1, num+1);
            if(bool) {
                result.unshift(arr[index]);
                return result;
            }
            //不需要下标为index的元素
            return _pick(s, index+1, num);
        }

        _pick(0, 0, 0);

        return result;
    }

    window.pick = pick;
}()