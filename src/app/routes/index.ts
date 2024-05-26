import { Router } from 'express';
import { studentRouter } from '../modules/student/student.router';
import { UserRouter } from '../modules/user/user.router';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/students',
    route: studentRouter,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
