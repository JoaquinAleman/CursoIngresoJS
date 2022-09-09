/*Comentarios
Joaquin Aleman
Ejercicio 1*/
/*Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let nombre1;
	let nombre2;
	let nombre3;
	let precio1;
	let precio2;
	let precio3;
	let precioBruto;
	let promedio;
	let precioFinal;
	let porcentajeDeDescuento;
	let descuento;
	let precioConDescuento;
	let mensajeAmostrar;

	nombre1 = prompt("ingrese el nombre del producto 1");
	nombre2 = prompt("ingrese el nombre del producto 2");
	nombre3 = prompt("ingrese el nombre del producto 3");

	precio1 = parseInt(prompt("ingrese el precio del producto 1"));
	precio2 = parseInt(prompt("ingrese el precio del producto 2"));
	precio3 = parseInt(prompt("ingrese el precio del producto 3"));

	precioBruto = precio1 + precio2 + precio3;

	promedio = precioBruto / 3;

	precioFinal = precioBruto * 1.21;
    
    porcentajeDeDescuento = parseInt(prompt("ingrese el porcentaje descuento"));

    descuento = (precioFinal * descuento) / 100;

    porcentajeConDescuento = precioFinal - descuento;

    mensajeAmostrar = ",el precio del nombre " + nombre1 + " es " + precio1 + ",el precio del nombre " + nombre2 + " es " + precio2 + ",el precio del nombre " + nombre3 + " es " + precio3 + ",el precio bruto es " + precioBruto + ",el promedio es " + promedio + ",el precio final es " + precioFinal + ",el porcentaje de descuento " + porcentajeDeDescuento + " ,el precio con descuento es" + precioConDescuento;



	alert(mensajeAmostrar);

	
}

