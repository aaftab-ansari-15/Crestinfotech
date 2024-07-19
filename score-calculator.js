let number = prompt('Enter total number of Input:');
let n = parseFloat(number);

console.log('hello',n);
getAllInputs(n);

function getAllInputs(n){
    const inpArr = [];
    for (var i=0; i<n; i++){
        let input = prompt(`Enter a input${i}:`);
        let inp = parseFloat(input);
        if (!isNaN(inp)) {
            inpArr.push(inp);
        } else {
            alert("Please enter a valid number.");
        }
    }
    totalScoreFunc(inpArr);
}
function totalScoreFunc(inpArr){
    var totalScore = 0;
    for (n in inpArr){
        console.log(n);
        if (n==5){
            totalScore += 5;
        }
        else if (n%2!=0){
            totalScore += 3;
        }
        else {
            totalScore += 1;
        }
    }
    console.log(totalScore);
}
