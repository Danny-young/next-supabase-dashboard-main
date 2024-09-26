export type IPermission = {
    id: string;
    created_at: string;
    role: "user" | "admin";
    status: "active" | "resigned";
    member_id: string;
    member: {
        id: string;
        created_at: string;
        name: string;
        email: string;
    };
};
export type IModules = {
    id: string;
    course_code: string;
    course_name: string;
    min_gpa: string;
    required_courses: string;
    work_permit_required: boolean;
};

export type Ieligible_students = {
    id: number;
    student_id: string;
    name:string;
    email: string;
    degree: string;
    gpa: string;
    course_grade: string;
    course_code: string;
    course_name: string;
    min_gpa: string;
    additional_info: string;
    gengers: string;
    avatar: string;
    required_courses: string;
    work_permit_required: boolean;
};