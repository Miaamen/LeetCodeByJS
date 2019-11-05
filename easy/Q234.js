/*234. 回文链表*/

/*请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？*/

var isPalindrome = function(head) {
    var arr = [];
    var i = 0;
    while(head != null){
        arr[i] = head.val;
        i ++;
        head = head.next;
    }
    for(var j = 0; j < arr.length / 2; j ++){
        if(arr[j] != arr[arr.length - 1 - j]){
            return false;
        }
    }
    return true;
};

/*快慢指针实现中间取点，后面反转再比较两段，O(1)*/
var isPalindrome = function(head) {
    if(head === null || head.next === null)
        return true;
    //快慢指针，fast走两步，slow走一步，fast到最后，slow就在中间
    var fast = head;
    var slow = head;
    while(fast != null){
        fast = fast.next ? fast.next.next : fast.next;
        slow = slow.next;
    }
    var pre = null;
    while(slow != null){
        var next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;
    }
    while(head != null && pre != null){
        if(head.val !== pre.val)
            return false;
        head = head.next;
        pre = pre.next;
    }
    return true;
};