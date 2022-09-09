/*Divicion X
Joaquin Aleman
Ejercicio 7 
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promediocoregir*/
function mostrar()
{   let contador= 0;
	let acumulador= 0;
	let numero;
	let resp;
	let promedio;

	do{
		numero= parseInt(prompt("Ingrese un numero"));
		acumulador= acumulador + numero;
		contador= contador + 1;
		resp= prompt("ingresa otro numero? s/n");
		}while(resp== `s`);

	promedio= acumulador / contador;
   	document.getElementById("txtIdSuma").value= acumulador;
   	document.getElementById("txtIdPromedio").value= promedio;

}//FIN DE LA FUNCIÓN