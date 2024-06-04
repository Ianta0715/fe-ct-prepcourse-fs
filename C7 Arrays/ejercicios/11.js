function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var nuevoArray = array.map(e => e * 2);
 return nuevoArray;
}

module.exports = duplicarElementos;
