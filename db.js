const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'alunos',
    password: 'Macacoaranha1$',
    port: 5432,
});


module.exports = pool
