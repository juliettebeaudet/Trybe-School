// 7. Escreva uma função shipLength que, dado um objeto representando um navio,
// retorna o comprimento dele, mostrando também a devida unidade de comprimento:

const assert = require('assert')

const ships = [
    {
        name: "Titanic",
        length: 269.1
    },
    {
        name: "Queen Mary 2",
        length: 1132,
        measurementUnit: "feet"
    },
    {
        name: "Yamato",
        length: 256,
        measurementUnit: "meters"
    }
]

// escreva shipLength abaixo
const shipLength = (ship) => {
  const {name, length, measurementUnit = 'meters'} = ship; //pegando cada propriedade com object destructuring e arrumando um default param
return `${name} is ${length} ${measurementUnit} long`;
}

assert.equal(shipLength(ships[0]), "Titanic is 269.1 meters long")
assert.equal(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long")
assert.equal(shipLength(ships[2]), "Yamato is 256 meters long")
    
