/*Divicion X
Joaquin Aleman
Ejercicio IF-8 */
function mostrar()
{

	let edad;
	let estadoCivil;

     edad = parseInt(document.getElementById("txtIdEdad").value);
     estadoCivil = document.getElementById("estadoCivil").value;
	
	if(edad >= 18 && estadoCivil == "Soltero"){
    //tomo la edad  
	alert("Es soltero y no es menor");
    }

}//FIN DE LA FUNCIÓN