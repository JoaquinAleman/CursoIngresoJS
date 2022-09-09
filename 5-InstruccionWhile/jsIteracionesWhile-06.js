/*enpezar este ya entregue el 5 falta de aca para adelante
/*Divicion X
Joaquin Aleman
Ejercicio 6 */
function mostrar()
{
	let promedio;
	let acumulador= 0;
	let numeroIngresado;
	let i=0;
	 
	 while(i<5){
	 	numeroIngresado= parseInt(prompt("Ingrese un numero"));
		acumulador= acumulador + numeroIngresado;
		i= i + 1;
		}	
	promedio= acumulador / 5;
	
	
	document.getElementById("txtIdSuma").value= acumulador;
	document.getElementById("txtIdPromedio").value= promedio;
}//FIN DE LA FUNCIÓN