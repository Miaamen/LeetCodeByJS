/*19. 删除链表的倒数第N个节点*/

/*给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
*/

var removeNthFromEnd = function(head, n) {
    var temp = head;
    var len = 0;
    while(temp != null){
        len ++;
        temp = temp.next;
    }
    var i = len - n - 1;
    var res = head;
    if(len === n){
        head = head.next;
        return head;
    }
    while(i > 0){
        res = res.next;
        i --;
    }
    res.next = res.next.next;
    return head;
};
