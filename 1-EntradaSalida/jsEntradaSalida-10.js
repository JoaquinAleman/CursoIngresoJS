/* 
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()

{    
	
	/*let importe;
	let descuento;
	let resultado;
	

    importe = parseInt(document.getElementById("txtIdImporte").value);
    
    descuento= importe * 25 / 100;
    resultado = importe	- descuento;

   document.getElementById("txtIdResultado").value = resultado; */

 /* Divicion X
Joaquin Aleman
Ejercicio 10Bis1
 E/S 10 Bis1: Debemos lograr tomar el importe por ID.Transformarlo a entero (parseInt), 
luego pedirle al usuario un % de descuento 
(USTEDES RESUELVEN COMO LE PIDEN EL NUMERO) y mostrar el importe en el cuadro de texto "RESULTADO"*/

   let importe;
   let porcentajeDeDescuento;
   let descuento;
   let resultado;

   importe = parseInt(document.getElementById("txtIdImporte").value);

   porcentajeDeDescuento = parseInt(prompt("ingrese porsentaje de descuento"));
   
   descuento = (importe * porcentajeDeDescuento) / 100;
   
   resultado = importe - descuento;

   document.getElementById("txtIdResultado").value = resultado;




}
