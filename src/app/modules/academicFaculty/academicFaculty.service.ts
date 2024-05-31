import { TAcademicFaculty } from './academicFaculty.interface';
import AcademicFaculty from './academicFaculty.model';

const createAcademicFaculty = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFaculty = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFaculty = async (_id: string, body?: any) => {
  const result = await AcademicFaculty.findOne({ _id });
  return result;
};

const updateAcademicFacultyById = async (
  id: string,
  updatedDetails: TAcademicFaculty,
) => {
  const existingFaculty = await AcademicFaculty.findOne({ _id: id });
  if (!existingFaculty) {
    throw new Error('Faculty does not exist');
  }
  const updatedFaculty = await AcademicFaculty.findByIdAndUpdate(
    id,
    updatedDetails,
    { new: true },
  );
  if (!updatedFaculty) {
    throw new Error('Faculty not updated');
  }
  return updatedFaculty;
};

export const AcademicFacultyServices = {
  create: createAcademicFaculty,
  getAll: getAllAcademicFaculty,
  getSingle: getSingleAcademicFaculty,
  update: updateAcademicFacultyById,
};
