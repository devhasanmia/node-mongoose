import express from 'express';
import { UserController } from './user.controller';

import { studentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRouter = router;
