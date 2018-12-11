/**
 * 堆排序(改进的选择排序) 最坏的情况:O(n^lg2N)
 * @param  {Array} arr 待排序的数组
 * @return {Array}     排序后的数组
 */
function heapSort(arr) {
    var size = -1,
        tmp;
    //无序序列建堆(从倒数第二层最后一个节点开始，一直往上建堆)
    for (var i = ((arr.length / 2) >> 0) - 1; i >= 0; i--) {
        _heap(arr, i, arr.length);
    }
    //排序
    for (var i = 1, len = arr.length; i < len; i++) {
        size = arr.length - i;
        //更换堆中最大的节点和最小的节点
        tmp = arr[0];
        arr[0] = arr[size];
        arr[size] = tmp;
        //重新建堆
        _heap(arr, 0, size);
    }
    return arr;
}
//建堆
function _heap(arr, start, size) {
    while (start < size) {
        var left = (start + 1) * 2 - 1,
            max = start,
            tmp;
        if (left + 1 < size && arr[left] < arr[left + 1]) { //父节点需要和右字节交换
            if (arr[start] < arr[left + 1]) {
                max = left + 1;
            }
        } else if (left < size && arr[start] < arr[left]) { //父节点需要和左子节点交换
            max = left;
        }
        if (max != start) { //需要调整
            tmp = arr[start];
            arr[start] = arr[max];
            arr[max] = tmp;
            start = max;
        } else { //不需要调整
            start = size;
        }
    }
}