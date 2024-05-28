import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from './academicSemester.const';

const academicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]], {
      required_error: 'Name is required and must be a valid semester name',
      invalid_type_error: 'Invalid semester name type',
    }),
    year: z.string({
      required_error: 'Date is required',
      invalid_type_error: 'Date must be a valid date',
    }),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required and must be a valid semester code',
      invalid_type_error: 'Invalid semester code type',
    }),
    startMonth: z.enum([...months] as [string, ...string[]], {
      required_error: 'Start month is required and must be a valid month',
      invalid_type_error: 'Invalid start month type',
    }),
    endMonth: z.enum([...months] as [string, ...string[]], {
      required_error: 'End month is required and must be a valid month',
      invalid_type_error: 'Invalid end month type',
    }),
  }),
});

const updateAcademicSemesterValidation = z.object({
  body: z.object({
    name: z
      .enum([...AcademicSemesterName] as [string, ...string[]], {
        required_error: 'Name is required and must be a valid semester name',
        invalid_type_error: 'Invalid semester name type',
      })
      .optional(),
    year: z
      .string({
        required_error: 'Date is required',
        invalid_type_error: 'Date must be a valid date',
      })
      .optional(),
    code: z
      .enum([...AcademicSemesterCode] as [string, ...string[]], {
        required_error: 'Code is required and must be a valid semester code',
        invalid_type_error: 'Invalid semester code type',
      })
      .optional(),
    startMonth: z
      .enum([...months] as [string, ...string[]], {
        required_error: 'Start month is required and must be a valid month',
        invalid_type_error: 'Invalid start month type',
      })
      .optional(),
    endMonth: z
      .enum([...months] as [string, ...string[]], {
        required_error: 'End month is required and must be a valid month',
        invalid_type_error: 'Invalid end month type',
      })
      .optional(),
  }),
});

export const academicSemesterValidations = {
  create: academicSemesterValidation,
  update: updateAcademicSemesterValidation,
};
