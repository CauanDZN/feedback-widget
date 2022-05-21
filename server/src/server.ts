import { prisma } from './prisma';
import {routes} from './routes';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// GET - Buscar Info
// POST = Cadastrar INFO
// PUT = Atualizar INFO
// PATCH = Atualizar uma informação única
// DELETE = Deletar uma INFO

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!')
});
