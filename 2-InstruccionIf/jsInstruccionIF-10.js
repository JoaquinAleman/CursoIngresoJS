/*Divicion X
Joaquin Aleman
Ejercicio IF-10 */
function mostrar()
{
	let numero;
	let maximo = 10;
	let minimo = 1;
	//Genero el número RANDOM entre 1 y 10 

	numero = Math.round(Math.random()*(maximo - minimo) + minimo );

	if(numero >= 9){
		alert(numero + " EXELENTE");
		}
		else if(numero >= 4){
			alert(numero + " APROBO");
		}
		else {
			alert(numero + " Vamos, la proxima se puede");
		}
	//Genero el número RANDOM entre 1 y 10 

}//FIN DE LA FUNCIÓN