/*3- Agora inverta o lado do triângulo. Por exemplo:
    *
   **
  ***
 ****
*****

/* Desenhando os Baby steps
1) interpretar:
na primeira iteracao, tem que imprimir 4 espaços e 1*
na segunda, 3esp e 2*
terceira 2esp e 3*
quarta 1esp e 4*
quinta 0esp 5*.
OU é uma suma de duas piramides:
uma decrescente com vazios repetida 4vezes, uma de estrelas como no exercicio anterior
com n=5. 
2) Algoritmo
Dois for: 
1 que vai imprimindo os espaços do maior para o menor
Outro que reusa o trabalho precedente com os asteriscos
um console.log que concatena as duas var geradas?
3) Colocando no codigo, graças a gabarito de outro aluno:*/

let n = 5;
for (k=1;k<=n;k+=1){
    let space = '';
    for (j=n-k;j>0;j-=1){
        space += " ";
    }
let star='';
for (i=n-k;i<n;i+=1) {
    star += "*";
}
console.log(space+star);
}