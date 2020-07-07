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

// 3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.

test('Quando o usuário é encontrado', async () => {
  expect.assertions(1);
  const user = await getUserName(4);
  expect(user).toBe('Mark');
});

test('Erro quando o usuário n é encontrado', async () => {
  expect.assertions(1);
  try {
    await getUserName(2);
  } catch (error) {
    expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' });
  }
});
