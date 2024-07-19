//sintaxis funcion arrow Flecha
//reglas:
//   1. si el bloque de codigo
//   de la funcion flecha solo tiene 
//   una linea, no hace falta poner
//   corchetes
//   2. Si la funcion flecha tiene un parametro, se puede omitir
//   El parametro
//   3. si el bloque de codigo
//   de la funcion  flecha solo tiene
//   una linea, y esta linea debe retornar
//   un valor, es posible omitir el return,
//   pero solo si se aplica la regla 2
const saludo = () => {
    `Hola${nombre}desde una funcion flecha`;
}

//invocar a la funcion flecha
saludo("Juan");