import { Schema, model } from 'mongoose';
import { Guardian, Name, Student } from './student.interface';
import validator from 'validator';

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
  },
  fatherOccupation: {
    type: String,
  },
  fatherContactNumber: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherContactNumber: {
    type: String,
  },
  motherOccupation: {
    type: String,
  },
});

const studentSchema = new Schema<Student>({
  name: {
    type: nameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid gender. please provide male or female.',
    },
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string)=> validator.isEmail(value),
      message: '{VALUE} is not a valid Email'
    }
  },
  dateOfBirth: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emargencyContactNumber: {
    type: String,
    required: true,
  },
  BloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: `{VALUE} is not a valid Blood Group Plase Provide Valid Blood Group`,
    },
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  isActive: {
    type: String,
    enum: ['Active', 'Pending', 'blocked'],
    default: 'Pending',
  },
});

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
