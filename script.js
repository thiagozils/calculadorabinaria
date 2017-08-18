window.onload = function() {
	clearDiv();
};

$(document).ready(function(){
    $('#entradaDados').focus(function(){    
        switch (entradaEscolhida){
			case 1:
                $('#entradaDados').mask('0#');
                break;
			case 2:
                $('#entradaDados').mask('0000000000000000000000000000000000000000000', {'translation': {0: {pattern: /[0-1]/}}});
                break;
            case 3:
               $('#entradaDados').mask('00000000000000000000000000000000000000000000', {'translation': {0: {pattern: /[0-7]/}}});
                break;
            case 4:
                $('#entradaDados').mask('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', {translation: {"F": {pattern:/[0-9a-fA-F]/}}});
             break;
		}
    });
});
   

function clearDiv(){
	document.getElementById("convertido").style.display = 'none';
}

var entradaEscolhida =0;

function chooseDecimal (){
    $('#entradaDados').unmask();
    document.getElementById('entradaDados').value = '';
	document.getElementById("tipoDe").innerHTML  = "Decimal:";
	entradaEscolhida = 1;
	clearDiv();
		
}
function chooseBinario (){
    $('#entradaDados').unmask();
    document.getElementById('entradaDados').value = '';
	document.getElementById("tipoDe").innerHTML  = "Binário:";	
	entradaEscolhida = 2;
	clearDiv();
	
}
function chooseOctal (){
    $('#entradaDados').unmask();
    document.getElementById('entradaDados').value = '';
	document.getElementById("tipoDe").innerHTML  = "Octal:";	
	entradaEscolhida = 3;
	clearDiv();
	
}
function chooseHexa (){
    $('#entradaDados').unmask();
    document.getElementById('entradaDados').value = '';
	document.getElementById("tipoDe").innerHTML  = "Hexadecimal:";
	entradaEscolhida = 4;
	clearDiv();
	
}

function converter(){
	if (entradaEscolhida == 0){
		alert("Escolha o tipo de entrada");
	}else{
        var number = document.getElementById('entradaDados').value;
        if (number == ''){
            alert('Digite o valor a ser convertido:')
        }else{
            document.getElementById("convertido").style.display = 'block';
            switch (entradaEscolhida){
                case 1:
                    document.getElementById("para1").innerHTML  = "Binário:";
                    document.getElementById("input1").value = DecBin(number);
                    document.getElementById("para2").innerHTML  = "Octal:";
                    document.getElementById("input2").value = DecOctal(number);
                    document.getElementById("para3").innerHTML  = "Hexadecimal:";
                    document.getElementById("input3").value = DecHexa(number);
                    break;
                case 2:
                    document.getElementById("para1").innerHTML  = "Decimal:";
                    document.getElementById("input1").value = BinDec(number);
                    document.getElementById("para2").innerHTML  = "Octal:";
                    document.getElementById("input2").value = DecOctal(BinDec(number));
                    document.getElementById("para3").innerHTML  = "Hexadecimal:";
                    document.getElementById("input3").value = DecHexa(BinDec(number));
                    break;
                case 3:
                    document.getElementById("para1").innerHTML  = "Decimal:";
                    document.getElementById("input1").value = OctalDec(number);   
                    document.getElementById("para2").innerHTML  = "Binário:";
                    document.getElementById("input2").value = DecBin(OctalDec(number));
                     document.getElementById("para3").innerHTML  = "Hexadecimal:";
                    document.getElementById("input3").value = DecHexa(OctalDec(number));
                    break;
                case 4:
                    document.getElementById("para1").innerHTML  = "Decimal:";
                    document.getElementById("input1").value = HexaDec(number);   
                    document.getElementById("para2").innerHTML  = "Binário:";
                    document.getElementById("input2").value = DecBin(HexaDec(number));
                    document.getElementById("para3").innerHTML  = "Octal:";
                    document.getElementById("input3").value = DecOctal(HexaDec(number));
                    break;
            }
        }
	}
	
	
	}







