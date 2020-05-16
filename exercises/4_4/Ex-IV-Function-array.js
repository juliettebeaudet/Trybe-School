// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

// let arrayForTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairooooooo', 'Joana'];

let arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Caiiiirooooooo', 'Joana'];

function longestName(array) {
    let longName = array[0];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > longName.length) {
            longName = array[i];
        }
    }
    return longName;
}
console.log(longestName(arrayTest));
