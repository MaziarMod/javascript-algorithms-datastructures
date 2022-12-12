const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}

function pivot(arr, startIndex = 0, endIndex = arr.length -1) {
    let pivot = arr[startIndex];
    let swapIndex = startIndex;
    for(let i=startIndex + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, startIndex, swapIndex);
    return swapIndex;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));