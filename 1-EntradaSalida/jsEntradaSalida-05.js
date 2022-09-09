/*Divicion X
 Joaquin Aleman
 Ejercicio 5Bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declarar Variable
     
     let apellidoIngresado;
     let nombreIngresado;
     let edadIngresada;

     //tomo los datos 

     nombreIngresado = document.getElementById("txtIdNombre").value;
     edadIngresada = document.getElementById("txtIdEdad").value;

     apellidoIngresado = prompt("ingresar apellido");



     //CONCATENAR(+)  string----variable----string-----variable----string.
      
     mensajeMostrar = ( apellidoIngresado + ",usted se llama "+ nombreIngresado + " y tiene " + edadIngresada + " años");
     
	alert(mensajeMostrar);
}

