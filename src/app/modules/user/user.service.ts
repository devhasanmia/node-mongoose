import config from '../../config';
import { TStudent } from '../student/student.interface';
import Student from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';

const createStudentIntoDB = async (password: string, student: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.defaultPassword as string);
  userData.role = 'student';

  // set manually generated it
  userData.id = '203010001';
  const newUser = await User.create(userData);
  // create a new student
  if (newUser && newUser.id && newUser._id) {
    student.id = newUser.id;
    student.user = newUser._id;   
  }
  if (newUser) {
    console.log(newUser);
  }
  const newStudent = await Student.create(student);
  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};
