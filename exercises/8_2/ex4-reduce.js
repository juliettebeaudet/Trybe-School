// 4. Calcule a média de idade que as pessoas autoras tinham 
// quando seus respectivos livros foram lançados.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = 43;

function averageAge() {
  // escreva seu código aqui
  //1) crio array de todas idades dos autores quando publicaram o livro
  const arrayReleaseAge = books.map((book) => book.releaseYear - book.author.birthYear); 
  //2) armazeno o acumulador desse array
  const accAges = arrayReleaseAge.reduce((age, index) => age + index);
  //3) retorno a média, que é o acumulador divido pelo total de autores (ou seja o tamanho do arrayReleaseAge)
  const averageAge = accAges / arrayReleaseAge.length;
  return averageAge;
}

assert.equal(averageAge(), expected_result);
