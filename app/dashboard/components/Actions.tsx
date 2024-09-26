"use server";

import { createSupbaseAdmin } from "@/lib/supabase";
import { readUserSession } from "@/lib/actions/index";
import { revalidatePath, unstable_noStore } from "next/cache";
import { createSupbaseServerClient }  from "@/lib/supabase"



export async function eligibleStudents() {
	unstable_noStore();
	const supabase = await createSupbaseServerClient();

	return await supabase.from("eligible_students").select("*");
	
}
export async function modules() {
	unstable_noStore();
	const supabase = await createSupbaseServerClient();

	return await supabase.from("modules").select("*");
	
}
