import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;
  const result = await UserServices.createStudentIntoDB(password, student);
  res.status(200).json({
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

const getAllUsers: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await UserServices.getAllUsers(req.query);
  res.status(200).json({
    success: true,
    message: 'All Users Retrive successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
  getAllUsers,
};
