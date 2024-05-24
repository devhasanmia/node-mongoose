import { object, string, enum as zodEnum } from 'zod';

const GenderEnum = zodEnum(['male', 'female']);
const BloodGroupEnum = zodEnum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);

const nameValidationSchema = object({
    firstName: string({
        required_error: 'First Name is required',
        invalid_type_error: 'First Name must be a string',
    })
        .trim()
        .min(3, 'First Name must be at least 3 characters')
        .max(20, 'First Name must be at most 20 characters'),
    middleName: string({
        required_error: 'Middle Name is required',
        invalid_type_error: 'Middle Name must be a string',
    }).min(3, 'Middle Name must be at least 3 characters'),
    lastName: string({
        required_error: 'Last Name is required',
        invalid_type_error: 'Last Name must be a string',
    })
        .trim()
        .min(3, 'Last Name must be at least 3 characters'),
});

const guardianValidationSchema = object({
    fatherName: string({
        required_error: 'Father Name is required',
        invalid_type_error: 'Father Name must be a string',
    }),
    fatherOccupation: string({
        required_error: 'Father Occupation is required',
        invalid_type_error: 'Father Occupation must be a string',
    }),
    fatherContactNumber: string({
        required_error: 'Father Contact Number is required',
        invalid_type_error: 'Father Contact Number must be a string',
    }),
    motherName: string({
        required_error: 'Mother Name is required',
        invalid_type_error: 'Mother Name must be a string',
    }),
    motherContactNumber: string({
        required_error: 'Mother Contact Number is required',
        invalid_type_error: 'Mother Contact Number must be a string',
    }),
    motherOccupation: string({
        required_error: 'Mother Occupation is required',
        invalid_type_error: 'Mother Occupation must be a string',
    }),
});

const studentValidationSchema = object({
    name: nameValidationSchema,
    password: string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
    }),
    gender: GenderEnum,
    email: string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
    }).email('Invalid email format'),
    dateOfBirth: string().optional(),
    contactNumber: string({
        required_error: 'Contact Number is required',
        invalid_type_error: 'Contact Number must be a string',
    }),
    emergencyContactNumber: string({
        required_error: 'Emergency Contact Number is required',
        invalid_type_error: 'Emergency Contact Number must be a string',
    }),
    BloodGroup: BloodGroupEnum,
    presentAddress: string({
        required_error: 'Present Address is required',
        invalid_type_error: 'Present Address must be a string',
    }),
    permanentAddress: string({
        required_error: 'Permanent Address is required',
        invalid_type_error: 'Permanent Address must be a string',
    }),
    guardian: guardianValidationSchema,
    profilePicture: string().optional(),
});

export { studentValidationSchema, nameValidationSchema, guardianValidationSchema };
