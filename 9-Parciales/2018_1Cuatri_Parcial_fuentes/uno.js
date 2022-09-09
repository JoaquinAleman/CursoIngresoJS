/*
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
    let peso; 
    let sexo; 
    let contadorMujeres = 0;
    let acumAltura = 0;
    let promedio; 
    let bandera = 0; 
    let mensaje; 
    let pesoMin = 151; 

    for (i=0; i<5; i++){
        
        do {
            nombre = prompt("Ingrese nombre");
        }while(isNaN(nombre)==false);

        do{
            altura = parseFloat(prompt("Ingrese altura en centimetros"));
            acumAltura = acumAltura + altura; //para punto b
        }while(isNaN(altura)==true||altura<0||altura>225);

        do{
            peso = parseFloat(prompt("Ingrese el peso"));
        }while(isNaN(peso)==true||peso <2||peso>150); 

        do {
            sexo = prompt("ingrese sexo.Indique f/m");
        }while(sexo!="f"&&sexo!="m");
            //punto a 
            switch(sexo){
                case "f":
                    contadorMujeres++; 
                break; 
                case "m":
                    if(peso>pesoMin||bandera == 0){ //punto c
                        nombreHombreMin = nombre;   
                        mensaje = "el nombre del hombre con menos peso es "+nombreHombreMin; 
                        bandera =1;
                    }
                break; 
            }
    }
    //punto b 
    promedio = acumAltura / 5; 

    document.write("la cantidad de personas de sexo femenino es "+contadorMujeres+"<br>");
    document.write("la altura promedio total es "+promedio+ "cm"+"<br>");
    if(bandera==1){
        document.write(mensaje+"<br>");
    }

}