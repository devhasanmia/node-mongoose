import { model, Schema } from 'mongoose';
import { TacademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from './academicSemester.const';

const academicSemesterSchema = new Schema<TacademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    startMonth: {
      type: String,
      enum: months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: months,
      required: true,
    },
  },
  { timestamps: true },
);

const AcademicSemester = model<TacademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);

export default AcademicSemester;
