/**
 * 希尔排序(改进的插入排序) O(n^1.5)
 * @param  {Array} arr 待排序的数组
 * @return {Array}     排序后的数组
 */
function shellSort(arr) {
    var gap = (arr.length / 2) >> 0,
        tmp;
    while (gap > 0) {
        for (var i = 0, len1 = arr.length - gap; i < len1; i++) {
            var insertIndex = i + gap;
            while (insertIndex > 0 && arr[insertIndex] < arr[insertIndex - gap]) {
                tmp = arr[insertIndex];
                arr[insertIndex] = arr[insertIndex - 1];
                arr[insertIndex - 1] = tmp;
                insertIndex -= gap;
            }
        }
        gap = (gap / 2) >> 0;
    }
    return arr;
}