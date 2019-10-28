/*160. 相交链表*/

/*编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：

8
[4,1,8,4,5]
[0,1,8,4,5]
2
2

在节点 8 开始相交。*/

/*方法一，打标记*/
var getIntersectionNode = function(headA, headB) {
    while(headA){
        headA.sep = 1;
        headA = headA.next;
    }
    while(headB){
        if(headB.sep) return headB
        headB = headB.next;
    }
};

/*形成环链，快慢指针总会相遇*/
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null){
        return null;
    }
    var pA = headA,pB = headB;
    while(pA != pB){
        pA = pA == null ?headB : pA.next;
        pB = pB == null ?headA : pB.next;
    }
    return pA;
};