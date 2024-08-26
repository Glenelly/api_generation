import express from "express";
import cors from "cors";
import alunosRoutes from "./src/alunos/routes.js";
import swaggerDocs from './swagger.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/generation", alunosRoutes);

swaggerDocs(app);

app.listen(port, () => console.log(`app na porta ${port}`));
