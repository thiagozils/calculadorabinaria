function DecBin(){
    var number = document.getElementById('decimal').value;
    number = parseInt(number);
    document.getElementById('binario').value = number.toString(2)+"";
}

function BinDec(){    
    var number = document.getElementById('binario').value;
    number = parseInt(number,2);
    document.getElementById('decimal').value = number;
    
}