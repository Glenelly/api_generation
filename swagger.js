import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Alunos',
            version: '1.0.0',
            description: 'Documentação da API de gerenciamento de alunos.',
        },
        servers: [
            {
                url: process.env.SERVER_URL || "https://api-generation-9113.onrender.com/api/generation"
            },
        ],
    },
    apis: ['./src/alunos/routes.js', './src/alunos/controller.js'], // Caminho para os arquivos com as anotações Swagger
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerDocs;
