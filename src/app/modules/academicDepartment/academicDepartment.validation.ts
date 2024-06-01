import { z } from 'zod';

const academicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .trim()
      .min(3, 'Name must be at least 3 characters'),
    academicFaculty: z.string({
      required_error: 'Academic Faculty is required',
      invalid_type_error: 'Academic Faculty must be a string',
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .trim()
      .min(3, 'Name must be at least 3 characters')
      .optional(),
    academicFaculty: z
      .string({
        required_error: 'Academic Faculty is required',
        invalid_type_error: 'Academic Faculty must be a string',
      })
      .optional(),
  }),
});

export const academicDepartmentValidation = {
  create: academicDepartmentValidationSchema,
  update: updateAcademicDepartmentValidationSchema,
};
