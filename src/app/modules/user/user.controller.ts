import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;
    const result = await UserServices.createStudentIntoDB(password, student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error',
      error,
    });
  }
};

export const UserController = {
  createStudent,
};
