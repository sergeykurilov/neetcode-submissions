class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const values = new Set

        for(let n of nums) {
            if(values.has(n)) {
                return true;
            }
            values.add(n);
        }

        return false;
    }
}
