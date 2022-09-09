/*2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:
nombre de producto, precio, unidades, tipo(minorista o mayorista)
a)informar el precio total de la compra.
b)el nombre del producto más caro de tipo minorista
c)el nombre del producto con menos unidades.*/
function mostrar()
{
     let nombre; 
    let precio; 
    let unidades; 
    let tipo; 
    let seguir; 
    let acumPrecio = 0; 
    let precioMax = 0;
    let nombrePrecioMax; 
    let unidadesMin = 1501;
    let nombreUnidadesMin;
        do{
            do {
                nombre = prompt("Ingrese el nombre del producto (sin letras)"); 
            }while(isNaN(nombre)==false); 

            do {
                precio = parseFloat(prompt("Ingrese el precio(hasta $5000)"));
                acumPrecio = acumPrecio + precio; //punto a 
            }while(isNaN(precio)==true||precio<1||precio>5000);

            do {
                unidades = parseInt(prompt("Ingrese la cantidad de unidades(hasta 1500 unidades)"));
            }while(isNaN(unidades)==true||unidades<1||unidades>1500);

            do{
                tipo = prompt("Indique si es compra minorista o mayorista");
            }while(tipo!="minorista"&&tipo!="mayorista");
            //punto b 
            if (tipo=="minorista"&&precio>precioMax){
                nombrePrecioMax = nombre; 
            }
            //punto c 
            if(unidades<unidadesMin){
                nombreUnidadesMin = nombre; 
            }

            seguir = prompt("Desea seguir ingresando?Indique s/n"); 
        }while(seguir=="s");

        document.write("El precio total de la compra es $"+acumPrecio+"<br>");
        document.write("El nombre del producto mas caro de tipo minorista es "+nombrePrecioMax+"<br>");
        document.write("El nombre del producto con menos unidades es "+nombreUnidadesMin+"<br>");

}
