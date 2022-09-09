/* Divicion X
   Joaquin Aleman
   TP 2 FerreteConstruccion
2.
	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   let largo;
	let ancho;
	let perimetro;
	let alambre;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    
    perimetro = (ancho + largo) * 2;

    alambre = perimetro * 3; 

    alert("La cantidad de alambre a comprar es " + alambre + " metros");
}
function Circulo () 
{
	let radio;
	let diametrio;
	let perimetro;
	let alambre;
	const PI = 3.14;

	radio = parseFloat(document.getElementById("txtIdRadio").value);

	diametrio = radio * 2;

	perimetro = PI * diametrio;

	alambre = perimetro * 3;


    alert("La cantidad de alambre a comprar es " + alambre + " metros");


}
function Materiales () 
{
	let largo;
	let ancho;
	let area;
	let cemento;
	let cal;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = ancho * largo;

    cemento = area * 2;

    cal = area * 3;

    alert("Para un contra piso de " + area + " metros, necisitas " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");


}