/*

Write a recursive function called capitalizeWords.
Given an array of words, return a new array containing each word capitalized.

 */

function capitalizeWords(strArray) {
    if (strArray.length === 1) return [strArray[0].toUpperCase()];

    let capitlizedArray = capitalizeWords(strArray.slice(0,-1));
    capitlizedArray.push(strArray.slice(-1)[0].toUpperCase());

    return capitlizedArray;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']