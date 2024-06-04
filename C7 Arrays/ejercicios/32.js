function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:  // Convertir el string a minúsculas y eliminar los espacios
  let stringLimpio = string.toLowerCase().replace(/[\s]/g, '');

  let stringInvertido = stringLimpio.split('').reverse().join('');
  
  return stringLimpio === stringInvertido;
}

module.exports = esPalindromo;