/*Divicion X
Joaquin Aleman
Ejercicio 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
//corregir error
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un numero entre 0 y 10.");

	while(numeroIngresado <0 || numeroIngresado >9){
		numeroIngresado = prompt("ingrese un numero entre 0 y 10.");
	}
	document.getElementById("txtIdNumero").value= numeroIngresado;
}//FIN DE LA FUNCIÓN