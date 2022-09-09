/* Divicion X
Joaquin Aleman
Ejercicio 6
 mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados. */
function mostrar()
{
	
	let numero;
	let contadorDePares=0;
	let i;

	  numero=parseInt(prompt("Ingrese un numero"));

	    for(i=1;i<numero;i++){
			if(i%2==0) {
			      alert(i);
		 
		     	contadorDePares++;	
			}
		
		}

       alert("La cantidad de numeros pares es "+ contadorDePares);

}//FIN DE LA FUNCIÓN