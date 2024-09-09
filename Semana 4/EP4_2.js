persona.direccion = "Lima";
persona.saludar = function() {
  return `Hola, mi nombre es ${this.nombre}.`;
};
console.log(persona.saludar());