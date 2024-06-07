import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import { academicSemesterValidations } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create',
  validateRequest(academicSemesterValidations.create),
  AcademicSemesterController.createAcademicSemester,
);
router.get('/', AcademicSemesterController.getAllAcademicSemesters);
router.get('/:id', AcademicSemesterController.getAcademicSemesterById);
router.patch(
  '/:id',
  validateRequest(academicSemesterValidations.update),
  AcademicSemesterController.updateAcademicSemesterById,
);
router.delete('/:id', AcademicSemesterController.deleteAcademicSemesterById);

export const AcademicSemesterRoutes = router;
