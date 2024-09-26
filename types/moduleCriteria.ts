export interface ModuleData {
    modules: Module[];
  }

interface Module {
    course_code: string;
    course_name: string;
    minGPA: number;
    requiredCourses: string[];
    requiredTraining: string;
    workPermitRequired: boolean;
  }
  