import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import Student from './student.model';
import User from '../user/user.model';

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
    delete queryObj.searchTerm;
  }

  const searchQuery = {
    $or: searchAbleFields.map((field) => ({
      [field]: {
        $regex: searchTerm,
        $options: 'i',
      },
    })),
  };

  const result = await Student.find({
    ...queryObj,
    ...searchQuery,
  })
    .populate('academicFaculty')
    .populate('user')
    .populate('admissionSemester');

  return result;
};

const getSingleStudentFromDB = async (_id: string) => {
  const result = await Student.findOne({ _id }).populate('user');
  if (result?.isDeleted) {
    throw new AppError(404, 'Student does not exist');
  }
  return result;
};

const deleteStudentById = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const studentExist = await Student.findById(id).session(session);
    if (!studentExist) {
      throw new AppError(404, 'Student does not exist');
    }

    const deletedStudent = await Student.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
      },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(400, 'Student not deleted');
    }

    const deleteUser = await User.findByIdAndUpdate(
      studentExist.user,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteUser) {
      throw new AppError(400, 'User not deleted');
    }

    await session.commitTransaction();
    return deletedStudent;
  } catch (error: any) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentById,
};
