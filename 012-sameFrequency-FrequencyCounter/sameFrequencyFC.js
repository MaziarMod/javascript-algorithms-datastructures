/*
 Write a function called sameFrequency.
 Given two positive integers, find out if the two numbers have the same frequency of digits.
 Your solution MUST have the following complexities: Time: O(N)
 Sample Input:
       sameFrequency(182,281) // true
       sameFrequency(34,14) // false
       sameFrequency(3589578, 5879385) // true
       sameFrequency(22,222) // false
 */

function sameFrequency(intNum1, intNum2){
    strNum1 = intNum1.toString();
    strNum2 = intNum2.toString();

    if (strNum1.length !== strNum2.length) return false;

    let objNum1 = mapDigits(strNum1);
    let objNum2 = mapDigits(strNum2);

    for (let key in objNum1) {
        if (objNum1[key] !== objNum2[key]) {
            return false;
        }
    }
    return true;
}

const mapDigits = str => {
    let objNum = {};
    for (let i=0; i < str.length; i++) {
        objNum[str[i]] = objNum[str[i]] + 1 || 1;
    }
    return objNum;
}

console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false