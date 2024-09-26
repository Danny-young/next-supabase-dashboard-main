import React, { useEffect } from "react";
import studentData from '@/data/Student';
import moduleData from '@/data/modules';
import { ChartBar, Folder, MessageCircle, Network, Newspaper, NewspaperIcon, Train, User, User2, UserPlus2, Workflow } from 'lucide-react'
import DashboardCard from "@/components/dashboard";
// import {Listofeligible} from '@/app/dashboard/components/Entities'
// import { supabase } from "@/lib/supabase";
import { readMembers, readStudents, appliedStudents, totalStudents} from "@/app/dashboard/(dasboard)/actions";
export default async function Dashboard() {
	
	//console.log(readapplications)
  
	const {data: modules} = await readMembers();
	const {data: eligiblestudent} = await readStudents();
	const {data: applicationform} = await appliedStudents();
	const {data: students} = await totalStudents();

  console.log(modules?.length);
  console.log(eligiblestudent?.length);
	console.log(applicationform?.length);
	console.log(students?.length);
  
  
  return (
		<div>
      
			<h1 className="font-extrabold text-3xl mb-5">Student Info.</h1>
			
			<div className="grid grid-cols-3 justify-between
    gap-2 mb-5">    
      <DashboardCard title='Total Student' 
      count={students?.length ?? 0}
      icon={<User className='
      text-slate-500' size={72}/>}/>
      <DashboardCard title='Eligible Student' 
      count={eligiblestudent?.length ?? 0}
      icon={<UserPlus2 className='
      text-slate-500' size={72}/>}/>
      <DashboardCard title='Applied TA Position' 
      count={applicationform?.length ?? 0} 
      icon={<User className='
      text-slate-500' size={72}/>}/>
    </div>
    <h1 className="font-extrabold text-3xl mb-5">Module Stat.</h1>
    <div className="grid grid-cols-3 justify-between
    gap-2 mb-5">
      <DashboardCard title='Total Modules' 
      count={modules?.length ?? 0} 
      icon={<Folder className='
      text-slate-500' size={72}/>}/>   
      <DashboardCard title='Assigned Modules' 
      count={0} 
      icon={<Network className='
      text-slate-500' size={72}/>}/>   
      <DashboardCard title='No TA Assigned' 
      count={modules?.length ?? 0} 
      icon={<NewspaperIcon className='
      text-slate-500' size={72}/>}/>   
    </div>
    <h1 className="font-extrabold text-3xl mb-5">Other Activities</h1>
    <div className="grid grid-cols-4 justify-between
    gap-2 mb-5">
      <DashboardCard title='Comments' 
      count={0} 
      icon={<MessageCircle className='
      text-slate-500' size={72}/>}/>   
      <DashboardCard title='Assigned Modules' 
      count={0} 
      icon={<User className='
      text-slate-500' size={72}/>}/>   
      <DashboardCard title='Upcoming Training' 
      count={0} 
      icon={<Train className='
      text-slate-500' size={72}/>}/>   
      <DashboardCard title='Working Permit' 
      count={0} 
      icon={<Workflow className='
      text-slate-500' size={72}/>}/>   
    </div>
    {/* <AnalyticsChart />
    <PostsTable title='Lastest Posts' limit={5} /> */}
		</div>
	);
}
