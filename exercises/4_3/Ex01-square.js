/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
*****
*****
*****
*****
*****
(aqui com n=5 mas pode ser qualquer)
Desenhando os Baby steps
1) interpretar: vai ter que ter duplo for 
2) algoritmo
Primeiro, tem que ter um for para imprimir a linha com n *
Segundo, tem que ter um for para dar consolelog nessa linha n vezes

3) codificar o algoritmo como segue:*/

let lineStars='';
let n = 5;

for (let i=0; i<n; i+=1) {
    lineStars += '*';
    console.log(lineStars);

    }



