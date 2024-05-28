import { academicSemesterNameCodeMapper } from './academicSemester.const';
import { TacademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TacademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const data = await AcademicSemester.create(payload);
  return data;
};
const getAllAcademicSemesters = async () => {
  const allAcademicSemester = await AcademicSemester.find();

  if (allAcademicSemester.length <= 0) {
    throw new Error('Academic Semester Not Found');
  }

  return allAcademicSemester;
};

export const AcademicSemesterService = {
  create: createAcademicSemesterIntoDB,
  getAllAcademicSemester: getAllAcademicSemesters,
};
