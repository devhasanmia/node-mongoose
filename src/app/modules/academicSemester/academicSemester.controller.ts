import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const data = req.body;
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Create',
      data: data,
    });
  },
);


export const AcademicSemesterController = {
    createAcademicSemester
}
