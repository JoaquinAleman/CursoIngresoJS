/* ALEMAN JOAQUIN 
DIVICION X
2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:

nombre de producto, precio, unidades, tipo(minorista o mayorista)

a)informar el precio total de la compra.

b)el nombre del producto más caro de tipo minorista

c)el nombre del producto con menos unidades*/

function mostrar()
{
  let producto;
  let precio;
  let cantidadUnidades;
  let tipo;
  let respuesta=`s`;
  let precioMinimo;
  let precioMax= 0;
  let unidadesMin= 1001;
  let productoUnidadesMin;
  let acumTotalUni;
  let acumPrecioFinal= 0;
  let productoMasCaro;

       //validacion

    while(respuesta == `s`)
    {

        producto=prompt("ingrese nombre del producto");
        while(isNaN(producto) == false)
       {
          producto=prompt("ingrese nombre del producto solo letras")
       }

        precio=parseInt(prompt("Ingrese precio entre 10 y 1000"));
        while(isNaN(precio) == true || precio < 10 || precio > 1000)
        {
          precio= parseInt(prompt("Error.Ingrese un precio entre 10 y 1000"));
        }

        cantidadUnidades=parseInt(prompt("ingrese la cantidad de unidades"));
        while(isNaN(cantidadUnidades) == true || cantidadUnidades <= 0 || cantidadUnidades>1000)
        {
          cantidadUnidades=parseInt(prompt("Error.Ingrese entre 0 y 1000 unidades"));
        }
        //a)informar el precio total de la compra.

        acumTotalUni= precio*cantidadUnidades;    

        acumPrecioFinal= acumPrecioFinal + acumTotalUni;

        tipo=prompt("ingrese tipo de compra")
        while(tipo != "mayorista" && tipo != "minorista"){
          tipo=prompt(" Ingrese un tipo valido de compra");
        }
    //b)el nombre del producto más caro de tipo minorista
        if(tipo=="minorista" && precio>precioMax)
        {
            precioMax= precio;
            productoMasCaro= producto;
        }    
    //c)el nombre del producto con menos unidades
        if(cantidadUnidades<unidadesMin)
        {
          unidadesMin= cantidadUnidades;
          productoUnidadesMin= producto;

        }

          respuesta=prompt("desea continuar ingresando productos?s/n");

    }   
      
        document.write("El precio total de la compra es $"+acumPrecioFinal+"<br>");
        document.write("El nombre del producto mas caro de tipo minorista es "+productoMasCaro+"<br>");
        document.write("El nombre del producto con menos unidades es "+productoUnidadesMin+"<br>");

}
