/*Divicion X
Joaquin Aleman
Ejercicio Switch 8 */
function mostrar()
{
	let destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
	    case("Bariloche"):
    	case("Ushuaia"):
    		alert("aca hace frio.");
    		break;
    	case("Cataratas"):
    	case("Mar del plata"):
    		alert("aca hace calor.");
    		break;
    }
	
}//FIN DE LA FUNCIÓN