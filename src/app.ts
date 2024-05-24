import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRouter } from './app/modules/user/user.router';
const app: Application = express();

// Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/user', UserRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
