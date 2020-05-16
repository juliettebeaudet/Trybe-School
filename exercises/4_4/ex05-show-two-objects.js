// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves)
//do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
info.recorrente = "Sim";

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}
// PRIMEIRA TENTATIVA COM FOR
// for (let chave in info){
//     console.log(info[chave] + " e " + info2[chave]);
// }
// if (info.recorrente == info2.recorrente){
//     console.log("Ambos recorrentes")
// }

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);

if (info.recorrente === info2.recorrente){
    console.log("Ambos recorrentes");
}


// Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!