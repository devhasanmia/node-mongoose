import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
const router = express.Router();

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log('Thamo Tomar tikit Daw');
  console.log(req.body);
  next()
};

router.post('/create-user', shenaBahini, UserController.createStudent);

export const UserRouter = router;
