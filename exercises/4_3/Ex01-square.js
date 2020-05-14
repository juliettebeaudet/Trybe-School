/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
*****
*****
*****
*****
*****
(aqui com n=5 mas pode ser qualquer)
Desenhando os Baby steps
1) interpretar: array de *, for com n>1, outra var, console
2) algoritmo
declarar array com estrelas
iterar esse array até 5 posiçoes
criar uma var de string que vai receber uma estrela a cada iteraçao ou seja cada 
valor de array (todas sao *) durante 5 repetiçoes
colocar o console dentro do for para ter essa progressao de imprimir de 1* a 5*
3) codificar o algoritmo como segue:

2) algoritmo
definir array com estrelas
definir for que, percorrendo esse array, imprime esse mesmo array (isso faz a vertical)
uma var vazia de string vai receber cada elemento ou seja * do array, mas o numero de
vezes correspondendo com a length do array. 
correspondendo com o length desse array, indo cada vez na linha 

3) codificar o algoritmo como segue: */

let stars = ['*','*','*','*','*','*','*'];
var moreStars = "";

for (i=1; i<6; i += 1) {
    moreStars += stars[i];
console.log(moreStars);
}
