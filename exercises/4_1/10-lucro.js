/* Escreva um programa que, dado o custo de um produto e seu valor de venda,
calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto,
incide um imposto de 20% que deve ser considerado no cálculo do lucro.

Seu programa também deve emitir uma mensagem de erro e encerrar
caso algum dos seus valores de entrada seja menor que zero.*/

let custo = 12;
let venda = 20;
let lucroBruto = venda - custo;
let lucroLiquido = (lucroBruto) - (0.2*lucroBruto);
let calculo = 1000*lucroLiquido;

if (custo > 0 || venda > 0) {
    console.log(calculo);
}
else {
    console.log("erro");
}



switch (lucroLiquido) {
    case (custo > 0 || venda > 0):
        console.log(calculo);
        break;
    default:
        console.log("Error, closing");
        break;
}


