// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let arrayForTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function longestName(array) {
    let indice = 0;
    for (let i = 0; i < array.length; i += 1) {
        let array1 = "" + array[i];
        let array2 = "" + array[i+1];
        if (array1.length > array2.length) {
            indice = i;
        }
    }
    return array[indice];
}
console.log(longestName(arrayForTest));
