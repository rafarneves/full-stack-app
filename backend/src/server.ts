import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(8888, () => {
    console.log("Server iniciado com sucesso! ✅");
});