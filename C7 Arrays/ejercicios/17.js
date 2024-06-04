function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let total = 0;
  for(var i = 0 ; i < arrayOfNums.length ; i ++){
    total += arrayOfNums[i];
  }
  return total;

}

module.exports = agregarNumeros;
