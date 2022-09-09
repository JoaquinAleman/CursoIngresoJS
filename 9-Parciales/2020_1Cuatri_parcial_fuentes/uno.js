/*Divicion X 
Joaquin Aleman
parcial ejercicio 1 
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{	
	let producto;
	//let acumulador=0;
	let acumuladorJabones=0;
	let cantidadMaxima= -999;
	let productoMaximo=0;
	let precio;
	let precioMinimo=301;
	let precioMaximo;
	let cantidadUnidades;
	let cantidadAlcohol=0;
	let marca;
	let fabricante;
	let fabricanteAlcohol;
	let i=5;



		for (i = 0;i < 5; i++) {
				//ingreso de producto
				
			do{	
				//validacion
				producto= prompt("Ingrese el producto barbijo/jabon/alcohol");
				}while(producto != "barbijo" && producto != "jabon" && producto != "alcohol");
				//validacion
				precio=prompt("Ingrese precio entre 100 y 300");
				while(precio < 100 || precio > 300){
				precio= parseInt(prompt("Error.Ingrese un precio entre 100 y 300"));
				}
					//cantidad de unidades	
				cantidadUnidades=prompt("ingrese cantidad de unidades ente 0 y 1000");
				while(cantidadUnidades <= 0 || cantidadUnidades>1000){
				cantidadUnidades=parseInt(prompt("ingrese cantidad de unidades valida"));
				}
			
		//ingreso marca y fabricante
			marca=prompt("Ingrese marca");
			fabricante=prompt("Ingrese fabricante");
		}	
		//precio minimo de alcohol y cantidad de unidades y fabricante

			if(producto == "alcohol" && precio< precioMinimo){

				precioMinimo=precio;
				cantidadAlcohol=cantidadUnidades;
				fabricanteAlcohol=fabricante;
			}	
		//cantidad de jabones
			if (producto=="jabon"){
			
				acumuladorJabones=acumuladorJabones+cantidadUnidades;
			}
		//cantidad de unidades maxima
			if(cantidadUnidades>cantidadMaxima){
				cantidadMaxima=cantidadUnidades;
				productoMaximo=producto;
				precioMaximo=precio;
			}

		alert("El alcohol mas barato cuesta " + precioMinimo + " , la cantidad de unidades es "+ cantidadAlcohol+ " y el fabricante es " + fabricanteAlcohol)
		alert("El producto con mas unidades es " +precioMaximo);
		alert("El total de jabones es "+ acumuladorJabones);

}
