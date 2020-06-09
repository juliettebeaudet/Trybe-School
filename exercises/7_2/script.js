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

function addEntryToObject(objectDestination, newKey, newValue){
const objectOrigin = {
  newKey: newValue,
}
const addEntry = Object.assign(objectDestination, objectOrigin);
return addEntry;
}
console.log(addEntryToObject(lesson2, 'turno', lesson1.turno));
console.log(lesson1[3]);

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

// 4. Crie uma função para listar os valores de um objeto.
// Essa função deve receber um objeto como parâmetro.
function listValues(objeto){
  const arrayValues = Object.values(objeto);
  return arrayValues;
}
console.log(listValues(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 

// const allLessons = 