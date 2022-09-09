/*/*Divicion X
Joaquin Aleman
Trabajo Practico 3 FerretePinturas
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ 
	let temperaturaFahrenheit;
	let temperaturaCentigrados;

	temperaturaFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

	temperaturaCentigrados = (temperaturaFahrenheit - 32)/1.8000;

	alert(temperaturaFahrenheit + " grados Fahrenheit es igual a " + temperaturaCentigrados.toFixed(2) + " grados Centigrados");

}


function CentigradosFahrenheit () 
{
	let temperaturaFahrenheit;
	let temperaturaCentigrados;

	temperaturaCentigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    temperaturaFahrenheit = temperaturaCentigrados * 1.8000 + 32;

    alert(temperaturaCentigrados + " grados Centigrados es igual a " + temperaturaFahrenheit.toFixed(2) + " grados Fahrenheit");
}
