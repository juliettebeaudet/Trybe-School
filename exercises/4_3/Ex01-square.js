/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */

/* Desenhando os Baby steps
1) interpretar
Queremos o resultado seguinte
*****
*****
*****
*****
*****
(aqui com n=5 mas pode ser qualquer)
O quadro vai em dois eixos de tamanho igual. n para direita, n para baixo.
Vai precisar um array iterado.
O numero de elemento do array vai ter que ser igual ao numero de iteraçoes
para imprimir mais linhas.
Vai precisar de uma var que vai ser aumentada com todos esses * . 
imprimir no final vai ser com console.log

2) algoritmo
definir array com estrelas
definir for que, percorrendo esse array, imprime esse mesmo array (isso faz a vertical)
uma var vazia de string vai receber cada elemento ou seja * do array, mas o numero de
vezes correspondendo com a length do array. 
correspondendo com o length desse array, indo cada vez na linha 

3) codificar o algoritmo como segue: */

let stars = ['*','*','*','*','*','*','*'];
var moreStars = "";

for (i=0; i<5; i += 1) {
    moreStars += stars[i];
console.log(moreStars);
}
