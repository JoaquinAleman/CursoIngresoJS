/* Divicion x
   Joaquin Aleman
   Trabajo Practico Ejercicio 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let sumar;
	let mensaje;
	
   

	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    sumar = precio1 + precio2 + precio3;
  
	 mensaje = ("La suma de precios es " + sumar);

	 alert(mensaje);
	
}
 	function Promedio () 

{     
     let precio1;
	let precio2;
	let precio3;
	let sumar;
	let promedio;
	let mensaje;


	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

  	sumar = precio1 + precio2 + precio3;

	promedio = sumar / 3;

		mensaje = ("El promedio es " + promedio);

		alert(mensaje);

}


	function PrecioFinal () 

{   
   /* let precio1;
	let precio2;
	let precio3;
	let sumar;
	let iva;
 	let precioFinal;
 	let mensaje;
   
    
	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

   
    sumar = precio1 + precio2 + precio3;
    sumar = precio1 + precio2 + precio3;

	iva = sumar* 21 / 100;

	precioFinal = sumar + iva;

    mensaje = ( "El precio final con iva es de " + precioFinal);

     alert(mensaje);*/

    let precio1;
	let precio2;
	let precio3;
	let sumar;
	let iva;
 	let precioFinal;
 	let mensaje;
 	const IVAS = 21;
 	

 	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	
    sumar = precio1 + precio2 + precio3;

    iva = sumar * IVAS / 100;

    precioFinal = iva + sumar;

     mensaje = ("El precio final con iva es de " + precioFinal);

     alert(mensaje);

}