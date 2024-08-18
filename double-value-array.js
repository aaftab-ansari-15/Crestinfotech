doubleValues([1,2,3,4,5,10,7]);
function doubleValues(arr){
    const doubleValuedArray = arr.map( x => x*2);
    console.log('Double valued array: ' + doubleValuedArray);
}