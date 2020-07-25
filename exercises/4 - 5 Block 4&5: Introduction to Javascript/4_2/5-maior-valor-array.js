/* Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = numbers[0];

for (i=0; i<numbers.length; i++) {
    if(numbers[i] > maiorNum){
            maiorNum = numbers[i];
         }
}

console.log(maiorNum);

/* Baby steps
Jà temos o array definido.
Antes de comparar, para poder comparar, vai ter que percorrer cada valor do array,
isso é com um for.
Imprimir no final, quer dizer que vai ter console de uma variavel que contem o maior valor.
Entao logo no começo, criar essa var vazia.
Essa var tem que conter o maior valor do array. Vamos ter que comparar dois por dois e
avançando, por isso tem que ter algo que peça para o programa que a cada iteraçao,
ele substitue o valor da var vazia pelo maior valor encontrado.
Em linguagem humana: se esse valor agora percorrido é maior do que o valor atualmente contido
na minha var, entao coloque esse valor percorrido na minha var no lugar da anterior.
Assim, quando acabar a açao do for, a var vai conter o maior valor do array.
Agora é apenas imprimir com console.log fora do for essa var. 
Dava para fazer melhor: declarar a var como o primeiro valor do array, e nao 0,
caso os valores contidos no array fossem negativos.
 */