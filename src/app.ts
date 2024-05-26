import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { UserRouter } from './app/modules/user/user.router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

// Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/user', UserRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

export default app;
