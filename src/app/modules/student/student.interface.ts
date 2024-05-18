export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';
export type Name = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  name: Name;
  gender: 'male' | 'female';
  email: string;
  dateOfBirth: string;
  contactNumber: string;
  emargencyContactNumber: string;
  BloodGroup?: BloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  profilePicture?: string;
  isActive: 'Active' | 'Pending' | 'Inactive';
};
