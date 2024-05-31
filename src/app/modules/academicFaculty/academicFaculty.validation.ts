import { z } from "zod";


const academicFacultyValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
           .trim()
           .min(3, 'Name must be at least 3 characters')
    })
})


const updateAcademicFacultyValidation = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
           .trim()
           .min(3, 'Name must be at least 3 characters')
    }).optional()
})


export const academicFacultyValidation = {
    create: academicFacultyValidationSchema,
    update: updateAcademicFacultyValidation
}