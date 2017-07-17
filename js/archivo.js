function indiceMasa(){

	var peso = parseInt(prompt("Indique su masa "));
	var estatura = parseInt(prompt("Indique su estatura en centimetros OJO CENTIMETROS"));
	var altura=estatura/100;


	var IMC =peso/Math.pow(altura,2);
	var rpta = IMC.toFixed(2);
	alert(rpta); 	

}
indiceMasa();