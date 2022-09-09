/*JOAQUIN ALEMAN
DIVICION X
1)De un cine se deben ingresar una cantidad indeterminada de venta de entradas diaria, validando los siguientes datos:

nombre de película, precio, cantidad de entradas, tipo(3D o 4D)

a)el nombre de la película más cara de tipo 4D.

b)informar el precio total de la venta del día.

c)el nombre de la película con menos cantidad de entradas.

*/
function mostrar()
{
	let nombrePelicula;
	let precio;
	let precioMax= 0;
	let nombrePeliculaMasCara;
	let cantidadDeEntradas;
	let cantidadMinEntradas= 1001;
	let tipo;
	let respuesta:`s`;
	let nombrePeliculaMinEntradas;
	let acumTotalUni= 0;
	let acumPrecioFinal;

	while(respuesta == `s`){


			nombrePelicula= prompt("Ingrese el nombre de laPelicula");
			while(isNaN(nombrePelicula)==false)
			{
				nombrePelicula= prompt("Ingrese nombre de la pelicula");
			}

			precio=parseInt(prompt("Ingrese precio entre 100 y 1000"));
        	while(isNaN(precio) == true || precio < 100 || precio > 1000)
        	{
         		precio= parseInt(prompt("Error.Ingrese un precio entre 100 y 1000"));
        	}

        	cantidadDeEntradas=parseInt(prompt("ingrese la cantidad de entradas"));
        	while(isNaN(cantidadDeEntradas) == true || cantidadUnidades <= 0 || cantidadUnidades>1000)
      	  	{
          		cantidadDeEntradas=parseInt(prompt("Error.Ingrese una cantidad de entradas entre 0 y 1000 unidades"));
        	}

			tipo= prompt(" Ingrese el tipo de pelicula");
			while(tipo != "3D" && tipo != "4D")
			{
				tipo= prompt("Por favor ingrese tipo 3D o 4D");
			}

           //a)el nombre de la película más cara de tipo 4D.

           	 if(tipo=="4D" && precio>precioMax)
        	{
            	precioMax= precio;
            	nombrePeliculaMasCara= nombrePelicula;
        	}    

           //b)informar el precio total de la venta del díA.

        	acumTotalUni= precio*cantidadDeEntradas;    

       		acumPrecioFinal= acumPrecioFinal + acumTotalUni;



           //c)el nombre de la película con menos cantidad de entradas.
            if(cantidadDeEntradas<cantidadMinEntradas)
        	{
          		cantidadMinEntradas= cantidadUnidades;
          		nombrePeliculaMinEntradas= nombrePelicula;

        	}



        	respuesta=prompt("desea continuar ingresando productos?s/n");

	}



	document.write("El nombre de la pelicula mas cara es "+nombrePeliculaMasCara+"<br>");
	document.write("El nombre de la pelicula con menos cantidad de entradas es "+nombrePeliculaMinEntradas+"<br>");
	document.write("el precio total de venta del dia es "+acumPrecioFinal+"<br>")


}
