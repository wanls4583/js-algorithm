/**
 * 冒泡排序 O(n^2)
 * @param  {Array} arr 待排序的数组
 * @return {Array}     排序后的数组
 */
function bubbleSort(arr) {
    var first = 0,
        last = arr.length - 1,
        tmp;
    while (first < last) {
        for (var i = first, j = last, last = first; i < j; i++) { //从前往后冒泡
            if (arr[i] > arr[i + 1]) { //互换
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                last = i; //新的最大节点
            }
        }
        for (var i = last, first = last; i > 0; i--) { //从后往前冒泡
            if (arr[i] < arr[i - 1]) { //互换
                tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;
                first = i; //新的最小节点
            }
        }
    }
    return arr;
}