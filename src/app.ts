import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.router';
const app: Application = express();

// Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/student', studentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
