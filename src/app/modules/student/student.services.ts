import Student from './student.model';

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  let searchTerm = '';
  const queryObj = { ...query };
  const searchAbleFields = [
    'email', 
    'name.firstName',
    'name.middleName',
    'name.lastName',
    'gender',
  ];

  if (query.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  const searchQuery = Student.find({
    $or: searchAbleFields.map((field) => ({
      [field]: {
        $regex: searchTerm,
        $options: 'i',
      },
    })),
  });

  const excludeFields = ['searchTerm'];

  excludeFields.forEach((field) => delete queryObj[field]);

  const result = await searchQuery
    .find(queryObj)
    .populate('academicFaculty')
    .populate('user')
    .populate('admissionSemester');

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
