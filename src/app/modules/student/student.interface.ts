import { Types } from 'mongoose';

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherContactNumber: string;
  motherOccupation: string;
};

export type TBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export type TStudent = {
  id: string;
  name: TName;
  user: Types.ObjectId;
  password: string;
  gender: 'male' | 'female';
  email: string;
  dateOfBirth?: string;
  contactNumber: string;
  emergencyContactNumber: string;
  BloodGroup: TBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  admissionSemester: Types.ObjectId;
  academicFaculty: Types.ObjectId;
  profilePicture?: string;
  isDeleted: boolean;
};
