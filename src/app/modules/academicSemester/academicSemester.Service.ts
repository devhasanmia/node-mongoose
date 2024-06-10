import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { academicSemesterNameCodeMapper } from './academicSemester.const';
import { TacademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemester = async (semesterDetails: TacademicSemester) => {
  if (
    academicSemesterNameCodeMapper[semesterDetails.name] !==
    semesterDetails.code
  ) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }
  const createdSemester = await AcademicSemester.create(semesterDetails);
  return createdSemester;
};

const getAllAcademicSemesters = async () => {
  const academicSemesters = await AcademicSemester.find();

  if (academicSemesters.length <= 0) {
    throw new AppError(404, 'Academic Semesters Not Found');
  }

  return academicSemesters;
};

const getAcademicSemesterById = async (id: string) => {
  const academicSemester = await AcademicSemester.findById(id);
  if (!academicSemester) {
    throw new AppError(404, 'No academic semester found');
  }
  return academicSemester;
};

const updateAcademicSemesterById = async (
  id: string,
  updatedDetails: TacademicSemester,
) => {
  if (
    academicSemesterNameCodeMapper[updatedDetails.name] !== updatedDetails.code
  ) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }

  const existingSemester = await AcademicSemester.findOne({
    year: updatedDetails.year,
    name: updatedDetails.name,
  });

  if (existingSemester) {
    throw new AppError(409, 'Semester already exists, no update performed');
  }

  const updatedSemester = await AcademicSemester.findByIdAndUpdate(
    id,
    updatedDetails,
    {
      new: true,
    },
  );
  if (!updatedSemester) {
    throw new AppError(404, 'No academic semester found');
  }

  return updatedSemester;
};

const deleteAcademicSemesterById = async (id: string) => {
  const academicSemester = await AcademicSemester.findByIdAndDelete(id);
  if (!academicSemester) {
    throw new AppError(404, 'No academic semester found');
  }
  return null;
};

export const AcademicSemesterService = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getAcademicSemesterById,
  updateAcademicSemesterById,
  deleteAcademicSemesterById,
};
