/*88. 合并两个有序数组*/

/*给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
*/

/*方法1 ，最容易想到的一个*/
var merge = function(nums1, m, nums2, n) {
    for(var i = m,j = 0;i < nums1.length;i ++,j ++){
        nums1[i] = nums2[j];
    }
    nums1 = nums1.sort(function(a,b){
        return a - b;
    });
    return nums1;
};


/*方法2，没有使用多余的空间，数还是放在nums1*/
var merge = function(nums1, m, nums2, n) {
    var p1 = m - 1;
    var p2 = n - 1;
    var p = m + n - 1;
    while(p1 >= 0 && p2 >= 0){
        nums1[p --] = (nums1[p1] > nums2[p2]) ? nums1[p1 --] : nums2[p2 --];      
    }
    while(p2 >= 0){
        nums1[p --] = nums2[p2 --];
    }
};