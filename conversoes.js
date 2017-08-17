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
        if (resultado == 0){
            binario[i] = 0;
        }else{
            binario[i] = 1;
        }
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

function OctalDec(number){    
    var number = document.getElementById('entradaDados').value;
    var result = 0;
    
    for (var i =0; i < number.length;i++){
        result += Math.pow(8,(number.length-1)-i) * number[i];
    }
    return result;
    
}

function DecOctal (number){
    var numero = parseInt(number);
    var binario = [];
    var resultado = number;
    var i = 0;
    var final1 = '';
    
    if (resultado <= 7){
        return resultado;
    }
    while(resultado > 8){
      binario[i] = parseInt(Math.trunc(resultado%8));
      resultado = Math.trunc(resultado / 8);  
      i++;     
   
    }
    
    if (resultado == 8){
        binario[i] = 0;
        binario[i+1] = 1;
    }else{
        binario[i] = resultado;
    }
        
    var final1='';
    for (var k = binario.length; k > 0 ; k--){
        final1 = final1+binario[k-1];
    }
    
    return final1;
}

function DecHexa (number){
    var numero = parseInt(number);
    var binario = [];
    var resultado = number;
    var i = 0;
    var final1 = '';
    
    
       if (resultado <= 15){
        return convertHexa(resultado);
        } else {
    
    
    while(resultado > 16){
      binario[i] = parseInt(Math.trunc(resultado%16));
      resultado = Math.trunc(resultado / 16);  
      i++;     
   
    }
    
    if (resultado == 16){
        binario[i] = 0;
        binario[i+1] = 1;
    }else{
        binario[i] = resultado;
    }
        
    var final1='';
    for (var k = binario.length; k > 0 ; k--){
        final1 = final1+convertHexa(binario[k-1]);
    }
    
    return final1;
        }
}


function HexaDec(number){    
    var number = document.getElementById('entradaDados').value;
    var result = 0;
    
    for (var i =0; i < number.length;i++){
        result += Math.pow(16,(number.length-1)-i) * convertHexaToDec(number[i].toUpperCase());
    }
    return result;
    
}



function convertHexa (number){
    number = parseInt(number);
    if (number <= 9 ){
        return number;
    }else{
    switch (number){
        case 10:
            return "A";
        case 11:
            return "B";
        case 12:
            return "C";
        case 13:
            return "D";
        case 14:
            return "E";
        case 15:
            return "F";
      }   
    }
}
    
function convertHexaToDec (number){

    switch (number){
        case 'A':
            return 10;
        case 'B':
            return 11;
        case 'C':
            return 12;
        case 'D':
            return 13;
        case 'E':
            return 14;
        case 'F':
            return 15;
        default:
            return parseInt(number);
            
      }  
    
    
    }





