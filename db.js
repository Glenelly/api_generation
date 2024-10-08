import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'alunos',
    password: process.env.DB_PASSWORD || 'Macacoaranha1$',
    port: process.env.DB_PORT || 5432,
});

export default pool;
