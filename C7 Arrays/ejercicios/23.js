function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let nuevoArreglo = [];
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    nuevoArreglo.push(num + 2 * i);
    if (num + 2 * i === contador) {
      return "Se interrumpió la ejecución";
    }
    contador++;
  }
  return nuevoArreglo;
}

module.exports = breakStatement;
