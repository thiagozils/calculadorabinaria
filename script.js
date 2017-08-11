window.onload = function() {
	clearDiv();
};

var entradaEscolhida =0;

function DecBin(){
    var number = document.getElementById('entradaDados').value;
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

function BinDec(){    
    var number = document.getElementById('entradaDados').value;
    var result = 0;
    
    for (var i =0; i < number.length;i++){
        result += Math.pow(2,(number.length-1)-i) * number[i];
    }
    return result;
    
}

function chooseDecimal (){
	document.getElementById("tipoDe").innerHTML  = "Decimal:";
	entradaEscolhida = 1;
	clearDiv();
		
}

function chooseBinario (){
	document.getElementById("tipoDe").innerHTML  = "Binário:";	
	entradaEscolhida = 2;
	clearDiv();
	
}
function chooseOctal (){
	document.getElementById("tipoDe").innerHTML  = "Octal:";	
	entradaEscolhida = 3;
	clearDiv();
	
}
function chooseHexa (){
	document.getElementById("tipoDe").innerHTML  = "Hexadecimal:";
	entradaEscolhida = 4;
	clearDiv();
	
}

function converter(){
	if (entradaEscolhida == 0){
		alert("Escolha o tipo de entrada");
	}else{
		document.getElementById("convertido").style.display = 'block';
		switch (entradaEscolhida){
			case 1:
			document.getElementById("para1").innerHTML  = "Binário:";
			document.getElementById("input1").value = DecBin();
			
			document.getElementById("para2").innerHTML  = "Octal:";
			document.getElementById("input2").value = 0;
			
			document.getElementById("para3").innerHTML  = "Hexadecimal:";
			document.getElementById("input3").value = 0;
			
			
			break;
			case 2:
			document.getElementById("para1").innerHTML  = "Decimal:";
			document.getElementById("input1").value = BinDec();
		}
	}
	
	
	}
function clearDiv(){
	document.getElementById("convertido").style.display = 'none';
}




