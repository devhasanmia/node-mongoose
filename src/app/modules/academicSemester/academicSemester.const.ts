import { TacademicSemesterCode, TacademicSemesterName, TacademicSemesterNameCodeMapper, TMonths } from "./academicSemester.interface";

export const months: TMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  export const AcademicSemesterName: TacademicSemesterName[] = [
    'Autumn',
    'Summar',
    'Fall',
  ];
  
  export const AcademicSemesterCode: TacademicSemesterCode[] = ['01', '02', '03'];

  export const academicSemesterNameCodeMapper: TacademicSemesterNameCodeMapper = {
    Autumn: '01',
    Summar: '02',
    Fall: '03',
  };