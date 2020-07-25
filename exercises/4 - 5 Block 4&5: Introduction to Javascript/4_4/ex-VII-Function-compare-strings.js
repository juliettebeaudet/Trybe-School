// Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word. 
// Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be");
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan");
// Retorno esperado: false

/*Baby step algorithm: percorrer a palavras mais curta com um for.
Se a ultima posiçao for a mesma um por um, tem o mesmo final de palavras.
Tem que percorrar a palavra mais curta para nao passar e começar a retornar false
porque o começo é diferente!
Adicionando: tem que ter uma var boolean com uma situação inicial, true.*/

function checkEndWord(word, ending) {
    let sameEnd = true;
    for (i = 1; i <= ending.length; i += 1) {
        if (word[word.length - i] !== ending[ending.length - i]) {
            sameEnd = false;
        }
    }
    return sameEnd;
}
console.log(checkEndWord("trybe", "be"));
console.log(checkEndWord("joaofernando", "fernan"));
console.log(checkEndWord("simplement", "ment"));