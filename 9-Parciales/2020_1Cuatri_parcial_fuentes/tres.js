/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre 
, edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let temperaturaMaxima;
	let nombreDePersonaMasT=0;
	let viudos;
	let contadorDeViudos=0;
	let contadorSolteroViudos=0;
	let contadorTerceraEdad;
	let acumuladorEdad=0;
	let contadorHombresSoltero;
	let promedioEdad=0;
	let respuesta=`s`;
	let bandera=1;


	while(respuesta == `s`){

		nombre=prompt(" Ingrese su nombre");
		edad=prompt(" Ingrese su edad");


		while(sexo != "f" && sexo != "m"){
			sexo=prompt(" Ingrese sexo f o m");
		}

		while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil !="viudo"){
			estadoCivil=prompt(" Ingrese estado civil soltero/casado/viudo");
		}
	 		temperaturaCorporal=parseInt(prompt("Ingrese temperatura Corporal"));

	 		respuesta=prompt(" Desea seguir ingresando datos? s/n");

	

	 	//a) El nombre de la persona con mas temperatura.
		if(bandera==0 || temperaturaCorporal > temperaturaMaxima){
			temperaturaMaxima=temperaturaCorporal;
			nombreDePersonaMasT=nombre;
			bandera = 1;
		} 	

		//b) Cuantos mayores de edad estan viudos

		if(estadoCivil == "viudo" && edad>18){
			contadorDeViudos++;
		}
		//c) La cantidad de hombres que hay solteros o viudos.

		if(sexo=="m" && estadoCivil != "casado"){
			contadorSolteroViudos++;

		}	
    //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

		if(edad>60 && temperaturaCorporal>38){
			contadorTerceraEdad++;
		}
	//e) El promedio de edad entre los hombres solteros.

		if(sexo="m" && estadoCivil== "soltero"){
			acumuladorEdad=acumuladorEdad+edad;
   			contadorHombresSoltero++;
		}
	}
	//promedio
		promedioEdad=acumuladorEdad/contadorHombresSoltero;

	alert("El nombre de la persona con mas temperatura es "+ nombreDePersonaMasT);
	alert("La cantidad de mayores de edad viudos es "+ contadorDeViudos);
	alert("La cantidad de hombres solteros o viudos es "+ contadorSolteroViudos);
	alert("El promedio de edad de hombres solteros es "+ promedioEdad);


}
