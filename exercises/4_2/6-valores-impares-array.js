/* Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numValoresImpares = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        numValoresImpares ++;
    }
}
if (numValoresImpares == 0){
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log(numValoresImpares);
}

/* Baby steps
Jà temos o array definido.
Vamos precisar percorrer o array para testar a cada valor se é par ou nao, entao tem um for.
Vamos ter que ficar contando isso, entao tem que criar uma var vazia numérica.
A cada iteraçao, tem que testar se (if) o valor é par ou nao. Caso sim, é +1 valor
contado na var vazia. Nao precisa de 'caso nao' pois acontece nada.
Se essa contagem for vazia, vai ter a mensagem. Se nao for vazia, vai imprimir a var que é 
a contagem final.
 */




