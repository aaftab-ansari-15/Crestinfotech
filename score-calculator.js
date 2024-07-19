totalScoreFunc([0,3,5]);
function totalScoreFunc(inpArr){
    var totalScore = 0;
    for (n of inpArr){
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
    console.log('total score: '+ totalScore);
}
