function getYear(){
    var year = document.getElementById('yearInput').value;
    var leapYear = moment([year]).isLeapYear();
    if (leapYear){
        document.getElementById('leapYear').innerText = year +' is leap-year';
        console.log(year, 'is leap year');
    }
    else{
        document.getElementById('leapYear').innerText = year +' is not leap-year';
        console.log(year, 'is not leap year');
    }
}
