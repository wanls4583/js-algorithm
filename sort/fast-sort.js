/**
 * 快速排序(改进的冒泡排序) 平均:O(n*lg2N),最坏:O(n^2)
 * @param  {Array} arr 待排序的数组
 * @return {Array}     排序后的数组
 */
function fastSort(arr) {
    var first = 0,
        last = arr.length - 1;
    _fast(arr, first, last);
    return arr;
}

function _fast(arr, first, last) {
    var low = first;
    var high = last;
    var mid = ((first + last) / 2) >> 0;
    var midData = arr[mid];
    while (low < high) {
        for (var i = low; i < mid; i++) {
            if (arr[i] > midData) {
                arr[mid] = arr[i];
                mid = i;
                break;
            }
        }
        low = i;
        for (var i = high; i > mid; i--) {
            if (arr[i] < midData) {
                arr[mid] = arr[i];
                mid = i;
                break;
            }
        }
        high = i;
    }
    arr[mid] = midData;
    if (mid > first) {
        _fast(arr, first, mid);
    }
    if (mid + 1 < last) {
        _fast(arr, mid + 1, last);
    }
}