/* Escreva um programa que, dado o custo de um produto e seu valor de venda,
calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto,
incide um imposto de 20% que deve ser considerado no cálculo do lucro.

Seu programa também deve emitir uma mensagem de erro e encerrar
caso algum dos seus valores de entrada seja menor que zero.*/

let custo = 2;
let venda = 4;
let lucroBrutoUnidade = venda - custo;
let lucroLiquido = (lucroBrutoUnidade) - (0.2*lucroBrutoUnidade); //podia ser também *0.8
let calculoLucroLiquidoMil = 1000*lucroLiquido;

if (custo > 0 && venda > 0) {
    console.log(calculoLucroLiquidoMil);
}
else {
    console.log("erro");
}

//"e encerrar" é apenas encerrar o fluxo
