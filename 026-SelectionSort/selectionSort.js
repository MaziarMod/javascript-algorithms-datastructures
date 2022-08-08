function selectionSort(arr) {
    let lowestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowestIndex]) {
                lowestIndex = j;
            }
        }
        if (i !== lowestIndex) {
            [arr[i], arr[lowestIndex]] = [arr[lowestIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
console.log(selectionSort([34, 22, 10, 19, 17]));
