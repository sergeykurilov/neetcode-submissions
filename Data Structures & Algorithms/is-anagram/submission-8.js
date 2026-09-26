class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const obj = {};
        const obj2 = {};

        const arrayS = s.split('');
        const arrayT = t.split('');
    
        for(let i in arrayS) {
            obj[arrayS[i]] = (obj[arrayS[i]] || 0) + 1;
            obj2[arrayT[i]] = (obj2[arrayT[i]] || 0) + 1;
        }
    
        for(let c in obj) {
            if(obj[c] !== (obj2[c] || 0)) {
                return false;
            }
        }

        return true;
    }
}
