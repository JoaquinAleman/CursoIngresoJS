/*Divicion X
Joaquin Aleman
Ejercicio 9 */
function mostrar()
{	// declarar variablesss
	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta=`s`;
	//iniciar variables
		
		numeroIngresado= parseInt(prompt("Ingrese un numero"));

		while(isNaN(numeroIngresado) == true){
		numeroIngresado= parseInt(prompt("Por favor Ingrese un numero")); 
		//respuesta= prompt("¿Ingrese otro numero?s/n");//probar sacando esto
		}	
	 	numeroMaximo= numeroIngresado;
	 	numeroMinimo= numeroIngresado;

		while(respuesta == `s`){
		numeroIngresado= parseInt(prompt("Ingrese un numero"));
        if(numeroIngresado > numeroMaximo){
        	numeroMaximo= numeroIngresado;
        }
        else if(numeroIngresado<numeroMinimo){
        	numeroMinimo=numeroIngresado;
        }
	
	respuesta= prompt("Desea continuar ingresando numeros? s/n");
    	 
    }

	document.getElementById("txtIdMaximo").value= numeroMaximo;
	document.getElementById("txtIdMinimo").value= numeroMinimo;
	
}//FIN DE LA FUNCIÓN