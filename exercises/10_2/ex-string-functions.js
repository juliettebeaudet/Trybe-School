// 4. Dentro de um mesmo arquivo, crie três funções.
// A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra.
// A terceira deve receber duas strings e concatená-las.

const uppercase = (str) => str.toUpperCase();

const firstLetter = (str) => str.split('')[0];

const concatenate = (str, string) => str + string;

module.exports = {
  uppercase,
  firstLetter,
  concatenate
};