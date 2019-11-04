/*206. 反转链表*/

/*反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL*/

/*方法一：用一个数组来反转再回存*/
var reverseList = function(head) {
    var arr = [];
    var i = 0;
    var res = head;
    var resu = head;
    while(res != null){
        arr[i] = res.val;
        res = res.next;
        i ++;
    }
    arr = arr.reverse();
    var j = 0;
    while(resu){
        resu.val = arr[j];
        resu = resu.next;
        j ++;
    }
    return head;
};

/*方法二：指针回调*/
var reverseList = function(head) {
	var pre = null;
    var cur = head;
    while(cur != null){
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};

/*方法三：方法二的递归函数*/
var reverseList = function(head) {
    return reverse(null , head);
};

var reverse = function(pre , cur){
    if(cur === null)
        return pre;
    var next = cur.next;
    cur.next = pre;
    return reverse(cur,next);
}