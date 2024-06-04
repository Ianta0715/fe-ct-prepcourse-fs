const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let total = 0;
  for(prop in objeto){
    if(objeto.hasOwnProperty(prop)){
      total++;
    }
  }
  return total;
};

module.exports = contarPropiedades;
