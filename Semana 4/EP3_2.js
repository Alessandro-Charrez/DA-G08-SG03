function cont() {
    let contador = 0;
    return function() {
      contador++;
      return contador;
    };
  }
  const contador = cont();
  console.log(contador());
  console.log(contador()); 