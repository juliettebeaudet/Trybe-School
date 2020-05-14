/*2- Para o segundo exercício, faça o mesmo que antes,
mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n=5
*
**
***
****
*****

/* Desenhando os Baby steps
1) interpretar: array de *, for, outra var, console dentro
2) algoritmo
declarar array com estrelas
iterar esse array até 5 posiçoes
criar uma var de string que vai receber uma estrela a cada iteraçao ou seja cada 
valor de array (todas sao *) durante 5 repetiçoes
colocar o console dentro do for para ter essa progressao de imprimir de 1* a 5*
3) codificar o algoritmo como segue: */

let stars = ['*','*','*','*','*','*','*'];
var moreStars = "";

for (i=0; i<5; i += 1) {
    moreStars += stars[i];
console.log(moreStars);
}

