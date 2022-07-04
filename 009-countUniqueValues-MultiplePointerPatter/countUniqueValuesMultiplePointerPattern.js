function countUniqueValues(sortedArr){

    if (!sortedArr.length ) {
        return 0;
    }

    const lookup = {};

    for (let i = 0; i < sortedArr.length; i++) {
        let element = sortedArr[i];
        lookup[element] ? lookup[element] += 1 : lookup[element] = 1;
    }

    console.log(lookup)


    return Object.keys(lookup).length;
}

t1 = performance.now();

console.log(countUniqueValues([1,1,1,1,2,2]));

t2 = performance.now();
console.log(`time of the function is : ${(t2 - t1)/1000} seconds.`);