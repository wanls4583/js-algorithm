/**
 * 选择排序 O(n^2)
 * @param  {Array} arr 待排序的数组
 * @return {Array}     排序后的数组
 */
function selectSort(arr) {
    var min, tmp;
    for (var i = 0, len1 = arr.length - 1; i < len1; i++) { //进行length-1次选择
        min = i;
        for (var j = i + 1, len2 = arr.length; j < len2; j++) { //选择最小的一个节点
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i != min) { //将最小的节点与下标为i的节点交换
            tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}