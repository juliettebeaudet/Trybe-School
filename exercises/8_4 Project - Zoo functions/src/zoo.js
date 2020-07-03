/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');
const { animals, employees, prices, hours } = require('./data');

function animalsByIds(...ids) {
  const animaux = [];
  ids.forEach(idArgument =>
    animaux.push(...animals.filter(animal => animal.id === idArgument)));
  return animaux;
}

function animalsOlderThan(animal, age) {
  const findSpecies = animals.find(anim => anim.name === animal);
  const checkAge = findSpecies.residents.every(res => res.age >= age);
  return checkAge;
}

function employeeByName(employeeName) {
  const isStaff = employees.find(person =>
      person.firstName === employeeName || person.lastName === employeeName);
  return isStaff || {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const managerOrNot = employees.some(person =>
    person.managers.find(ids => ids === id));
  return managerOrNot;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newStaff = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newStaff);
}

function animalCount(species) {
  // 1. armazenar num de residentes quando param species é name
  // 2. armazenar objeto acumulando species
  // 3. condicionar o retorno de um ou outro dependendo da existência de param species
  const findByName = animals.find(animal => animal.name === species);
  const all = (list, { name, residents }) => {
    list[name] = residents.length;
    return list;
  };
  return species ? findByName.residents.length : animals.reduce(all, {});
}

function entryCalculator(entrants) {
  // 1. condicionar para retornar 0 se entrants n existir ou for um objeto vazio
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  // 2. nos outros casos, tem que retornar quantidade*preço para cada idade
  // sabendo que entrants price são dois objetos com mesmas chaves
  const accPrice = (base, eachAge) =>
  base + (entrants[eachAge] * prices[eachAge]);
  const arrayPrices = Object.keys(prices);
  return arrayPrices.reduce(accPrice, 0);
}

function animalMap(options) {
  // seu código aqui
  // primeiro test sem param
  const arrayCities = ['NE', 'NW', 'SE', 'SW'];
  const animalsPerCity = {};
  arrayCities.forEach((city) => {
    animalsPerCity[city] = animals.filter(animal => animal.location === city).map(obj => obj.name);
  });
  if (!options) return animalsPerCity;
  // segundo test com options = {(includeNames: true)}
  const { includeNames = false, sorted = false, sex = undefined } = options;
  const animalsEachCity = {};
  if (includeNames === true) {
    arrayCities.forEach((city) => {
      animalsEachCity[city] = animals
        .filter(animal => animal.location === city)
        .map((obj) => {
          let allResidents = obj.residents;
          // quarto e quinto test com param sex
          if (sex) {
            allResidents = allResidents.filter(res => res.sex === sex);
          }
          if (sorted) return { [obj.name]: allResidents.map(res => res.name).sort() };
          return { [obj.name]: allResidents.map(res => res.name) };
        });
    });
    return animalsEachCity;
  }
  return animalsPerCity;
}

function schedule(dayName) {
  // 1. preparar retorno para cada dia com forEach e template string, inclusive monday closed
  // 2. preparar retorno condicionado segundo se tiver dayName param ou não
  const allDays = Object.keys(hours);
  const eachDay = {};
  allDays.forEach((day) => {
    if (day !== 'Monday') {
      eachDay[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    } else {
      eachDay[day] = 'CLOSED';
    }
  });
  if (dayName === undefined) {
    return eachDay;
  }
  return ({ [dayName]: eachDay[dayName] });
}

function oldestFromFirstSpecies(id) {
  // 1. armazenar o id da primeira espécie de animal gerenciado por funcionário via id dele
  const idFirstManagedSpecies = employees.find(person => id === person.id).responsibleFor[0];
  // 2. armazenar o array de residentes dessa espécie
  const findSpecies = animals.find(animal => idFirstManagedSpecies === animal.id).residents;
  // 3. ordenar por idade decrescente de animais
  const olderAnimals = findSpecies.sort(function (a, b) {
    return b.age - a.age;
  });
  // 4. transformar o objeto do animal mais velho em array que é o retorno final desejado
  const { name, sex, age } = olderAnimals[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  const eachPublicArray = Object.keys(prices);
  eachPublicArray.forEach((key) => {
    prices[key] = Math.round((prices[key] * 100) * (1 + (percentage / 100))).toFixed(2) / 100;
  });
}


function employeeCoverage(idOrName) {
// 1. retorno quando tiver param idOrName
  if (idOrName !== undefined) {
    const findPerson = employees.find(person =>
    idOrName === person.id || idOrName === person.firstName || idOrName === person.lastName);
    const fullName = `${findPerson.firstName} ${findPerson.lastName}`;
    const managedAnimalsIds = findPerson.responsibleFor;
    const managedSpeciesArray = managedAnimalsIds.map(ids =>
    animals.find(animal => animal.id === ids).name);
    const returnWithParam = { [fullName]: managedSpeciesArray };
    return returnWithParam;
  }
// 2. retorno quando n tiver param idOrName (else implicito para agradar CC)
  const all = {};
  employees.forEach((pers) => {
    const stringFullName = `${pers.firstName} ${pers.lastName}`;
    all[stringFullName] = pers.responsibleFor.map(
      ids => animals.find(anim => anim.id === ids).name,
    );
  });
  return all;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
