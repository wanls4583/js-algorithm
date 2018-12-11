/**
 * 希尔排序
 * @param  {Array} arr 待排序的二维关系数组[[a,b],[c,d]]
 * @return {Array}     排序后的数组
 */
function topologySort(arr) {
    var result = [];
    var nodesObj = _toNode(arr);
    nodes = nodesObj.nodes;
    while(true) {
        var flag = false;
        for(var i=0,len = nodes.length; i<len; i++) {
            //没有前件
            if(nodes[i].preLink.length == 0) {
                flag = true;
                result.push(nodes[i].data);
                //找到当前节点所有的后件
                for(var j = 0,len1 = nodes[i].nextLink.length; j<len1; j++) {
                    var node = nodesObj.get(nodesObj.find(nodes[i].nextLink[j]));
                    var tmp = node.preLink.indexOf(nodes[i].data);
                    //删除前件
                    node.preLink.splice(tmp,1);
                }
                //删除该节点
                nodes.splice(i,1);
                break;
            }
        }
        if(!flag) {
            break;
        }
    }
    return result;

    //将前后件转换成独立的节点
    function _toNode(arr) {
        var nodesObj = new Node();
        for(var i=0; i<arr.length; i++) {
            var tmp = arr[i];
            var preIndex = nodesObj.find(tmp[0]);
            var nextIndex = nodesObj.find(tmp[1]);
            if(preIndex > -1) {
                nodesObj.get(preIndex).nextLink.push(tmp[1]);
            } else {
                nodesObj.push(tmp[0]).nextLink.push(tmp[1]);
            }
            if(nextIndex > -1) {
                nodesObj.get(nextIndex).preLink.push(tmp[0]);
            } else {
                nodesObj.push(tmp[1]).preLink.push(tmp[0]);
            }
        }
        return nodesObj;
    }

    //节点类
    function Node(){
        this.nodes = [];
        this.find = function(data) {
            for(var i=0; i<this.nodes.length; i++) {
                if(this.nodes[i].data == data) {
                    return i;
                }
            }
            return -1;
        }
        this.push = function(data) {
            var obj = {
                data: data,
                preLink: [], //节点的所有后件
                nextLink: [] //节点的所有前件
            };
            this.nodes.push(obj);
            return obj;
        }
        this.get = function(index) {
            return this.nodes[index];
        }
    }
    return result;
}