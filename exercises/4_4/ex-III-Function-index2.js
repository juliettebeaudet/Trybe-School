// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.
//Babystep: inverter o exercicio anterior.

let arrayForTest = [2,-10, 40, 90, 1, 0];
function indiceMinorNum(array) {
    let littleNum = array[0];
    let indice = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < littleNum) {
            littleNum = array[i];
            indice = i;
        }
    }
    return indice;
}
console.log(indiceMinorNum(arrayForTest));