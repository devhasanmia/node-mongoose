import { RequestHandler } from 'express';
import { StudentServices } from './student.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentFromDB(req.query);
  console.log(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Student Retrive successfully',
    data: result,
  });
});

const getSingleStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await StudentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: 'Single Student Retrive successfully',
    data: result,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Student Retrive successfully',
    data: result,
  });
});

const deleteStudnet: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await StudentServices.deleteStudentById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudnet,
};
