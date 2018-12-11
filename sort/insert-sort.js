/**
 * 插入排序 O(n^2)
 * @param  {Array} arr 待排序的数组
 * @return {Array}     排序后的数组
 */
function insertSort(arr) {
    var tmp;
    for (var i = 0, len1 = arr.length - 1; i < len1; i++) {
        var insertIndex = i+1;
        while(insertIndex >0 && arr[insertIndex] < arr[insertIndex-1]) {
            tmp = arr[insertIndex];
            arr[insertIndex] = arr[insertIndex-1];
            arr[insertIndex - 1] = tmp;
            insertIndex--;
        }
    }
    return arr;
}