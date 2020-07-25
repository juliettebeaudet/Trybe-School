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
3) codificar o algoritmo como segue: 

let stars = ['*','*','*','*','*','*','*'];
let moreStars = "";
let n=5;

for (i=0; i<n; i += 1) {
    moreStars += stars[i];
console.log(moreStars);
}

Essa funciona!
Mas achei outro jeito de fazer sem array */ 

let lineStars='';
let n = 5;

for (let i=0; i<n; i+=1) {
    lineStars += '*';
    console.log(lineStars);

    }

/* para cada repeticao, adicionar um * na linha.
e para cada repeticao, imprimir o resultado. 
Ou seja, primeira repeticao imprime *, a segunda ** etc, 
arrumar para ter 5 repeticoes no total.
*/
