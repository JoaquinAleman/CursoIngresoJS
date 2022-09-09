/*Divicion X
Joaquin Aleman
Trabajo Practico 4 FerreteIluminacion .switch (cantidad) if (marca)*/
function CalcularPrecio () 
{
  const PRECIOLAMP = 35;
  let cantidadDeLamparas;
  let marca;
  let precioConDescuento;
  let precioFinal;
  let descuento;
  let iibb;
  
  cantidadDeLamparas= parseInt(document.getElementById("txtIdCantidad").value);
  
  marca= document.getElementById("Marca").value;

  switch(cantidadDeLamparas){
     case 1:
     case 2:
        descuento=0;
            break;
     case 3:
        if(marca == "Argentinaluz"){
            descuento = 15;
        }
        else if(marca == "FelipeLamparas"){
            descuento = 10;
        }
        else{
            descuento = 5;
        }
            break;
     case 4:
        if(marca=="Argentinaluz"|| marca =="FelipeLamparas"){
            descuento = 25;
        }
        else{
            descuento= 20;
        }
            break; 
     case 5:
        if(marca == "Argentinaluz"){
            descuento= 40;
        }
        else{
            descuento= 30;
        }
            break; 
        default:
            descuento= 50;
            break;    
   }
  
    precioConDescuento= PRECIOLAMP - PRECIOLAMP * descuento/100;


    precioFinal = precioConDescuento * cantidadDeLamparas;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

     if(precioFinal > 120){
        iibb = precioFinal *10/100; 
        precioFinal= precioFinal +iibb;
         alert("IIBB Usted pago " +  iibb);
     }
}
