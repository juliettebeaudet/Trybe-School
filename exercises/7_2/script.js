const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2.
// Essa função deve possuir três parâmetros, sendo eles:
// o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// function addMorning(objeto, chave, valor){
// const addKey = lesson1turno;
// const addValue = lesson1.turno;

// const adAll = Object.assign(lesson2, addKey, addValue);

// }

// const adMorning = Object.assign(lesson2, Object.keys(lesson1[3]), Object.values(lesson1[3]));
// console.log(lesson2);

// console.log(lesson1['turno']);


// 2. Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.

function listKeys(objeto){
  const arrayKeys = Object.keys(objeto);
  return arrayKeys;
}
console.log(listKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.
function sizeArray(objeto){
  const arrayObject = Object.keys(objeto);
  return arrayObject.length;
}
console.log(sizeArray(lesson1));

