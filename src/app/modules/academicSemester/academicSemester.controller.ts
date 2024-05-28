import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AcademicSemesterService } from './academicSemester.Service';

const createAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const academicSemester = await AcademicSemesterService.createAcademicSemester(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester created successfully',
      data: academicSemester,
    });
  },
);

const getAllAcademicSemesters: RequestHandler = catchAsync(
  async (req, res, next) => {
    const academicSemesters = await AcademicSemesterService.getAllAcademicSemesters();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Academic Semesters retrieved successfully',
      data: academicSemesters,
    });
  },
);

const getAcademicSemesterById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const academicSemester = await AcademicSemesterService.getAcademicSemesterById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieved successfully by ID',
      data: academicSemester,
    });
  },
);

const updateAcademicSemesterById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const updatedDetails = req.body;
    const updatedSemester = await AcademicSemesterService.updateAcademicSemesterById(id, updatedDetails);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester updated successfully',
      data: updatedSemester,
    });
  },
);
const deleteAcademicSemesterById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const deleteSemester = await AcademicSemesterService.deleteAcademicSemesterById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Deleted successfully',
      data: deleteSemester,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getAcademicSemesterById,
  updateAcademicSemesterById,
  deleteAcademicSemesterById
};
