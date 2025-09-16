/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    /*
    ds: two ptrs

    init left, right ptrs
    left = 0
    right = nums.length - 1

    let arr = []

    left2 = Math.pow(nums[left],2)
    right2 = Math.pow(nums[right],2)

    while(left <= right)
    if(left2 < right2){
        arr.push(left2)
        left++
    }
    else{
        arr.push(right2)
        right---
    }

    ans = arr.sort(a,b) =>{
        a - b
    }

    return ans

     [16,1,0,9,100]

    time comp: O(n)
    space comp: O(n)

    */

    let left = 0
    let right = nums.length - 1
    let arr = []

    while (left <= right) {
        const left2 = Math.pow(nums[left], 2)
        const right2 = Math.pow(nums[right], 2)

        if (left2 > right2) {
            arr.push(left2)
            left++
        }
        else {
            arr.push(right2)
            right--
        }
    }

    return arr.reverse()

};