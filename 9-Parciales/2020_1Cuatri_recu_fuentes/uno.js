/*ALEMAN JOAQUIN        FORMULA de numeros pares numero%2==0 Y PARA BUSCAR NUMEROS IMPAR: numero%2!=0
							contNUMEROS PARES++                                             contNUMEROIMPARES 
DIVICION X
1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.

a)informar la cantidad de personas de sexo femenino.

b)la altura promedio en total

c)el nombre del hombre con menos peso(si lo hay)

Pedir datos por prompt y mostrar por document.write*/
function mostrar()
{

	let i;
	let nombre;
	let altura;
	let acumAltura= 0;
	let promedio;
	let peso;
	let pesoMin=181;
	let nombreHombreMin;
	let sexo;
	let contadorFemenino= 0;
	let pesoHombreMenosPeso;
	let banderaHombreMenosPeso= 0;
	


	for (i = 0;i < 5; i++){

			
			nombre= prompt("Ingrese nombre");
			while(isNaN(nombre)==false)
			{
				nombre= prompt("Ingrese nombre");
			}

			altura=parseFloat(prompt("Ingrese altura en centimetros")); 
			while(isNaN(altura) == true || altura < 100 && altura > 220)
			{
            	altura = parseFloat(prompt("Error.Ingrese una altura en centimetros entre 100 y 220"));
            	//acumAltura = acumAltura + altura;/*probar sacando esto y ponerlo fuera del for*/
			}
			acumAltura = acumAltura + altura;

			peso=parseInt(prompt("Ingrese su peso en Kg"));
			while(isNaN(peso)==true || peso < 20 && peso > 180)
			{
				peso=parseInt(prompt("Ingrese un peso valido entre 20 y 180"));
			}
			
			sexo= prompt(" Ingrese sexo f o m");
			while(sexo != "f" && sexo != "m")
			{
				sexo= prompt("Por favor ingrese sexo f o m");
			}
		
		//a)informar la cantidad de personas de sexo femenino.
			switch(sexo)
			{
				case"f":
				{
					contadorFemenino++;
				}
					break;
			//c)el nombre del hombre con menos peso(si lo hay) hasta aca esta bien
				case"m":
	 			if(banderaHombreMenosPeso == 0)
	 			{ 
					pesoHombreMenosPeso= peso;	 			
                	nombreHombreMin= nombre; 
                	banderaHombreMenosPeso= 1;  
                 
            	}
            	else if(pesoHombreMenosPeso>peso)
            	{
            		pesoHombreMenosPeso= peso;
            		nombreHombreMin= nombre;
            	}
            		break;

            }		
	}		
		//b)la altura promedio en total

		promedio= acumAltura/5;


		document.write("La cantidad de personas femeninas es: "+contadorFemenino+"<br>");
		document.write("La altura promedio en total es: "+promedio+"<br>");
	if(banderaHombreMenosPeso==1)
	{
		document.write("El hombre con menos peso se llama "+nombreHombreMin+" de "+pesoHombreMenosPeso+" Kg"+"<br>");
    }
    else
    {
    	document.write("no se ingreso ningun hombre");
    }	
}
