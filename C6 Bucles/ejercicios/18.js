function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  for(var i = a ; i <= b ; i++){
    producto *= i;
  }
  return parseInt(producto);
}

module.exports = productoEntreNúmeros;