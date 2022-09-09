/*Divicion X
Joaquin Aleman
Ejercicio IF-3 */
function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18){
     
    alert("es mayor de edad");
    }


    if (edad <= 17){ 
		
	//tomo la edad  
	alert("es menor de edad");
	}

	alert("fin del proceso");

}//FIN DE LA FUNCIÓN