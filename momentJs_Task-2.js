function formateDate(){
    var dataInput = document.getElementById('dateInput').value;
    var date = moment().format(`${dataInput}`);
    console.log(date);
    document.getElementById('formatedDate').innerText = date;
}
function findDuration(){
    const date1 = moment(document.getElementById('dateInput1').value);
    const date2 = moment(document.getElementById('dateInput2').value);
    console.log(date1, date2);  
    if (!date1.isValid() || !date2.isValid()) {
        alert('Please enter valid dates.');
        return;
      }
    const duration = moment.duration(date2.diff(date1));
    const years = duration.years();
      const months = duration.months();
      const days = duration.days();
    document.getElementById('result').innerHTML = `<ul>
          <li>Years: ${years}</li>
          <li>Months: ${months}</li>
          <li>Days: ${days}</li>
        </ul>`;
}