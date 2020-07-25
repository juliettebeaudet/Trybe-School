// Crie uma função que receba um número inteiro N e retorne o somatório
//de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.
 //valor de teste

function accumulation(n){
    let accumulatedNumber = 0; 
    for (let i=1; i<=n; i+=1){
accumulatedNumber += i;
    }
    return accumulatedNumber;
}
console.log(accumulation(5)); //valor de teste n=5;
