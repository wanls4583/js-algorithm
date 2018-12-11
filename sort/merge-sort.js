/**
 * 归并排序 O(n^lg2N)
 * @param  {Array} arr 待排序的数组
 * @return {Array}     排序后的数组
 */
function mergeSort(arr) {
    var gap = 1,
        result = arr,
        length = arr.length;
    while (gap <= length) {
        arr = result;
        result = [];
        for (var i = 0; i < length - gap; i += gap * 2) {
            //两两合并
            _merge(arr, i, i + gap - 1, i + gap, i + gap * 2 - 1, result);
        }
        while (i < length) { //最后一个未能配对的项直接添加到尾部
            result.push(arr[i]);
            i++;
        }
        gap = gap * 2;
    }
    return result;
}
//合并
function _merge(arr, start, end, start2, end2, result) {
    var count = start,
        end2 = end2 >= arr.length ? arr.length - 1 : end2;
    for (var i = start, j = start2; i <= end && j <= end2;) {
        if (arr[i] < arr[j]) {
            result[count++] = arr[i];
            i++;
        } else {
            result[count++] = arr[j];
            j++;
        }
    }
    if (i <= end) {
        for (var m = i; m <= end; m++) {
            result[count++] = arr[m];
        }
    } else if (j <= end2) {
        for (var m = j; m <= end2; m++) {
            result[count++] = arr[m];
        }
    }
}