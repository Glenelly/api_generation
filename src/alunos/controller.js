import pool from '../../db.js';
import * as queries from './queries.js';

const getAlunos = (req, res) => {
    pool.query(queries.getAlunos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getAlunosPorId = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAlunosPorId, [id], (error, results) => {
        if (error) return res.status(500).send("Erro ao buscar aluno.");
        if (!results.rows.length) return res.status(404).send("Aluno não encontrado.");
        res.status(200).json(results.rows);
    });
};

const addAluno = (req, res) => {
    const { nome, idade, notaprimeirosemestre, notasegundosemestre, nomeprofessor, numerosala } = req.body;

    pool.query(queries.addAluno, [nome, idade, notaprimeirosemestre, notasegundosemestre, nomeprofessor, numerosala], (error) => {
        if (error) return res.status(500).send("Erro ao criar aluno.");
        res.status(201).send("Aluno criado com sucesso!");
    });
};

const removeAluno = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getAlunosPorId, [id], (error, results) => {
        if (error) return res.status(500).send("Erro ao buscar aluno.");
        if (!results.rows.length) return res.status(404).send("Aluno não encontrado.");

        pool.query(queries.removeAluno, [id], (error) => {
            if (error) return res.status(500).send("Erro ao remover aluno.");
            res.status(200).send("Aluno removido com sucesso!");
        });
    });
};

const updateAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade, notaprimeirosemestre, notasegundosemestre, nomeprofessor, numerosala } = req.body;

    if (!nome || !idade || !notaprimeirosemestre || !notasegundosemestre || !nomeprofessor || !numerosala) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    pool.query(queries.getAlunosPorId, [id], (error, results) => {
        if (error) return res.status(500).send("Erro ao buscar aluno.");
        if (!results.rows.length) return res.status(404).send("Aluno não encontrado.");

        pool.query(queries.updateAluno, [nome, idade, notaprimeirosemestre, notasegundosemestre, nomeprofessor, numerosala, id], (error) => {
            if (error) return res.status(500).send("Erro ao atualizar aluno.");
            res.status(200).send("Aluno atualizado com sucesso!");
        });
    });
};

export {
    getAlunos,
    getAlunosPorId,
    addAluno,
    removeAluno,
    updateAluno
};
