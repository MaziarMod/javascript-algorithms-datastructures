/*
Write a function called collectStrings which accepts an object and
returns an array of all the values in the object that have a typeof string
 */

function collectStrings(obj, strArray = []) {
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            strArray = strArray.concat(collectStrings(value));
        } else if (typeof value === 'string') {
            strArray.push(value);
        }
    }
    return strArray;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])