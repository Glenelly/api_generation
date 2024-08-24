const express = require("express");
const alunosRoutes = require("./src/alunos/routes");
const swaggerDocs = require('./swagger');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/generation", alunosRoutes);

swaggerDocs(app);

app.listen(port, () => console.log(`app na porta ${port}`));
