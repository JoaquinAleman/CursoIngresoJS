/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no*/
function mostrar()
{	
	let numero;
	let numeroPrimo;
	let i;
	let contadorDeDivisores;

	numero=parseInt(prompt("Ingrese un numero"));

	for (i = 1; i <= numero ; i++) {

		if(numero%i == 0){

		contadorDeDivisores++;
		}
    }

	    if(contadorDeDivisores != 0 || contadorDeDivisores != 1){
			alert("No es numero primo "+numeroPrimo);
		}
		else{
			alert("Es numero primo "+numeroPrimo);
		}
	
}//FIN DE LA FUNCIÓN