/*15. 三数之和*/

/*给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/


var threeSum = function(nums) {
	var res = [];
    const len = nums.length;
    //如果长度小于3或者没有，则没得排序
    if(nums == null || len < 3){
        return res;
    }
    //对原数组排序
    nums.sort((a,b) => a - b);
    for(let i = 0; i < len; i ++){
        //因为排序了，所以i这个位置是结果的第一个数，当他大于0，则后面的一定大于0，相加也不会是0
        if(nums[i] > 0){
            break;
        }   
        //当前一个i和现在i一样，就会重复，要去重，直接跳过
        if(i > 0 && nums[i] == nums[i --]){
            continue;
        }
        let L = i + 1;
        let R = len - 1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                res.push([nums[i],nums[L],nums[R]]);
                while(L < R && nums[L] == nums[L + 1]) L ++; //去重
                while(L < R && nums[R] == nums[R + 1]) R --; //去重
                L ++;
                R --;
            }
            else if(sum < 0)
                L ++;
            else if(sum > 0)
                R --;
        }
    }
    return res;
};
