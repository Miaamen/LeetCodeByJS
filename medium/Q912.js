/*912. 排序数组*/

/*给定一个整数数组 nums，将该数组升序排列。
示例 1：

输入：[5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：[5,1,1,2,0,0]
输出：[0,0,1,1,2,5]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

//方法一：使用sort()
var sortArray = function(nums) {
    nums = nums.sort((a,b) => a - b);
    return nums;
};

//方法二：选择排序 --- 不断地选择剩余元素中最小的那个
var sortArray = function(nums) {
    selecSort(nums);
    return nums;
};

var selecSort = function(nums){
    //min为最小的那个数的索引
    var min;
    //从第一个数开始，arr[min]不断挪到前面
    for(let i = 0; i < nums.length; i ++){
        min = i;
        //找出最小的数
        for(let j = i; j < nums.length; j ++){
            if(nums[min] > nums[j]){
                min = j;
            }
        }

        if(min != i){
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
}
