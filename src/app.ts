/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Application, RequestHandler } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
const app: Application = express();

// Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const tests: RequestHandler = async (req, res) => {
  Promise.reject();
  console.log("Test");
};

app.get('/', tests);

app.use('/api/v1', router);


app.use(globalErrorHandler);
app.use(notFound);

export default app;
