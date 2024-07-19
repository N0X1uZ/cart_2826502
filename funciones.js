//Ejemplo 
//Definir una funcion
//Sintaxis: Declaracion de funcion

function saludo(nombre){
    console.log(`Hola ${nombre} como estas`);
}
//invocar, llamar ejecutar saludo
saludo("Juan")// -> argumento: cristian 

//Sintaxis : Expresion Funcion:
//se asigna a una contaste
const saludo2 = function(nombre = "Carlos2"){//-> parametros por defecto
    console.log(`hola ${nombre} como estas`);
}

//invocar saludo2:
saludo2();
