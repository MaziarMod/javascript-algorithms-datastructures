function maxSubarraySum(arr, n){
    //define max variable
    let max = 0;
    let sum = 0;
    if (arr.length === 0){
        return null;
    }
    //go through the array
    for(let i=0; i< arr.length-n; i++){
        // read n elements form array each time
        for(let j=i; j<i+n; j++){
            // calulate sum of all n elements
            sum += arr[j];
        }

        // each time check the sum of n previous elements with max variable
        if (max < sum){
            // put sum of n elements in max variable
            max = sum;
        }
        sum=0;
    }

    return max;
}

t1 = performance.now();

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
console.log(maxSubarraySum([],2)); //null

t2 = performance.now();
console.log(`time of the function is : ${(t2 - t1)/1000} seconds.`);