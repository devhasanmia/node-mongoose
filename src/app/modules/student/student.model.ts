import { Schema, model } from 'mongoose';
import { Guardian, Name, Student } from './student.interface';

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
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
  name: nameSchema,
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  email: {
    type: String,
    required: true,
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
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
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
