 "use server";

import { createSupbaseAdmin } from "@/lib/supabase";
import { readUserSession } from "@/lib/actions/index";
import { revalidatePath, unstable_noStore } from "next/cache";
import { createSupbaseServerClient }  from "@/lib/supabase"

export async function createMember(data: {
    role: "user" | "admin";
    name: string;
    status: "active" | "resigned";
    email: string;
    password: string;
    confirm: string;
}) {


	const {data: userSession}= await readUserSession()
	if(userSession.session?.user.user_metadata.role!="admin"){

		return JSON.stringify({
		
		error: { message: "You are not allowed to do this"},
		});
	}

	const supabase = await createSupbaseAdmin();

	// Create account

	const createResult = await supabase.auth.admin.createUser({
		email:data.email, 
		password:data.password, 
		email_confirm:true, 
		user_metadata:{role:data.role}});


if(createResult.error?.message){
	
	return JSON.stringify(createResult)

 } else {
	const memberResult = await supabase
	.from("member")
	.insert({name:data.name, id: createResult.data.user?.id, email:data.email});

	if(memberResult.error?.message){

		return JSON.stringify(memberResult);
	 } else {
		const permissionResult = await supabase
		.from("permission")
		.insert({role:data.role, 
			member_id: createResult.data.user?.id,
		   status: data.status});	
		   revalidatePath("/dashboard/member");
	   return JSON.stringify(permissionResult);
	}
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

	return await supabase.from("permission").select("*,member(*)");
	
}
