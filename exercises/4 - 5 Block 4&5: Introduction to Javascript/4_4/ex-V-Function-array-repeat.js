// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.
/*Babysteps: criar function com for que percorre todos etapas de array. 
Com condicional para comparar se os valores do array sao iguais.
Problema: nao pode ser um por um, cada num deve comparar com todos os outros, 
tem que ser for dentro de for. Usar uma var vazia para acumular o n° de repeticoes.
Usar outra var vazia para comparar quem tem mais repeticoes, via estrutura if.
Return o numero que corresponde com esse valor mais repetido.*/

let arrayForTest = [2, 3, 2, 5, 8, 8, 8];
function mostRepeatedArrayValue(array) {
    let repetitions = 0;
    let moreRepetitions = 0;
    let repeatedNumber = 0;
    for (let i in array) {
        for (let n in array) {
            if (array[i] == array[n]) {
                repetitions += 1;
            }
            if (repetitions > moreRepetitions) {
                repetitions = moreRepetitions;
                repeatedNumber = array[i];
            }
        }
        return repeatedNumber;
    }
}
    console.log(mostRepeatedArrayValue(arrayForTest));