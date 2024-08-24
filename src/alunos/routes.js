import { Router } from 'express';
import * as controller from './controller.js';

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna todos os alunos
 *     responses:
 *       200:
 *         description: Lista de alunos
 */
router.get("/", controller.getAlunos);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Adiciona um novo aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *               notaprimeirosemestre:
 *                 type: number
 *               notasegundosemestre:
 *                 type: number
 *               nomeprofessor:
 *                 type: string
 *               numerosala:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 */
router.post("/", controller.addAluno);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Retorna um aluno específico pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do aluno
 *       404:
 *         description: Aluno não encontrado
 */
router.get("/:id", controller.getAlunosPorId);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualiza um aluno existente pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *               notaprimeirosemestre:
 *                 type: number
 *               notasegundosemestre:
 *                 type: number
 *               nomeprofessor:
 *                 type: string
 *               numerosala:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *       404:
 *         description: Aluno não encontrado
 */
router.put("/:id", controller.updateAluno);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Remove um aluno pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno removido com sucesso
 *       404:
 *         description: Aluno não encontrado
 */
router.delete("/:id", controller.removeAluno);

export default router;
