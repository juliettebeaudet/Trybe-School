//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

info.recorrente = "Sim";

for (let chave in info) {
    console.log(info[chave]);
}
