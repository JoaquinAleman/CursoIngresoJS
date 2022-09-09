/*Divicion X
Joaquin Aleman
Ejercicio IF-6 */
function mostrar()
{   
	let edad;

     edad = parseInt(document.getElementById("txtIdEdad").value);

    /* if (edad>18 );{

     alert("es un mayor de edad")
      }

     if (edad>13 ||  edad<18){	

     alert("es un adolecente")
      }

     if (edad < 13){
     alert("es un niño");
      }  */
      if ( edad > 17){
      	alert("es mayor de edad");
      }
      	else if (edad < 13){
      	alert("es niño");
      		}
      		else{
      			alert("es un adolecente");
      			}

	//tomo la edad  
}//FIN DE LA FUNCIÓN