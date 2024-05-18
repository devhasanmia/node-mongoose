import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student} = req.body;
    // Schema Joi With Joi
    
    const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
    try {
      const result = await StudentServices.getAllStudentFromDB();
      res.status(200).json({
        success: true,
        message: 'All Student Retrive successfully',
        total: result.length,
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
}

const getSingleStudent = async (req: Request, res: Response) => {
 try {
    const id = req.params.id;
    const result = await StudentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Single Student Retrive successfully',
      data: result,
    });
 } catch (error) {
    console.log(error)
 }
}
export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent
};
