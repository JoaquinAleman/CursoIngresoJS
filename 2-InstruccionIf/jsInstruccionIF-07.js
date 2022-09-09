/*Divicion X
Joaquin Aleman
Ejercicio IF-7 */
/*Divicion X
Joaquin Aleman
Ejercicio IF-7 */
function mostrar()
{
	let edad;
	let estadoCivil;
     edad = parseInt(document.getElementById("txtIdEdad").value);
     estadoCivil = document.getElementById("estadoCivil").value;

     if (edad <= 17 && estadoCivil !="Soltero")
     {
     	alert("Es muy pequeño para NO ser soltero");
     }

	//tomo la edad  
	//alert("ok");"txtIdEdad"
	/*const A = 10;
	const B = 10;
	const C = 30;
	if (A<B && A<=C){
		alert("si el menor es A");
	}
	else if (B<=C && B<=A){
		alert("si el menor es B")
	}
		else{alert("el menor es C")};*/
	
}//FIN DE LA FUNCIÓN