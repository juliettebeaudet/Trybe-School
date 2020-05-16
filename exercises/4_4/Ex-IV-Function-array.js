// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let arrayForTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairooooooo', 'Joana'];
function longestName(array) {
    let index = 0;
    for (let i = 0; i < array.length; i += 1) {
        let array1 = "" + array[i];
        let array2 = "" + array[i+1];
        if (array1.length > array2.length) {
            index = i;
        }
    }
    return array[index];
}
console.log(longestName(arrayForTest));
