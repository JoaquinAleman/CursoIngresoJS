/*corregir errores de tp 12 y terminar 13.
Divicion X
Joaquin Aleman
Ejercicio 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta=`s`;
	let numero= 0;
	let acumulador= 0;
	let acumulador2= 0;
	let sumaNegativos;
	let sumaPositivos;
	let contador= 0;
	let contador2= 0;
	let contadorDeCeros= 0;
	let contadorDePares= 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	  numero= parseFloat(prompt("ingrese el numero"));
	 
	 while(isNaN(numero) == true){
	    numero= parseFloat(prompt("Por favor Ingrese un numero")); 
	  }
	 
	 while(respuesta == `s`){

	 	numero= parseFloat(prompt("ingrese el numero"));
		if(numero < 0){
			acumulador = acumulador + numero;
			sumaNegativos= acumulador;
			contador++;
		}
		else{
			acumulador2 = acumulador2 + numero;
			sumaPositivos= acumulador2;
			contador2++;
		}	
		//hasta aca esta bien
		if(numero == 0){
			contadorDeCeros++;
		}
		//solucionar contador de 0
		else if(numero%2 == 0 ){
			contadorDePares++;
		}
	
	respuesta= prompt("Desea continuar ingresando numeros? s/n");
 	 }
    promedioPositivos= acumulador2 / contador2;
    promedioNegativos= acumulador / contador;

    diferencia= contador2 - contador;

    document.write("La suma de negativos es : "+sumaNegativos);
    document.write(" La suma de positivos es : "+sumaPositivos);
    document.write(" La cantidad de numeros positivos es : "+contador2);
	document.write(" La cantidad de numeros negativos es : "+contador);
	document.write(" La cantidad de ceros es : "+contadorDeCeros);
	document.write(" La cantidad de numeros pares es : "+contadorDePares);
	document.write(" El promedio de numeros positivos es : "+promedioPositivos);
	document.write(" El promedio de numeros negativos es  : "+promedioNegativos);
	document.write(" La diferencia entre positivos y negativos es : "+diferencia);
	 
}//FIN DE LA FUNCIÓN
/*document.write("la suma de negativos es :"+sumaNegativos);
/FIN DE LA FUNCIÓN*/