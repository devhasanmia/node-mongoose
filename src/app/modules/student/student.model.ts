import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { TGuardian, TName, TStudent } from './student.interface';

const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNumber: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherContactNumber: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent>({
  name: {
    type: nameSchema,
    required: true,
  },
  password: {
    type: String,
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

studentSchema.pre('save', async function (next) {
  console.log('Pre Hook We Will Save Data: ', this.password);
  const saltRounds: number = 10;
  const normalPass: any = this.password;
  const hash = await bcrypt.hash(normalPass, saltRounds);
  this.password = hash;
  console.log(this.password);
  this.isActive = 'Pending';
  next();
});

const StudentModel = model<TStudent>('Student', studentSchema);

export default StudentModel;
