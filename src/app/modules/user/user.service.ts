import { unknown } from 'zod';
import config from '../../config';
import AcademicSemester from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import Student from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  try {
    // Prepare user data
    const userData: Partial<TUser> = {
      password: password || (config.defaultPassword as string),
      role: 'student',
    };

    // Find admission semester
    const admissionSemester = await AcademicSemester.findById(
      payload.admissionSemester,
    );
    if (!admissionSemester) {
      throw new Error('Admission semester not found');
    }

    // Generate student ID
    userData.id = await generateStudentId(admissionSemester);

    // Create a new user
    const newUser = await User.create(userData);

    if (newUser) {
      // Prepare student data
      const studentData = {
        ...payload,
        id: newUser.id,
        user: newUser._id,
      };

      // Create a new student
      const newStudent = await Student.create(studentData);
      return newStudent;
    } else {
      throw new Error('User creation failed');
    }
  } catch (error) {
    console.error('Error creating student:', error);
    throw error; // Rethrow the error to handle it upstream
  }
};

const getAllUsers = async (query: Record<string, unknown>) => {
  const users = await User.find(query);
  if (!users) {
    throw new Error('No users found');
  }
  return users;
};

export const UserServices = {
  createStudentIntoDB,
  getAllUsers,
};
