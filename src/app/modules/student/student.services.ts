import Student from './student.model';

const getAllStudentFromDB = async () => {
  const result = await Student.find().populate('academicFaculty').populate("user");
  return result;
};

const getSingleStudentFromDB = async (_id: string) => {
  const result = await Student.findOne({ _id });
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
