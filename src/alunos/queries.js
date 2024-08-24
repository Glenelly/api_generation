const getAlunos = 
    "SELECT * FROM infoalunos";

const getAlunosPorId = 
    "SELECT * FROM infoalunos WHERE id = $1";

const addAluno = 
    "INSERT INTO infoalunos (nome, idade, notaprimeirosemestre, notasegundosemestre, nomeprofessor, numerosala) VALUES ($1, $2, $3, $4, $5, $6)";

const removeAluno = 
    "DELETE FROM infoalunos WHERE id = $1";

const updateAluno = 
    "UPDATE infoalunos SET nome = $1, idade = $2, notaprimeirosemestre = $3, notasegundosemestre = $4, nomeprofessor = $5, numerosala = $6 WHERE id = $7";

export {
    getAlunos,
    getAlunosPorId, 
    addAluno, 
    removeAluno,
    updateAluno
};
