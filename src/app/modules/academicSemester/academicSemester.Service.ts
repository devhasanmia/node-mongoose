import { TacademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TacademicSemester) => {
  const data = await AcademicSemester.create(payload);

  return data;
};

export const AcademicSemesterService = {
  create: createAcademicSemesterIntoDB,
};
