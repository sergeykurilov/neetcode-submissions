class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const counter = {};

        for(let num of nums) {
            counter[num] = (counter[num] || 0) + 1
        }

        return Object.values(counter).some(num => num > 1);
    }
}
