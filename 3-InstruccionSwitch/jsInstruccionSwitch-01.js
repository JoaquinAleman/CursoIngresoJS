/*Divicion X
Joaquin Aleman
Ejercicio Switch 1 */
function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;
     /* estructura de switch*/
   switch (mes){
   	case "Enero":
   		alert("que comiences bien el año!!!:");
   		break;
    case "Marzo":
   		alert("a clases!!!.");
   		break;
   	case "Julio":
   		alert("se vienen las vacaciones!!!.");
   		break;
   	case "Diciembre":
   		alert("Felices fiesta!!!.");
   		break;	
   	/*default:
   		bloque de codigo;
   		break;*/
   }

}//FIN DE LA FUNCIÓN