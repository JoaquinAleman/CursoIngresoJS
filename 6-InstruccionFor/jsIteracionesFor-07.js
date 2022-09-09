/* Divicion X
Joaquin Aleman
Ejercicio 7
mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	let numero;
	let contadorDeDivisores=0;
	let i;

	numero=parseInt(prompt("Ingrese un numero"));


	for (i = 1; i <= numero; i++) {
		if(numero%i == 0){

		alert[i]

		contadorDeDivisores++;
		}
	}

	alert("La cantidad de numeros divisores es "+ contadorDeDivisores);
}//FIN DE LA FUNCIÓN 