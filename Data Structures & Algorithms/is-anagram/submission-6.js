class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let counter = {};
        let counter2 = {};

        for(let item of s) {
            counter[item] = (counter[item] || 0) + 1;
        }

        for(let item of t) {
            counter2[item] = (counter2[item] || 0) + 1;
        }

        if(s.length !== t.length) return false;


        for(const key in counter) {
            if(!(key in counter2)) {
                return false;
            }

            if(counter[key] !== counter2[key]) {
                return false;
            }
        }

        return true;
    }
}
