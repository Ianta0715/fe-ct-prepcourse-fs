function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i];
    }
  }
  
  // Si no se encuentra ningún string con más de 5 caracteres, devuelve undefined
}

module.exports = obtenerPrimerStringLargo;
