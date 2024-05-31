import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyServices } from './academicFaculty.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const AcademicFaculty = await AcademicFacultyServices.create(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty created successfully',
      data: AcademicFaculty,
    });
  },
);

const getAllAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const AcademicFaculty = await AcademicFacultyServices.getAll();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Academic Faculty Retrive successfully',
      data: AcademicFaculty,
    });
  },
);

const getSingleAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const id = req.params.id;
    const AcademicFaculty = await AcademicFacultyServices.getSingle(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Academic Faculty Retrive successfully',
      data: AcademicFaculty,
    });
  })


const updateAcademicFaculty: RequestHandler = catchAsync(
    async (req, res, next) => {
      const { id } = req.params;
      const AcademicFaculty = await AcademicFacultyServices.update(id, req.body);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Faculty updated successfully',
        data: AcademicFaculty,
      });
    },
)


export const AcademicFacultyController = {
    create: createAcademicFaculty,
    getAll: getAllAcademicFaculty,
    getSingle: getSingleAcademicFaculty,
    update: updateAcademicFaculty,
}