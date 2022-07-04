function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

t1 = performance.now();
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));  // 19
t2 = performance.now();
console.log(`time of the function is : ${(t2 - t1)/1000} seconds.`);

