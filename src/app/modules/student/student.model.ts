import { Schema, model } from 'mongoose';
import { Guardian, Name, Student } from './student.interface';

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    trim: true,
  },
  middleName: {
    type: String,
    required: true,
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
    enum: ['male', 'female'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  BloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
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
  guardian: {
    type: guardianSchema,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['Active', 'Pending', 'Inactive'],
    default: 'Pending',
  },
});

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
