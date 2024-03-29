/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true
    areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
    Time - O(n)
    Space - O(n)

Bonus:
    Time - O(n log n)
    Space - O(1)
 */

function areThereDuplicates() {
    let collection = {};
    for (let arg in arguments) {
        collection[arguments[arg]] = collection[arguments[arg]] + 1 || 1;
    }

    for (let key in collection) {
      if (collection[key] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true