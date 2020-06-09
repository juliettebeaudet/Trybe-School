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

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 

const allLessons = {};
const makeAllLessons = Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5,
// crie uma função que retorne o número total de estudantes em todas as aulas.

function numberStudents(obj, key){
  let counter = 0;
  const keyLessons = Object.keys(obj);
  for (eachlesson in keyLessons){
    counter += obj[keyLessons[eachlesson]][key]; //para acessar o valor numérico do objeto dentro do objeto
  }
  return counter;
}
console.log(numberStudents(allLessons, 'numeroEstudantes'));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function getValueByNumber(lesson, i){
const allValues = Object.values(lesson);
const valuePosition = allValues[i];
return valuePosition;
}
console.log(getValueByNumber(lesson1, 2)); //Output: 'Matématica'

// 8. Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles:
// o objeto, o nome da chave e o valor da chave. 

function verifyPair(lesson, keyLesson, valueLesson){
  let verify = true;
  if (lesson[keyLesson] !== valueLesson){
    verify = false;
  }
  return verify;
}
console.log(verifyPair(lesson3, 'turno', 'noite')); //true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); //false

//do the same in on line now: arrow function and ternary
const verifyPairArrow = (curso, chave, valor) => curso[chave] === valor ? true:false;
console.log(verifyPairArrow(lesson3, 'turno', 'noite'));
console.log(verifyPairArrow(lesson3, 'materia', 'Maria Clara'));

