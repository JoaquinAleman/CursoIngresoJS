/*3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:
nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan. informar:
a)el lugar destino elegido.
b)el nombre del pasajero titular que lleva menos pasajeros.
c)el promedio de personas, que viajan en temporada alta. */
function mostrar()
{
	let nombre;
    let destino;
    let temporada; 
    let cantidad; 
    let seguir; 
    let mensaje; 
    let mensajeA;
    let mensajeB; 
    let cantidadMin = 6;
    let nombreCantMin; 
    let acumTemporadaAlta = 0;
    let contadorTempAlta = 0; 
    let contBrasil = 0;
    let contCaribe = 0;
    let contEuropa = 0; 

        do{
            do {
                nombre = prompt("Ingrese el nombre del titular (sin numeros)"); 
            }while(isNaN(nombre)==false); 

            do {
                destino = prompt("Ingrese destino. Indique brasil/caribe/europa")
            }while(destino!="brasil"&&destino!="caribe"&&destino!="europa");

            do{
                temporada = prompt("Indique temporada alta/baja/media");
            }while(temporada!="alta"&&temporada!="baja"&&temporada!="media");

            do {
                cantidad = parseInt(prompt("Ingrese la cantidad de personas que viajan(hasta 5 inclusive)"));
            }while(isNaN(cantidad)==true||cantidad<1||cantidad>6);

            switch(destino){ //punto a 
                case "brasil":
                    contBrasil++;
                break;
                case "caribe": 
                    contCaribe++;
                break;
                case "europa": 
                    contEuropa++; 
                break; 
            }
            //punto b 
            if(cantidad<cantidadMin){
                cantidadMin = cantidad; 
                nombreCantMin = nombre; 
            }
            //punto c 
            if (temporada == "alta"){
                acumTemporadaAlta = acumTemporadaAlta + cantidad; 
                contadorTempAlta++; 
            }
            seguir = prompt("Desea seguir ingresando? Indique s/n"); 
        }while(seguir == "s");

        //punto c 
        promedio = acumTemporadaAlta / contadorTempAlta; 
        //punto a
        if (contBrasil>contCaribe&&contBrasil>contEuropa){
             mensaje = "El destino mas elegido es brasil";
        }
        else if(contCaribe>contEuropa){
            mensaje = "El destino mas elegido es caribe";
        }
        else {
            mensaje = "El destino mas elegido es europa"; 
        }
        
        document.write(mensaje+"<br>"); 
        document.write("El nombre del titular que lleva menos pasajeros es "+nombreCantMin+"<br>"); 
        document.write("El promedio de personas que viajan en temporada alta es "+promedio+"<br>"); 

}
