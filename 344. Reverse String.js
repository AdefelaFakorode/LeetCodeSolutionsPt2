/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    /*
    ds: two ptrs

    left ptr = 0
    right ptr = s.length - 1

    while right is > left
        let temp = s[right]
        s[right] = s[left]
        s[left] = temp

        right--
        left+ 

    return s

    time comp: O(n) -> time depedent on the size of s...
    space comp: O(1) -> no additional space was allocated...
    */

    let left= 0
    let right = s.length - 1

    while(right > left){
        let temp = s[right]
        s[right] = s[left]
        s[left] = temp

        right--
        left++
    }

    return s
};