/*
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

function capitalizeFirst(strArry) {
     if (strArry.length === 1) {
          return [strArry[0][0].toUpperCase() + strArry[0].slice(1)];
     }
     
     const capitalized = capitalizeFirst(strArry.slice(0, -1)); //1. [car, taco] 2.[car] 3.[]
     
     const string = strArry.slice(-1)[0][0].toUpperCase() + strArry.slice(-1)[0].slice(1);
     capitalized.push(string);
     
     return capitalized;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
