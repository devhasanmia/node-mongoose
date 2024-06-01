import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(academicFacultyValidation.create),
  AcademicFacultyController.create,
);

router.get('/', AcademicFacultyController.getAll);

router.get('/:id', AcademicFacultyController.getSingle);
router.put(
  '/:id',
  validateRequest(academicFacultyValidation.update),
  AcademicFacultyController.update,
);
export const AcademicFacultyRoutes = router;
