/*
Write a function called collectStrings which accepts an object and
returns an array of all the values in the object that have a typeof string
 */

function collectStrings(obj) {
    let stringsArr = [];

    function gatherStrings(innerObj) {
        for(let key in innerObj) {
            if(typeof innerObj[key] === 'string') {
                stringsArr.push(innerObj[key]);
            }
            else if(typeof innerObj[key] === 'object') {
                return gatherStrings(innerObj[key]);
            }
        }
    }

    gatherStrings(obj);
    return stringsArr;
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