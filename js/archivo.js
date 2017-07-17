function indiceMasa(){
	var peso = parseInt(prompt("indique su masa "));
	var estatura = parseInt(prompt("indique su estatura en centimetros OJO CENTIMETROS"));
	var altura=estatura/100;


	var IM =peso/Math.pow(altura,2);
	var rpta = IM.toFixed(2);
	alert(rpta); 
	
}
indiceMasa();