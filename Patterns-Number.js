function genratePattern(){
    var pattern, counter;
    var number = document.getElementById('numberInput').value;
    //p-1
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=0; j<=i; j++){            
            pattern += `${j+1}`; 
        }
        pattern += "\n"; 
    }    
    document.getElementById('p1').innerText = pattern;
    //p-2
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=0; j<=i; j++){            
            pattern += `${i+1}`; 
        }
        pattern += "\n"; 
    }    
    document.getElementById('p2').innerText = pattern;
    //p-3
    pattern = "";
    counter =1;
    for(var i=0; i<number; i++){            
        for(var j=0; j<=i; j++){            
            pattern += `${counter}`;
            counter++; 
        }
        pattern += "\n"; 
    }    
    document.getElementById('p3').innerText = pattern;
    //p-4
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>i; j--){            
            pattern += `${number-j+1}`; 
        }
        pattern += "\n";
    }
    document.getElementById('p4').innerText = pattern;
    //p-5
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=1; j<=number-i; j++){            
            pattern += " "; 
        }
        for(var j=0; j<=i; j++){            
            pattern += `${j+1}`; 
        }
        for(var k=j; k<i+j; k++){            
            pattern += `${k+1}`; 
        }
        pattern += "\n";
    }
    document.getElementById('p5').innerText = pattern;
    //p-6
    pattern = "";
    counter = 1;
    for(var i=0; i<number; i++){            
        for(var j=1; j<=number-i; j++){            
            pattern += " "; 
        }
        for(var j=0; j<=i; j++){            
            pattern += `${counter}`;
            counter++;
        }
        for(var j=0; j<i; j++){            
            pattern += `${counter}`; 
            counter++;

        }
        pattern += "\n";
    }
    document.getElementById('p6').innerText = pattern;
    //p-7
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=1; j<=number-i; j++){            
            pattern += " "; 
        }
        for(var j=0; j<=i; j++){            
            pattern += `${j+1}`; 
        }
        for(var k=j; k<i+j; k++){            
            pattern += `${k+1}`; 
        }
        pattern += "\n";
    }
    for(var i=1; i<number; i++){    
        counter = 1; 
        for(var j=number; j>=number-i; j--){            
            pattern += " "; 
        }
        for(var j=0; j<number-i; j++){            
            pattern += `${counter++}`; 
        }
        for(var j=1; j<number-i; j++){            
            pattern += `${counter++}`; 
        }
        pattern += "\n";
    }
    document.getElementById('p7').innerText = pattern;
}