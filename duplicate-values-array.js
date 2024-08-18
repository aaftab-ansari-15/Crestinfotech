const { duration } = require("moment");

duplicateValuesArr([1,2,3,2,3,2,2,1,4,1,4]);
function duplicateValuesArr(arr){
    var duplicateArray = [];
    for (n= 0; n<arr.length; n++){
        for(i=n+1; i<arr.length; i++){
            if (arr[n]==arr[i] && !duplicateArray.includes(arr[n])){
                // duplicateArray.push(arr[n]);
                insertInOrder(duplicateArray, arr[n]);
                break;
            }
        }
    }
    console.log('Duplicate values array: ' + duplicateArray);
}
function insertInOrder(arr, value) {
    let index = arr.findIndex(element => element > value);
    if (index === -1) {
        // If no element is greater, push the value at the end
        arr.push(value);
    } else {
        // Insert the value at the correct position
        arr.splice(index, 0, value);
    }
}