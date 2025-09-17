/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    /*
time comp: O(n)
space comp: O(1)

    */

    let set = new Set(arr)
    let count = 0

    for (const num of arr) {

        if (set.has(num + 1)) {
            count++
        }
    }

    return count
};