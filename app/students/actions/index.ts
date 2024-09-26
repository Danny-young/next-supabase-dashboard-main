 "use server";

import { createSupbaseAdmin } from "@/lib/supabase";
import { readUserSession } from "@/lib/actions/index";
import { revalidatePath, unstable_noStore } from "next/cache";
import { createSupbaseServerClient }  from "@/lib/supabase"

export async function createMember(data: {
    id: string;
    name: string;
    gender: "Male" | "Female";
    email: string;
    degree: string;
	module: string;
 
}) {


	// const {data: userSession}= await readUserSession()
	// if(userSession.session?.user.user_metadata.role!="admin"){

	// 	return JSON.stringify({
		
	// 	error: { message: "You are not allowed to do this"},
	// 	});
	// }

	const supabase = await createSupbaseAdmin();

	// Create account

	const createResult = await supabase.from("applicationform")
		.insert({
		email:data.email, 
		student_id:data.id, 
		degree:data.degree,
		gender: data.gender, 
		preferredmodule:data.module, 
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
