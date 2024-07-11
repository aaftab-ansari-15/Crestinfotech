function genratePattern(){
    var alphabet, ascDefVal, pattern, counter;
    var number = document.getElementById('numberInput').value;
    //p-1
    ascDefVal = 65;
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=0; j<=i; j++){  
            alphabet = String.fromCharCode(ascDefVal+j);          
            pattern += `${alphabet}`; 
        }
        pattern += "\n"; 
    }    
    document.getElementById('p1').innerText = pattern;
    //p-2
    ascDefVal = 65;
    pattern = "";
    for(var i=0; i<number; i++){      
        alphabet = String.fromCharCode(ascDefVal+i);          
        for(var j=0; j<=i; j++){            
            pattern += `${alphabet}`;       
        }
        pattern += "\n"; 
    }    
    document.getElementById('p2').innerText = pattern;
    //p-3
    ascDefVal = 65;
    counter = 0;
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=0; j<=i; j++){    
            alphabet = String.fromCharCode(ascDefVal+counter);          
            pattern += `${alphabet}`;         
            counter++;
        }
        pattern += "\n"; 
    }    
    document.getElementById('p3').innerText = pattern;
    //p-4
    ascDefVal = 65;
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>i; j--){   
            alphabet = String.fromCharCode(ascDefVal+(number- j));          
            pattern += `${alphabet}`;          
        }
        pattern += "\n";
    }
    document.getElementById('p4').innerText = pattern;
    //p-5
    ascDefVal = 65;
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>i; j--){  
            alphabet = String.fromCharCode(ascDefVal+(j-1));          
            pattern += `${alphabet}`;           
        }
        pattern += "\n";
    }
    document.getElementById('p5').innerText = pattern;
    //p-6
    ascDefVal = 65;
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>i; j--){  
            alphabet = String.fromCharCode(ascDefVal+(j-1-i));          
            pattern += `${alphabet}`;           
        }
        pattern += "\n";
    }
    document.getElementById('p6').innerText = pattern;
    //p-7
    ascDefVal = 65;
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=1; j<=number-i; j++){            
            pattern += " "; 
        }
        for(var j=0; j<=i; j++){      
            alphabet = String.fromCharCode(ascDefVal+j);          
            pattern += `${alphabet}`;       
        }
        for(var k=j; k<i+j; k++){
            alphabet = String.fromCharCode(ascDefVal+k);          
            pattern += `${alphabet}`; 
        }
        pattern += "\n";
    }
    document.getElementById('p7').innerText = pattern;
    //p-8
    ascDefVal = 65;
    counter = 0;
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=1; j<=number-i; j++){            
            pattern += " "; 
        }
        for(var j=0; j<=i; j++){    
            alphabet = String.fromCharCode(ascDefVal+counter);          
            pattern += `${alphabet}`;         
            counter++;
        }
        for(var j=0; j<i; j++){  
            alphabet = String.fromCharCode(ascDefVal+counter);          
            pattern += `${alphabet}`;  
            counter++;         
        }
        pattern += "\n";
    }
    document.getElementById('p8').innerText = pattern;
}