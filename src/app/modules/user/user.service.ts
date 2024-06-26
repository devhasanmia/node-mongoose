import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { generateStudentId } from './user.utils';
import AcademicSemester from '../academicSemester/academicSemester.model';
import User from './user.model';
import Student from '../student/student.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.defaultPassword as string);
  userData.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  if (!admissionSemester) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid academic semester');
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    userData.id = await generateStudentId(admissionSemester);

    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    throw new Error(err);
  } finally {
    session.endSession();
  }
};



export const UserServices = {
  createStudentIntoDB,
};
