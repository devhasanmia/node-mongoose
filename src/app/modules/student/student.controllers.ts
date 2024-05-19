import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import { z } from 'zod';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    // Schema with zod
    // Zod schema for Name
    const nameValidationSchema = z.object({
      firstName: z
        .string()
        .trim()
        .min(3, { message: 'First name is required' }),
      middleName: z
        .string()
        .trim()
        .min(1, { message: 'Middle name is required' }),
      lastName: z.string().trim().min(1, { message: 'Last name is required' }),
    });

    // Zod schema for Guardian
    const guardianValidationSchema = z.object({
      fatherName: z.string().min(1, { message: "Father's name is required" }),
      fatherOccupation: z
        .string()
        .min(1, { message: "Father's occupation is required" }),
      fatherContactNumber: z
        .string()
        .min(1, { message: "Father's contact number is required" }),
      motherName: z.string().min(1, { message: "Mother's name is required" }),
      motherContactNumber: z
        .string()
        .min(1, { message: "Mother's contact number is required" }),
      motherOccupation: z
        .string()
        .min(1, { message: "Mother's occupation is required" }),
    });

    // Zod schema for Student
    const studentValidationSchema = z.object({
      name: nameValidationSchema,
      password:z.string().min((3), {message:"Must be 3 latter"}),
      gender: z.enum(['male', 'female']),
      email: z.string().email({ message: 'Invalid email address' }),
      dateOfBirth: z.string(),
      contactNumber: z
        .string()
        .min(1, { message: 'Contact number is required' }),
      emergencyContactNumber: z
        .string()
        .min(1, { message: 'Emergency contact number is required' }),
      BloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: guardianValidationSchema,
      profilePicture: z.string().optional(),
      isActive: z.enum(['Active', 'Pending', 'Inactive']).default('Pending'),
    });

    const validatedStudent = studentValidationSchema.parse(student);

    /** ENd */

    const result = await StudentServices.createStudentIntoDB(validatedStudent);
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
};

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
    console.log(error);
  }
};
export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
