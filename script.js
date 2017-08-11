window.onload = function() {
	clearDiv();
};

function clearDiv(){
	document.getElementById("convertido").style.display = 'none';
}

var entradaEscolhida =0;

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
        var number = document.getElementById('entradaDados').value;
		switch (entradaEscolhida){
			case 1:
			document.getElementById("para1").innerHTML  = "Binário:";
			document.getElementById("input1").value = DecBin(number);
			
			document.getElementById("para2").innerHTML  = "Octal:";
			document.getElementById("input2").value = 0;
			
			document.getElementById("para3").innerHTML  = "Hexadecimal:";
			document.getElementById("input3").value = 0;
			
			
			break;
			case 2:
			document.getElementById("para1").innerHTML  = "Decimal:";
			document.getElementById("input1").value = BinDec(number);
		}
	}
	
	
	}







