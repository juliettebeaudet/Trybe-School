// O código a seguir simula uma chamada ao banco de dados para buscar usuários.
// O resultado dessa busca é uma *Promise*, que é utilizada pelo método `getUserName`.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

// console.log(findUserById('4'));
// returbs Promise { { name: 'Mark' } }
// console.log(getUserName('4'));
// returns Promise { <pending> }

// 2. Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName
// para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário
// não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users,
// para saber quais IDs existem.

// describe('Quando o usuário é encontrado', () => {
//   test('Retorne usuários', () => {
//     // expect.assertions(2);
//     return getUserName('4').then(user => {
//       expect(user.name).toEqual('Mark');
//     });
//   });
// });
// return error, undefined, explicado pelo console.log acima

// describe('Quando o usuário não é encontrado', () => {
//   test('Retorne usuários', () => {
//     return getUserName('2').catch(error =>
//       expect(error).toEqual({ error: 'Nenhum usuário com esse ID.' })
//     );
//   });
// });