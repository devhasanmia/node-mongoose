import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AcademicSemesterService } from './academicSemester.Service';

const createAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await AcademicSemesterService.create(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Create Academic Semister',
      data: result,
    });
  },
);
const getAllAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await AcademicSemesterService.getAllAcademicSemester();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'retrieve All Academic Semester',
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester
};
