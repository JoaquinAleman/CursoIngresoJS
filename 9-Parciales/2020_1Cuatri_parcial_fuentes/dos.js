/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Curso de ingreso UTN FRA*/
function mostrar()
{ 
  let producto;
  let cantidadDeBolsas;
  let precioBolsa;
  let ivaBolsa;
      
      //validacion
          producto=prompt("Ingrese los productos de construccion que va comprar");
      while(producto != "arena" && producto != "cal" && producto != "cemento"){
          producto=prompt("Solo puede comprar cal,arena,cemento");

      }
      //cantidad de bolsas
      cantidadDeBolsas=parseInt(prompt("Ingrese cantidad de bolsas"));

      //precio de bolsa 
      while(precioBolsa > 0){
      
        precioBolsa=prompt("ingrese el precio de bolsa");
      }

      //si compro mas de 10 bolsas 15%de descuento

      if(cantidadDeBolsas > 10){
        ivaBolsa= precioBolsa* 15 / 100;
      }
       //si compro mas de 30 bolsas 25%de descuento

      else if(cantidadDeBolsas > 30){
        ivaBolsa=precioBolsa* 25 / 100; 
      }

      // El importe total a pagar , bruto sin descuento y...





}
