/* luego
mostrar el importe con un aumento del 10 %. en el cuadro de texto "txtIdResultado"
Debemos lograr tomar el importe por ID ,
/*divicion x
Joaquin Aleman
Ejercicio 9
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{
	let sueldo;
	let aumento;
	let resultado;
	

    sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
    
    aumento = sueldo * 10 / 100;
    resultado = sueldo	+ aumento;

    document.getElementById("txtIdResultado").value = resultado;


	}

