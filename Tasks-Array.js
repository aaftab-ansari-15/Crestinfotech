const data = [
    {id: 1, name: 'chrome'},
    {id: 2, name: 'safari'},
    {id: 3, name: 'edge'},
    {id: 4, name: 'opera'},
    {id: 5, name: 'tor'}
];

const updateArray = (id, newName) =>{
    console.log('hi');
    var counter =0;
    var printUpdataedArray = '[';
    const newData = [{id: id, name: newName}];
    const updatedArray = data.map(x=>{   
        
        if (x.id == id && x.name != newName){
            counter = 1;
            return newData[0];  
        } 
        return x;
    }); 
    if (counter == 0 && id != 0 && newName != 0){
        updatedArray.push(...newData);
    }
    for (const x of updatedArray){
        printUpdataedArray += `{id: ${x.id}, name: ${x.name}},\n`;
    }
    printUpdataedArray += ']'
    document.getElementById('p1').innerText = printUpdataedArray;
}