/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado = numero1+numero2;
	
	mensaje = "el resultado es " + resultado;
	
	alert(mensaje);	
}

function restar()
{
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
     
     resultado = numero1 - numero2;
     
     mensaje = "el resultado es " + resultado;
     
     alert(mensaje);
} 

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    resultado = numero1 * numero2;

    mensaje = "el resultado es " + resultado;

    alert(mensaje);
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    resultado = numero1 / numero2;
    
    mensaje ="el resultado es " + resultado;
    
    alert(mensaje);
}

