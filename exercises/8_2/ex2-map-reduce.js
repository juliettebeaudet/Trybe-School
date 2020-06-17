// 2. Crie uma string com os nomes de todas as pessoas autoras.

const assert = require("assert");

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function allNames() {
  // escreva seu código aqui
  //1) crio array sobre o qual vou trabalhar, com todos os nomes de autores
  const arrayAuthorNames = books.map((book) => `${book.author.name}`); 
  //2) crio a string dos autores separados por virgula, que vai ser depois o accumulator, posicionado como primeiro parametro do reduce
  const stringAuthorsComa = (result, name) => `${result}, ${name}`;
  //3) crio e retorno o template literals que retorna a string final desejada, com reduce dentro
  const finalString = `Nomes: ${arrayAuthorNames.reduce(stringAuthorsComa)}.`;
  return finalString;
}

assert.deepEqual(
  allNames(),
  "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft."
);
