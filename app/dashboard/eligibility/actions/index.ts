 "use server";

import { createSupbaseAdmin } from "@/lib/supabase";
import { readUserSession } from "@/lib/actions/index";
import { revalidatePath, unstable_noStore } from "next/cache";
import { createSupbaseServerClient }  from "@/lib/supabase"

export async function addCourse(data: {
   course_code: string;
   course_name: string;
   student_id: string;
   course_grade: number;
}) {


	const {data: userSession}= await readUserSession()
	if(userSession.session?.user.user_metadata.role!="admin"){

		return JSON.stringify({
		
		error: { message: "You are not allowed to do this"},
		});
	}

	const supabase = await createSupbaseAdmin();

	// Create account

	const createResult = await supabase
	.from("courses")
	.insert({courssecode:data.course_code, coursename:data.course_name,  student_id:data.student_id, course_grade: data.course_grade});
	revalidatePath("/dashboard");		


}

export async function createMember(data: {
    course_code: string;
   course_name: string;
   student_id: string;
   course_grade: number;
 
}) {


	

	const supabase = await createSupbaseAdmin();

	// Create account

	const createResult = await supabase.from("courses")
		.insert({
	course_code: data.course_code,
	course_name: data.course_name,
    student_id: data.student_id,
    course_grade: data.course_grade,
        });
	
		//user_metadata:{role:data.role}});


if(createResult.error?.message){
	
	return JSON.stringify(createResult)

 }
}
	 

export async function updateMemberBasicById(id: string,data:{
    name: string;
}) {
	
	const supabase = await createSupbaseServerClient();
	const result = await supabase.from("member").update(data).eq("id",id);
	revalidatePath("/dashboard/member");
	return JSON.stringify(result);
}

export async function updateMemberAdvanceById(permission_id: string, user_id: string,
	data:{
    role: "admin" | "user";
	status: "active" | "resigned";

}) {


	const {data: userSession}= await readUserSession()
	if(userSession.session?.user.user_metadata.role!="admin"){

		return JSON.stringify({
		
		error: { message: "You are not allowed to do this"},
		});
	}

	const supabaseAdmin = await createSupbaseAdmin();



	const updateResult = await supabaseAdmin.auth.admin.updateUserById(
		user_id,
		{
			user_metadata: { role : data.role},
		}
	);
if(updateResult.error?.message) {
	return JSON.stringify(updateResult);
    } else {
		const supabase = await createSupbaseServerClient();
		const result = await supabase.from("permission").update(data).eq("id",permission_id);
		revalidatePath("/dashboard/member");
		return JSON.stringify(result);
    
}







	
}
export async function deleteMemberById(user_id: string) {
	const  { data: userSession } = await readUserSession();

	if (userSession.session?.user.user_metadata.role !== "admin") {
		return JSON.stringify({
            error: { message: "You are not allowed to do this" },
        });
   
}
			//delete account

	const supabaseAdmin = await createSupbaseAdmin();

	const deleteResult = await supabaseAdmin.auth.admin.deleteUser(user_id);
	
	if(deleteResult.error?.message) {
		return JSON.stringify(deleteResult);
		} else {
			const supabase = await createSupbaseServerClient();
			const result = await supabase.from("member").delete().eq("id", user_id);
			revalidatePath("/dashboard/member");
			return JSON.stringify(result);

}

}


export async function readMembers() {
	unstable_noStore();
	const supabase = await createSupbaseServerClient();

	return await supabase.from("eligible_students").select("*");
	
}

export async function readMembersIndividual(studentId: string, courseCode: string) {
    unstable_noStore(); // Assuming this is part of your existing setup
    const supabase = await createSupbaseServerClient();
	// const { data, error } = await createSupbaseServerClient()
       
	
	
	return await supabase.from('eligible_students')
        .select('*')
        .eq('student_id', studentId)
        .eq('course_code', courseCode);

		// if (error) {
		// 	console.error('Error fetching data: ', error);
		// 	return { data: null, error };
		// }
		// return { data, error };
	}

	export async function addComment(data: {
		student_id: string;
		coordinator_id: string;
		module_code: string;
		comment: number;
	 }) {
	 
	 
		 const {data: userSession}= await readUserSession()
		 if(userSession.session?.user.user_metadata.role!="admin"){
	 
			 return JSON.stringify({
			 
			 error: { message: "You are not allowed to do this"},
			 });
		 }
	 
		 const supabase = await createSupbaseAdmin();
	 
		 // Create account
	 
		 const createResult = await supabase
		 .from("comments")
		 .insert({student_id:data.student_id, coursename:data.course_name,  student_id:data.student_id, course_grade: data.course_grade});
		 revalidatePath("/dashboard");		
	 
	 
	 }
	