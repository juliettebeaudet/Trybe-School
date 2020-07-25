// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const https = require('https');

const url = 'https://randomuser.me/api/';

const fetchURL = () => new Promise(function (resolve, reject) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    let userInfo = '';
    res.on('data', (data) => {
      userInfo += data;
    });
    res.on('error', reject);
    res.on('close', () => resolve(JSON.parse(userInfo).results[0]));
  });
});

module.exports = { fetchURL };
