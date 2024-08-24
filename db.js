import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'alunos',
    password: 'Macacoaranha1$',
    port: 5432,
});

export default pool;
