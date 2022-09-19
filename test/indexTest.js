const { expect } = require("chai");
const sinon = require("sinon");

describe("index.js", () => {
  
  it("1. La variable colores es un array con tres elementos, 'rosa', 'morado', y 'azul'", () => {
    expect(colores).to.eql(["rosa", "morado", "azul"]);
  });

  it("2. La variable nombres es un array con cuatro elementos. El segundo el elemento es el string 'Flor'", () => {
    expect(nombres[1]).to.eql("Flor");
    expect(nombres.length).to.equal(4)
  });

  it("3. La variable instrumentos es un array con tres elementos. El primer el elemento es el string 'piano'", () => {
    expect(instrumentos[0]).to.eql("piano");
    expect(instrumentos.length).to.equal(3)
  });

  it("4. La variable segundoNombre apunta al segundo elemento del array nombres", () => {
    expect(segundoNombre).to.eql(nombres[1]);
  });

  it("5. La variable tercerColor apunta al tercer elemento del array colores", () => {
    expect(tercerColor).to.eql(colores[2]);
  });

  it("6. La variable primerInstrumento apunta al primer elemento del array instrumentos", () => {
    expect(primerInstrumento).to.eql(instrumentos[0]);
  });
  

});
