// --------------------------------------------------------------


export interface StudentData {
  students: Student[];
}
interface Course {
    course_code: string;
    course_name: string;
    course_grade: number;
  }
  
  interface AcademicQualifications {
    degree: string;
    GPA: number;
    completed_courses: Course[];
  }
  
  interface Experience {
    ta_experience: boolean;
    courses_tutored: Course[];
  }
  
  interface Student {
    student_id: string;
    name: string;
    email: string;
    academic_qualifications: AcademicQualifications;
    experience: Experience;
    work_permit_required: boolean;
    avatar: string;
    additional_info: string;
  }
  