/* Para o terceiro exercício, calcule e imprima a média aritmética
dos valores contidos no array;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (i=0; i<numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma / numbers.length);

/* Baby steps
Ter o array
Ter o for etc para conseguir a soma desse array (mesma coisa que ex anterior)
Em vez de imprimir a soma, imprimir a soma dividida 
pelo numero de elementos no array ou seja o length */