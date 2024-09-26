'use client';

import { useUserStore } from '@/lib/store/user';
import { useParams } from 'next/navigation';
import { createMember, readMembersIndividual } from '../actions';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast'; // Ensure this import points to the correct toast function in your project
import { Textarea } from "@/components/ui/textarea"
import CreateComment from '../components/create/CreateComment';

interface EligibleStudent {
  student_id?: string;
  course_code?: string;
  course_grade?: string;
  avatar_url?: string;
  name: string;
  email: string;
  degree: string;
  gpa: string;
  course_name: string;
  min_gpa: string;
  additional_info: string;
  gender: string;
  avatar: string;
  required_courses: string;
}

const EligibilityPage = () => {
  const { slug } = useParams();
  const [eligibleStudent, setEligibleStudent] = useState<EligibleStudent | null>(null);

  let student_id, course_code;
  if (Array.isArray(slug)) {
    [student_id, course_code] = slug;
  } else {
    [student_id, course_code] = slug?.split('-') || [];
  }

  useEffect(() => {
    const fetchData = async () => {
      if (student_id && course_code) {
        const { data, error } = await readMembersIndividual(student_id, course_code);
        if (error) {
          console.error("Error fetching data: ", error);
        } else {
          setEligibleStudent(data[0]);
        }
      }
    };
    fetchData();
  }, [student_id, course_code]);

  if (!eligibleStudent) {
    return <p>Loading...</p>;
  }

  const handleSave = async () => {
    const userConfirmation = window.confirm("Do you want to assign module?");
    if (userConfirmation) {
      const dataToSave = {
        name: eligibleStudent.name,
        role: "Admin",
        // Add more fields as required
      };

      const result = await createMember(dataToSave);

      if (result.success) {
        toast({
            title: "User successfully assigned a module",            
        });
      } else {
        toast({
            title: "Error assigning a module",            
        });
      }
    } else {
      
      toast({
        title: "Action Canceled",
        
    });
    }
  };

  return (
    <div>
      <h2 className='text-4xl mb-5 text-center'>Eligible Student Details</h2>
      <div className='flex'>
        <Image
          className="rounded-lg"
          width={300}
          height={200}
          src={eligibleStudent.avatar || ''}
          alt="Student Avatar"
        />

        <div className='pl-7'>
          <h1 className='text-2xl mb-4'>Student Information</h1>
          <p>Student ID: {eligibleStudent.student_id}</p>
          <p>Name: {eligibleStudent.name}</p>
          <p>Email: {eligibleStudent.email}</p>
          <p>Gender: {eligibleStudent.gender}</p>
          <p>Student course grade: {eligibleStudent.gpa}</p>
          <p>Programme: {eligibleStudent.degree}</p>

          <h1 className='text-2xl my-5'>Course Detail</h1>
          <p>Course Code: {eligibleStudent.course_code}</p>
          <p>Course Name: {eligibleStudent.course_name}</p>
          <p>Prerequisite Module: {eligibleStudent.required_courses}</p>
          <p>Course grade: {eligibleStudent.min_gpa}</p>

          <div className='flex mt-5 gap-5'>
            <button
              type="submit"
              className="btn btn-primary bg-green-500 p-4 rounded-lg"
              onClick={handleSave}
            >
              Assign Module
            </button>
            <button type="submit" className="btn btn-primary bg-blue-700 p-4 rounded-lg">
              Reject
            </button>
          </div>

        </div>
      </div>
      <div className='m-6'>
                
    <CreateComment/>
    </div>
    </div>
  );
};

export default EligibilityPage;
