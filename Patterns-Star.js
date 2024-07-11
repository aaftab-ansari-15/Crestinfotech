function genratePattern(){
    var pattern;
    var number = document.getElementById('numberInput').value;
    //p-1
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=0; j<number; j++){            
            pattern += "*"; 
        }
        pattern += "\n"; 
    }
    document.getElementById('p1').innerText = pattern;
    //p-2
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=0; j<=i; j++){            
            pattern += "*"; 
        }
        pattern += "\n"; 
    }    
    document.getElementById('p2').innerText = pattern;
    //p-3
    pattern = '';
    for(var i=0; i<number; i++){            
        for(var j=1; j<number-i; j++){            
            pattern += ' '; 
        }
        for(var k=0; k<=i; k++){            
            pattern += '*'; 
        }
        pattern += '\n'; 
    }
    document.getElementById('p3').innerText = pattern;
    //p-4
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>i; j--){            
            pattern += "*"; 
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
            pattern += "*"; 
        }
        for(var j=0; j<i; j++){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    document.getElementById('p5').innerText = pattern;
    //p-6
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>=number-i; j--){            
            pattern += " "; 
        }
        for(var j=0; j<number-i; j++){            
            pattern += "*"; 
        }
        for(var j=1; j<number-i; j++){            
            pattern += "*"; 
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
            pattern += "*"; 
        }
        for(var j=0; j<i; j++){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    for(var i=1; i<number; i++){            
        for(var j=number; j>=number-i; j--){            
            pattern += " "; 
        }
        for(var j=0; j<number-i; j++){            
            pattern += "*"; 
        }
        for(var j=1; j<number-i; j++){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    document.getElementById('p7').innerText = pattern;
    //p-8
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>=number-i; j--){            
            pattern += " "; 
        }
        for(var j=0; j<number-i; j++){            
            pattern += "*"; 
        }
        for(var j=1; j<number-i; j++){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    for(var i=1; i<number; i++){            
        for(var j=1; j<=number-i; j++){            
            pattern += " "; 
        }   
        for(var j=0; j<=i; j++){            
            pattern += "*"; 
        }
        for(var j=0; j<i; j++){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    document.getElementById('p8').innerText = pattern;
    //p-9
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=number; j>=number-i; j--){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    for(var i=1; i<number; i++){            
        for(var j=1; j<=number-i; j++){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    document.getElementById('p9').innerText = pattern;
    //p-10
    pattern = "";
    for(var i=0; i<number; i++){            
        for(var j=0; j<number-i; j++){            
            pattern += " "; 
        }
        for (var j=number; j>=number-i; j--){
            pattern += "*"; 
        }
        pattern += "\n";
    }
    for(var i=1; i<number; i++){  
        for(var j=0; j<=i; j++){            
            pattern += " "; 
        }          
        for(var j=1; j<=number-i; j++){            
            pattern += "*"; 
        }
        pattern += "\n";
    }
    document.getElementById('p10').innerText = pattern;
}
