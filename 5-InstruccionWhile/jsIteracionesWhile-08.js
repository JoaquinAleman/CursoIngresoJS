/*Divicion X
Joaquin Aleman
Ejercicio 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	let acumulador=1;
	let acumulador2=0;
	let numero=0;
	let eleccion;
	
	while(eleccion != "No" && eleccion != "no"){
		numero= parseFloat(prompt("ingrese el numero"));
		if (numero >= 0){
			acumulador2 = acumulador2 + numero;
		}
		else{
			acumulador = acumulador * numero;
		}

	eleccion= prompt("Quiere seguir? Responde si o no");
	
	document.getElementById("txtIdSuma").value= acumulador2;
	document.getElementById("txtIdProducto").value= acumulador;
	}
}//FIN DE LA FUNCIÓN