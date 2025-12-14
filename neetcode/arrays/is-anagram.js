/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s == t;
};

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let tArr = new Array(26).fill(0)
    let sArr = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++){
        let sCharIdx = Math.abs(s[i].charCodeAt(0) - 97)
        let tCharIdx = Math.abs(t[i].charCodeAt(0) - 97)
        tArr[tCharIdx] = tArr[tCharIdx] + 1
        sArr[sCharIdx] = sArr[sCharIdx] + 1
    }
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] != tArr[i]){
            return false
        }
    }
    return true;
};

