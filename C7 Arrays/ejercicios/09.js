function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const indiceArray = Math.floor(Math.random() * array.length);
   return array[indiceArray];
}

module.exports = obtenerElementoAleatorio;
