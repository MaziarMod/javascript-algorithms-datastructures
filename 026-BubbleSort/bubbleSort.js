// ES5
// function swap(arr, idx1, idx2) {
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}


const bubbleSort = (arr) => {
    for(let i = arr.length-1; i >= 0; i--) {
        for (let j = 0; j <= i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([10,5,-3,113, 6,120, 70,2]));