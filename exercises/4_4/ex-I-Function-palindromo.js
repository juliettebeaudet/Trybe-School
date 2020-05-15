// Crie uma função que receba uma string e retorne true se for um palíndromo ,
//ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false

/*
Babysteps do algoritmo
- declarar uma variavel de string onde colocar a palavra testada
- fazer uma funçao que vai percorrer ao contrario a palavra e guardar em outra var  
de string a versao invertida
- escrever um console que, se essas duas var fossem iguais, mostra true, else, false.
*/

let word = "kayak"; //aqui escreve a palavra a ser testada
let reverseWord = "";

function verificaPalindrome(){
for (let i = word.length-1; i>=0; i -= 1){
reverseWord += word[i];
}

if (word == reverseWord){
    return true
}
    else {
    return false
    }
}
console.log(verificaPalindrome());
