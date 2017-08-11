function DecBin(number){
    var numero = parseInt(number);
    var binario = [];
    var resultado = number;
    var i = 0;
    var final1 = '';
    
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
        
    var final1='';
    for (var k = binario.length; k > 0 ; k--){
        final1 = final1+binario[k-1];
    }
    
    return final1;
}

function BinDec(number){    
    var number = document.getElementById('entradaDados').value;
    var result = 0;
    
    for (var i =0; i < number.length;i++){
        result += Math.pow(2,(number.length-1)-i) * number[i];
    }
    return result;
    
}