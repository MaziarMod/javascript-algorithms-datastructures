function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let mostDigits = mostDigits(nums);
    let buckets = [];
    for (let k = 0; k < mostDigits; k++) {
        for (let i = 0; i <= 9; i++) {
            if (getDigit(nums[k], k) === i) {
                buckets[i].push(nums[k]);
            }
        }
    }
}