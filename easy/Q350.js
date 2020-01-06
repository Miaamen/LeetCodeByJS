/*350. 两个数组的交集 II*/

/*给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

//暴力
var intersect = function(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  var res = [];
  for(let i = 0, j = 0;i < nums1.length && j < nums2.length;) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      res.push(nums1[i]);
      i++;
      j++;
    }
  }
  return res;
};
