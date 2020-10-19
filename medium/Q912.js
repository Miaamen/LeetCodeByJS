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

//方法三：插入排序 --- 抽出一张往前面有序的地方插入
var sortArray = function(nums) {
    //插入排序 --- 抽出一张往前面有序的地方插入
    insertSort(nums);
    return nums;
};

var insertSort = function(arr){
    for(let i = 0; i < arr.length; i ++){
        let temp = arr[i];
        //把i左边的排好序，前面都是有序数列,大于前一个数肯定比前面所有数都大,否则的话把这个数拿出来也就是赋值给temp
        let j = i - 1;
        while(j >= 0 && arr[j] > temp){
            //依次与前面的数比较,如果比前一个数小就让前一个数往后挪一位直到找到比temp小的位置放进去
            arr[j + 1] = arr[j];
            j --;
        }
        arr[j + 1] = temp;
    }
}

// 方法四：桶排序
var sortArray = function(nums) {
    let arr = new Array(100000).fill(0)
    nums.forEach(val => {
        arr[50000 + val] ++;
    })
    nums = []
    arr.forEach((val, index) => {
        if(val) {
            for(let i = 0; i < val; i ++) {
                nums.push(index - 50000);
            }
        }
    })
    return nums
};
