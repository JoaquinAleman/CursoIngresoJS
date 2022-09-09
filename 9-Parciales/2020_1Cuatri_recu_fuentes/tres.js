/*ALEMAN JOAQUIN
DIVICION X
3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:

nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), temporada(“alta”,”baja”,“media”),
 cantidad de pasajeros que viajan.

informar:

a)el destino mas elegido.

b)el nombre del pasajero titular que lleva menos pasajeros.

c)el promedio de personas, que viajan en temporada alta.*/

function mostrar()
{
	
	let nombre;
	let destino;
	let temporada;
	let cantidadUnidades;
	let cantidadPersonas;
	let respuesta=`s`;
	let contBrasil= 0;
	let contCaribe= 0;
	let contEuropa= 0;
	let cantidadMin= 6;
	let nombreCantMin;
	let acumTemporadaAlta= 0;
	let contadorTempAlta= 0;
	let promedio;

	while(respuesta == `s`){

		nombre=prompt(" Ingrese su nombre");
		while(isNaN(nombre) == false)
		{
			nombre=prompt("Ingrese su nombre");
		}

		destino=prompt("ingrese un destino");
		while(destino != "brasil" && destino != "caribe" && destino !="europa")
		{
			destino=prompt(" Ingrese un destino valido Brasil/Caribe/Europa");
		}

		temporada=prompt("ingrese en la temporada que viaja");
		while(temporada != "alta" && temporada != "baja" && temporada !="media")
		{
			temporada=prompt(" Ingrese una temporada valida alta/baja/media");
		}

		cantidadUnidades=parseInt(prompt("Ingresar la cantidad personas que viajan"));
		while(isNaN(cantidadUnidades) == true || cantidadUnidades < 0 || cantidadUnidades > 6)
		{
			cantidadUnidades=parseInt(prompt("Ingrese una cantidad de personas entre 1 y 5"));
		}	

		//respuesta=prompt("desea seguir ingresando datos?s/n");
		
		//a)el destino mas elegido.
		switch(destino){
			case"brasil":
				contBrasil++;
			break;
			case"caribe":
				contCaribe++;
			break;
			case"europa":
				contEuropa++;
			break;		
		}
		//b)el nombre del pasajero titular que lleva menos pasajeros.
		if(cantidadUnidades<cantidadMin)
		{
			cantidadMin=cantidadUnidades;
			nombreCantMin=nombre;
		}

	//c)el promedio de personas, que viajan en temporada alta.*/	
		if(temporada == "alta")
		{
			acumTemporadaAlta= acumTemporadaAlta + cantidadUnidades;
			contadorTempAlta++;
		}

		respuesta=prompt("desea seguir ingresando datos?s/n");

	}
	//c)el promedio de personas, que viajan en temporada alta.*/
	    promedio= acumTemporadaAlta/contadorTempAlta;

		if (contBrasil>contCaribe&&contBrasil>contEuropa){
             mensaje = "El destino mas elegido es brasil";
        }
        else if(contCaribe>contEuropa){
            mensaje = "El destino mas elegido es caribe";
        }
        else{
            mensaje = "El destino mas elegido es europa"; 
        }

        document.write(mensaje+"<br>"); 
        document.write("El nombre del titular que lleva menos pasajeros es "+nombreCantMin+"<br>"); 
        document.write("El promedio de personas que viajan en temporada alta es "+promedio+"<br>"); 

}
