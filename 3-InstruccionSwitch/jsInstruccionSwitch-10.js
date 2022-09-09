/*Divicion X
Joaquin Aleman
Ejercicio Switch 10*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada= document.getElementById("txtIdEstacion").value;
	destinoIngresado= document.getElementById("txtIdDestino").value;

  		switch(estacionIngresada){
	    case"Invierno":
		 if(destinoIngresado=="Bariloche"){
			mensaje=" se viaja ";
		}
		 else{
			mensaje=" no se viaja";
		  }
			break;
			//hasta aca esta bien
		case "Verano":
		 if(destinoIngresado	==	"Mar del plata" ||	destinoIngresado == "Cataratas"){
		 	mensaje	=	" se viaja ";
		 }
		 else{
		 	mensaje= " no se viaja ";
		 }
		break;
		case"Primavera":
		 if(destinoIngresado != "Bariloche"){
		 		mensaje=" se viaja "
		 }
		 else{
		 		mensaje="	no se viaja"
	     }
		 break;
		case"Otoño":
			mensaje=" se viaja ";
		 break;
		}
 alert("En "+ estacionIngresada + mensaje + " a "+ destinoIngresado);

}//FIN DE LA FUNCIÓN