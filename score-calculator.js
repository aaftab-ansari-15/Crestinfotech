function getAllInputs(n){
    const number = n;
    var htmlContent= `<form>`;
    for(var i=1; i<=number; i++){
        htmlContent += `
            <div class="form-group mb-3">
                <label class="" for="input${i}">Enter input${i}:</label>
                <input type="number" class="col-4" id="input${i}" name="input${i}">
            </div>
    `;  
             
    } 
    htmlContent += `<button type="button" onclick="totalScoreFunc(${n})" class="col-1 btn border border-dark">click</button>
        </form>`;
    document.getElementById('allInputs').innerHTML = htmlContent;
}
function totalScoreFunc(n){
    var totalScore = 0;
    for (var i=1; i<=n; i++){
        const n = document.getElementById(`input${i}`).value;
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
    document.getElementById('answer').innerHTML = 'Total Score: '+totalScore;

}
