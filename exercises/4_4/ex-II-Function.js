// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

/* Baby steps algoritmo: Refatorar o exercicio do outro dia
E mudar entre o valor do array e o indice que queremos
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = numbers[0];
for (i=0; i<numbers.length; i++) {
    if(numbers[i] > maiorNum){
            maiorNum = numbers[i];
         }
}
console.log(maiorNum);
*/
let arrayForTest = [2, 3, 40, 90, 10, 49];
function indiceBiggestNum(array) {
    let biggestNum = 0;
    let indice = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > biggestNum) {
            biggestNum = array[i];
            indice = i;
        }
    }
    return indice;
}
console.log(indiceBiggestNum(arrayForTest));


