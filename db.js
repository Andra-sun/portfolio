const { Pool } = require('pg');

const pool = new Pool({
  user: 'andra', // Altere para o seu nome de usuário real
  host: 'localhost',
  database: 'porfolio_db', // Altere para o nome do seu banco de dados
  password: 'pitty', // Altere para a sua senha real
  port: 5432,
});


module.exports = {
  query: (text, params) => pool.query(text, params),
};
