import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AcademicDepartmentServices } from "./academicDepartment.services";


const createAcademicDepartment: RequestHandler = catchAsync(
    async (req, res, next) => {
      const academicDepartment = await AcademicDepartmentServices.create(req.body);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Department created successfully',
        data: academicDepartment,
      });
    },
);


const getAllAcademicDepartment: RequestHandler = catchAsync(
  async(req, res, next) => {
    const academicDepartment = await AcademicDepartmentServices.getAll();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Academic Department Retrive successfully',
      data: academicDepartment,
    })
  }
)

const getSingleAcademicDepartment: RequestHandler = catchAsync(
  async(req, res, next)=> {
    const id = req.params.id;
    const academicDepartment = await AcademicDepartmentServices.getSingle(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department Retrive successfully',
      data: academicDepartment,
    })
  }
)

const updateAcademicDepartment: RequestHandler = catchAsync(
  async (req, res, next) => {
    const id = req.params.id;
    const academicDepartment = await AcademicDepartmentServices.update(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department updated successfully',
      data: academicDepartment,
    });
  }
)


export const academicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
}