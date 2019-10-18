/*83. 删除排序链表中的重复元素*/

/*给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3*/

var deleteDuplicates = function(head) {
    var res = head;
    if(head == null){
        return head;
    }
    while(res.next != null){
        if(res.val === res.next.val){
            res.next = res.next.next;
        }else{
            res = res.next;
        }
    }
    return head;
};