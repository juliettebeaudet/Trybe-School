/* Para o segundo exercício, você deve somar todos os valores contidos no array
e imprimir o resultado*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (i=0; i<numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma);

/* Baby steps
Ter o array
Percorrer todos os elementos do array com um for
Criar uma nova var que vai receber a soma
Cada vez que é percorrido, deve adicionar o proximo valor do array nessa var soma
Imprimir o resultado quer dizer introduzir um console.log, mas fora do for*/