countDuplicateValues([1,2,1,2,3,2,2,1,4,1]);
function countDuplicateValues(arr){
    var count = 0;
    var duplicateArray = [];
    for (n= 0; n<arr.length; n++){
        for(i=n+1; i<arr.length; i++){
            if (arr[n]==arr[i] && !duplicateArray.includes(arr[n])){
                duplicateArray.push(arr[n]);
                count++;
                break;
            }
        }
    }
    console.log('Count of duplicate values: ' + count);
}