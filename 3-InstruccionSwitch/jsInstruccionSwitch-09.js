/*Divicion X
Joaquin Aleman
Ejercicio Switch 9 */
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioFinal;
	let aumento= 0;
	let descuento= 0;
	const TARIFA = 15000;
	

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (estacionIngresada){
		case"Invierno":
			if(destinoIngresado == "Bariloche"){
			   aumento = 20;
			}
			else if(destinoIngresado == "Mar del plata"){
			descuento = 20;
		    }
		    else{
              descuento = 10;
		    }
		    break;

		
            case"Verano":
			if(destinoIngresado == "Bariloche"){
			   descuento = 20;
			}
			else if(destinoIngresado == "Mar del plata"){
				aumento = 20;
			}
			else{
              aumento = 10;
			}
		    break;
		    case "Otoño":
		    case"Primavera":
			if(destinoIngresado!= "Cordoba"){
				aumento = 10;
			}
		    break;
			}
    if(aumento!= 0){
    	precioFinal = TARIFA + TARIFA * aumento / 100;
    }
    else if (descuento!= 0){
    	precioFinal = TARIFA - TARIFA * descuento / 100;
    }
    else{
    	precioFinal = TARIFA;
    }
    
    alert("el precio final es " + precioFinal);

}//FIN DE LA FUNCIÓN
/* case"ArgentinaLuz": 
    case"FelipeLamparas":
    case "JeLuz":
    case "HazIluminacion":         
    case "Osram":*/