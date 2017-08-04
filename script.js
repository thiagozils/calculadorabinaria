function DecBin(){
    var number = document.getElementById('decimal').value;
    var numero = parseInt(number);
    var binario = [];
    var resultado = number;
    var i = 0;
    var final = '';
    
    while(resultado > 2){
      binario[i] = parseInt(Math.trunc(resultado%2));
      resultado = Math.trunc(resultado / 2);  
      i++;     
   
    }
    
    if (resultado == 2){
        binario[i] = 0;
        binario[i+1] = 1;
    }else{
        binario[i] = 1;
    }
        
    var final='';
    for (var k = binario.length; k > 0 ; k--){
        final = final+binario[k-1];
    }
    
    
    
    document.getElementById('binario').value = final;
}

function BinDec(){    
    var number = document.getElementById('binario').value;
    var result = 0;
    
    for (var i =0; i < number.length;i++){
        result += Math.pow(2,(number.length-1)-i) * number[i];
    }
    document.getElementById('decimal').value = result;
    
}