import { StudentData } from '@/types/studentData';

const studentData: StudentData = {
    students: [
      {
        student_id: "ADS22B00001Y",
        name: "Kwame Adu",
        email: "kwame.adu@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.75,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.8 },
            { course_code: "CS102", course_name: "Data Structures", course_grade: 3.7 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00001Y.jpg",
        additional_info: "Excellent academic record and skills relevant to the TA position."
      },
      {
        student_id: "ADS22B00002Y",
        name: "Ama Boateng",
        email: "ama.boateng@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.45,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.5 },
            { course_code: "CS103", course_name: "Algorithms", course_grade: 3.4 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS104", course_name: "Operating Systems", course_grade: 3.6 }] },
        work_permit_required: true,
        avatar: "https://university-domain.edu/student-photos/ADS22B00002Y.jpg",
        additional_info: "Excellent academic record and skills relevant to the TA position."
      },
      {
        student_id: "ADS22B00003Y",
        name: "Kojo Mensah",
        email: "kojo.mensah@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.65,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.7 },
            { course_code: "CS105", course_name: "Computer Networks", course_grade: 3.6 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00003Y.jpg",
        additional_info: "Strong understanding of networking concepts."
      },
      {
        student_id: "ADS22B00004Y",
        name: "Efua Opoku",
        email: "efua.opoku@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.85,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.9 },
            { course_code: "CS106", course_name: "Database Systems", course_grade: 3.8 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS107", course_name: "Web Development", course_grade: 3.7 }] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00004Y.jpg",
        additional_info: "Experience in web development and databases."
      },
      {
        student_id: "ADS22B00005Y",
        name: "Yaw Asare",
        email: "yaw.asare@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.55,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.6 },
            { course_code: "CS108", course_name: "Software Engineering", course_grade: 3.5 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00005Y.jpg",
        additional_info: "Good understanding of software development practices."
      },
      {
        student_id: "ADS22B00006Y",
        name: "Akosua Owusu",
        email: "akosua.owusu@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.80,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.9 },
            { course_code: "CS109", course_name: "Human-Computer Interaction", course_grade: 3.8 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS110", course_name: "Machine Learning", course_grade: 3.7 }] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00006Y.jpg",
        additional_info: "Strong skills in user interface design and machine learning."
      },
      {
        student_id: "ADS22B00007Y",
        name: "Kwasi Nkrumah",
        email: "kwasi.nkrumah@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.40,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.5 },
            { course_code: "CS111", course_name: "Mobile App Development", course_grade: 3.4 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: true,
        avatar: "https://university-domain.edu/student-photos/ADS22B00007Y.jpg",
        additional_info: "Knowledgeable in mobile app development."
      },
      {
        student_id: "ADS22B00008Y",
        name: "Serwaa Mensah",
        email: "serwaa.mensah@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.90,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 4.0 },
            { course_code: "CS112", course_name: "Cybersecurity", course_grade: 3.9 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS113", course_name: "Data Science", course_grade: 3.8 }] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00008Y.jpg",
        additional_info: "Expertise in cybersecurity and data science."
      },
      {
        student_id: "ADS22B00009Y",
        name: "Kofi Antwi",
        email: "kofi.antwi@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.70,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.8 },
            { course_code: "CS114", course_name: "Artificial Intelligence", course_grade: 3.7 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00009Y.jpg",
        additional_info: "Strong foundation in artificial intelligence."
      },
      {
        student_id: "ADS22B00010Y",
        name: "Adwoa Dapaah",
        email: "adwoa.dapaah@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.85,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.9 },
            { course_code: "CS115", course_name: "Computer Graphics", course_grade: 3.8 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS116", course_name: "Cloud Computing", course_grade: 3.7 }] },
        work_permit_required: true,
        avatar: "https://university-domain.edu/student-photos/ADS22B00010Y.jpg",
        additional_info: "Experience in computer graphics and cloud computing."
      },
      {
        student_id: "ADS22B00011Y",
        name: "Yaw Agyeman",
        email: "yaw.agyeman@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.60,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.7 },
            { course_code: "CS117", course_name: "Game Development", course_grade: 3.6 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00011Y.jpg",
        additional_info: "Passionate about game development."
      },
      {
        student_id: "ADS22B00012Y",
        name: "Akua Bonsu",
        email: "akua.bonsu@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.75,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.8 },
            { course_code: "CS118", course_name: "Network Security", course_grade: 3.7 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS119", course_name: "Embedded Systems", course_grade: 3.6 }] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00012Y.jpg",
        additional_info: "Expertise in network security and embedded systems."
      },
      {
        student_id: "ADS22B00013Y",
        name: "Kwame Osei",
        email: "kwame.osei@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.50,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.6 },
            { course_code: "CS120", course_name: "Quantum Computing", course_grade: 3.5 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: true,
        avatar: "https://university-domain.edu/student-photos/ADS22B00013Y.jpg",
        additional_info: "Knowledgeable in quantum computing."
      },
      {
        student_id: "ADS22B00014Y",
        name: "Efua Tetteh",
        email: "efua.tetteh@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.95,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 4.0 },
            { course_code: "CS121", course_name: "Augmented Reality", course_grade: 3.9 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS122", course_name: "Virtual Reality", course_grade: 3.8 }] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00014Y.jpg",
        additional_info: "Expertise in augmented and virtual reality."
      },
      {
        student_id: "ADS22B00015Y",
        name: "Kofi Amankwah",
        email: "kofi.amankwah@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.65,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.7 },
            { course_code: "CS123", course_name: "Software Testing", course_grade: 3.6 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00015Y.jpg",
        additional_info: "Good understanding of software testing methodologies."
      },
      {
        student_id: "ADS22B00016Y",
        name: "Adjoa Owusu",
        email: "adjoa.owusu@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.80,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.9 },
            { course_code: "CS124", course_name: "Robotics", course_grade: 3.8 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS125", course_name: "Automation", course_grade: 3.7 }] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00016Y.jpg",
        additional_info: "Experience in robotics and automation."
      },
      {
        student_id: "ADS22B00017Y",
        name: "Yaw Badu",
        email: "yaw.badu@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.55,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.6 },
            { course_code: "CS126", course_name: "Parallel Computing", course_grade: 3.5 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00017Y.jpg",
        additional_info: "Knowledgeable in parallel computing."
      },
      {
        student_id: "ADS22B00018Y",
        name: "Akosua Twum",
        email: "akosua.twum@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.70,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.8 },
            { course_code: "CS127", course_name: "Natural Language Processing", course_grade: 3.7 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS128", course_name: "Big Data", course_grade: 3.6 }] },
        work_permit_required: true,
        avatar: "https://university-domain.edu/student-photos/ADS22B00018Y.jpg",
        additional_info: "Expertise in NLP and big data."
      },
      {
        student_id: "ADS22B00019Y",
        name: "Kwame Addo",
        email: "kwame.addo@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.50,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 3.6 },
            { course_code: "CS129", course_name: "Cryptography", course_grade: 3.5 }
          ]
        },
        experience: { ta_experience: false, courses_tutored: [] },
        work_permit_required: false,
        avatar: "https://university-domain.edu/student-photos/ADS22B00019Y.jpg",
        additional_info: "Good understanding of cryptography."
      },
      {
        student_id: "ADS22B00020Y",
        name: "Adwoa Baah",
        email: "adwoa.baah@example.com",
        academic_qualifications: {
          degree: "BSc Information Technology",
          GPA: 3.90,
          completed_courses: [
            { course_code: "CS101", course_name: "Introduction to Computer Science", course_grade: 4.0 },
            { course_code: "CS130", course_name: "Computer Vision", course_grade: 3.9 }
          ]
        },
        experience: { ta_experience: true, courses_tutored: [{ course_code: "CS131", course_name: "Bioinformatics", course_grade: 3.8 }] },
        work_permit_required: true,
        avatar: "https://university-domain.edu/student-photos/ADS22B00020Y.jpg",
        additional_info: "Expertise in computer vision and bioinformatics."
      }
    ]
  };

  export default studentData;
  