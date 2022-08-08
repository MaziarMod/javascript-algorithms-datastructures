// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}


const bubbleSort = (arr) => {
    let noSwaps;
    for(let i = arr.length-1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8,5,10,113,120]));