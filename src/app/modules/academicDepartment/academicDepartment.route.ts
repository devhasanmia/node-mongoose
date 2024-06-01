import express from 'express';
import { academicDepartmentControllers } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
const router = express.Router();

router.post(
  '/create',
  validateRequest(academicDepartmentValidation.create),
  academicDepartmentControllers.createAcademicDepartment,
);

export const academicDepartmentRouter = router;
