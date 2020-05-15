/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo,
ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero
(OU SEJA, um num nao primo tem outro divisor que ele mesmo e 1).

Babysteps
1) interpretando 
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido
(aqui botar uma var adaptavel no começo);
Além disso, vai precisar de fazer uma checagem a cada iteração e
armazenar os resultados em algum lugar. 
2) algoritmo 
Deixar uma var onde testar os numeros para ver se sao primos ou nao.
Com um for que vai de 0 para esse numero testado, testar se aquele numero
tem divisor outro que 1 ou ele mesmo.
Se tiver divisor, coloca aquele divisor num array vazio preparado acima.
Se nao, nada acontece.
Depois, construir uma condicional para imprimir o resultado do teste daquele numero.
Esse if else vai concluir que nao tiver divisor (ou seja aquele array esta vazio), é primo.c
E imprimir uma frase relevante com console.log.
3) Colocando tudo isso em codigo para a maquina:*/

let primeOrNot = 97; //aqui é onde vamos testar se o programa funciona 
let factor = [];

for (i=0; i<primeOrNot; i+=1){
    if (primeOrNot % i == 0 && primeOrNot != i && i != 1){
    // se tem um numero que nao seja ele mesmo nem 1 que o divide, entao nao é primo.
        factor.push(i);
    }
}
// se nao tiver nada de divisor, é primo, caso contrario nao!
if (factor.length == 0){
    console.log("This is indeed a primary number!")
}
else {
    console.log("Nope - this is no prime number")
}
//uhuuuuuuuuul!!!
