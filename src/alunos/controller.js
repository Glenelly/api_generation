const pool = require('../../db');
const queries = require('./queries');

const getAlunos = (req, res) => {
    pool.query(queries.getAlunos, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    });
};

const getAlunosPorId = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAlunosPorId, [id], (error, results) =>{
        res.status(200).json(results.rows);
    })
}

const addAluno = (req, res) => {
    const { nome, idade, notaprimeirosemestre, 
        notasegundosemestre, nomeprofessor, numerosala} = req.body;

    pool.query(queries.addAluno, [nome, idade, notaprimeirosemestre, 
        notasegundosemestre, nomeprofessor, numerosala], (error, results) =>{
            if (error) throw error;
            res.status(201).send("Alunos criado com sucesso!")
            console.log("Aluno criado!")
        });
}

const removeAluno = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getAlunosPorId,[id], (error, results) => {
        const nenhumAlunoEncontrado = !results.rows.length;
        if (nenhumAlunoEncontrado){
            res.send("Aluno não existe no banco de dados.");
        }

    pool.query(queries.removeAluno, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Aluno removido com sucesso!")
    } );
    } );
}

const updateAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade, notaprimeirosemestre, notasegundosemestre, nomeprofessor, numerosala } = req.body;

    if (!nome || !idade || !notaprimeirosemestre || !notasegundosemestre || !nomeprofessor || !numerosala) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    pool.query(queries.getAlunosPorId, [id], (error, results) => {
        if (error) {
            return res.status(500).send("Erro ao buscar aluno.");
        }
        const nenhumAlunoEncontrado = !results.rows.length;
        if (nenhumAlunoEncontrado) {
            return res.status(404).send("Este aluno não existe no banco de dados.");
        }

        pool.query(queries.updateAluno, [nome, idade, notaprimeirosemestre, notasegundosemestre, nomeprofessor, numerosala, id], (error, results) => {
            if (error) {
                return res.status(500).send("Erro ao atualizar aluno.");
            }
            res.status(200).send("Aluno atualizado com sucesso!");
        });
    });
}


module.exports = {
    getAlunos,
    getAlunosPorId,
    addAluno,
    removeAluno,
    updateAluno
}