// Before Refactoring

// function charCount(str){
//     //create obj
//     var result= {};
//     // go through the string with loop
//     for(var i=0; i< str.length; i++){
//         var char = str[i].toLowerCase();
//         // if char number/letter and is a key in the obj, add one to count
//         if (/[a-z0-9]/.test(char))
//             if (result[char] > 0){

//                 result[char]++;
//              }
//             // if char number/letter and is not a key in the obj, set value to count
//             else{
//                 result[char] = 1;
//             }
//     }
//     // return obj
//     return result;
// }

//After Refactoring 1

// function charCount(str){

//     var result= {};
//     for(var char of str) {

//         char = char.toLowerCase();

//         if (/[a-z0-9]/.test(char)){
//             result[char] = ++result[char] || 1;
//         }
//     }

//     return result;
// }

//After Refactoring 2

function charCount(str){

    var result= {};
    for(var char of str) {

        if (isAlphaNumeric(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

function isAlphaNumeric(char){

    var code = char.charCodeAt(0)
    if( !(code> 47 && code <58) && //numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) // lower alpha (a-z)
    {
        return false;
    }
    return true;
}


charCount("Hello Hi! there.");