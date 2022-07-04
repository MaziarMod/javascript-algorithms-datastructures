// Before refactoring

// function same(arr1,arr2){

//     var flag = false;

//     if (arr1.length !== arr2.length){
//         return false;
//     }

//     for(var i=0; i<arr1.length; i++){
//         for (var j=0; j<arr2.length; j++){
//             if (arr1[i] * arr1[i] === arr2[j]){
//                 flag = true;
//                 arr2.splice(j,1);
//                 break;
//             } else {
//                 flag = false;
//             }
//         }

//         if (!flag){
//             return false;
//         }
//     }
//  return true;
// }

// After Refactoring
function same(arr1,arr2){

    var flag = false;

    if (arr1.length !== arr2.length){
        return false;
    }

    for(var i=0; i<arr1.length; i++){
        flag = false;
        for (var j=0; j<arr2.length; j++){
            if (arr1[i] ** 2  === arr2[j]){
                flag = true;
                arr2.splice(j,1);
                break;
            }
        }

        if (!flag){
            return false;
        }
    }
    return true;
}
console.log(same([1,2,3],[1,4,9])); // true
console.log(same([1,2,3],[1,9])); // false
console.log(same([1,2,1],[4,4,1])); // false