function insertionSort(arr) {
    let j = 0; //we need j outside of the loop so that it is defined as a global variable
    for (let i = 1; i < arr.length ; i++) {
        let current = arr[i];
        for(j = i-1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = current;
    }
    return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]));
console.log(insertionSort([34, 22, 10, 19, 17]));