import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import { academicSemesterValidations } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidations.create),
  AcademicSemesterController.createAcademicSemester,
);
router.get('/', AcademicSemesterController.getAllAcademicSemester);

export const AcademicSemesterRoutes = router;
