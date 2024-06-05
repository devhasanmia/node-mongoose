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
router.get(
  '/',
  academicDepartmentControllers.getAllAcademicDepartment,
);
router.get(
  '/:id',
  academicDepartmentControllers.getSingleAcademicDepartment,
);


router.put('/:id', validateRequest(academicDepartmentValidation.update), academicDepartmentControllers.updateAcademicDepartment);
export const academicDepartmentRouter = router;
