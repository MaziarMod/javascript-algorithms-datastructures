/*
Write a function called stringifyNumbers which takes in an object and
finds all the values which are numbers and converts them to strings.
Recursion would be a great way to solve this!

 */

function stringifyNumbers (obj) {
   for (let [key, value] of Object.entries(obj)) {
       if (typeof value === 'object') {
           obj[key] = stringifyNumbers(value);
       } else if (typeof value === 'number') {
           obj[key] = value.toString();
       }
   }
   return obj;
}

let obj = {
    num: 1,
    test: [1,2,"test"],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
OUTPUT:
{
    num: '1',
    test: ['1', '2', 'test'],
    data: {
        val: '4',
        info: {
            isRight: true,
            random: '66'
        }
    }
}
 */
