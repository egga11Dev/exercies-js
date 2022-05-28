function staircase(n) {
  // Write your code here
  for (let index = 0; index < n; index++) {
    let string = "";
    for (let space = 0; space < n - index - 1; space++) {
      string += " ";
    }
    for (let emoji = 0; emoji < index + 1; emoji++) {
      string += "#";
    }
    console.log(string);
  }
}

staircase(8);

/* la esplicacion del ejercicio es facil el for padre es el que se encarga de el numero de impresion que se asigna en el parametro de la funcion, el primer for hijo hace la funcion de llenar de espacios el string que inicio el padre y el segundo for hijo  el espacio que falta con el symbol   */
