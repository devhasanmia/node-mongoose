import express from 'express';
import { StudentController } from './student.controllers';
const router = express.Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getSingleStudent);
router.delete('/:id', StudentController.deleteStudnet);

export const studentRouter = router;
