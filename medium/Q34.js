/*34. 在排序数组中查找元素的第一个和最后一个位置*/

/*给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
*/

//用JavaScript现成的API写的
var searchRange = function(nums, target) {
    var res = [];
    while(nums.indexOf(target) != -1){
        let temp = nums.indexOf(target)
        res.push(temp);
        nums.splice(temp,1,target-1);
    }
    const start = res[0], end = res[res.length - 1];
    if(start != undefined && end != undefined){
        return [start,end];
    }else{
        return [-1,-1];
    }
}

//二分1
var searchRange = function(nums, target) {
    if (nums.length === 0){
        return [-1,-1];
    }
    if (nums.length === 1){
        return nums[0] === target ? [0,0] : [-1,-1];
    }
    let start = 0, end = nums.length - 1, mid = 0;
    while (start <= end) {
        mid = Math.ceil((start + end) / 2);
        //如果一分为二发现中间有target，则向两边搜索
        if (nums[mid] === target) {
            start = end = mid;
            while (nums[start] === target) {
                start--;
            }
            while (nums[end] === target) {
                end++;
            }
            return [start+1, end-1]
        };
        //找不到了
        if (start === end) return [-1, -1];
        //再切
        if (nums[mid] > target){
            end = mid -1;
        }else{
            start = mid;
        }
    }
    return [-1, -1]
}

//二分2 --- 超时
var searchRange = function(nums, target) {
    if(nums.length === 0){
        return [-1,-1];
    }
    var left = 0,right = nums.length;
    var res = [];
    while(left < right){
        let mid=(left + right) >> 1;
        if(nums[mid] === target)
            right = mid;
        else if(nums[mid] < target)
            left = mid + 1;
        else if(nums[mid] > target)
            righ = mid;
    }
    if(left === nums.length)
        return [-1,-1];
    if(nums[left] === target)
        res.push(left);
    else
        return [-1,-1];
        
    left = 0,right = nums.length;
    while(left < right){
        let mid=(left + right) >> 1;
        if(nums[mid] === target)
            left=mid + 1;
        else if(nums[mid] < target)
            left = mid + 1;
        else if(nums[mid] > target)
            right = mid;
        else
            left = mid + 1;
    }
    if(nums[left - 1] === target)
        res.push(left-1);
    else
        return res;
    return res;
}
