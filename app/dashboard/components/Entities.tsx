import React from "react";
import { useUserStore } from "@/lib/store/user";
import { modules, eligibleStudents } from "./Actions";
import { Ieligible_students, IModules} from "@/types";

export default async function Listofeligible() {
	const {data: eligible_students} = await eligibleStudents();
	const {data: module} = await modules();

	// const user = useUserStore.getState().user;
	// const isAdmin = user?.user_metadata.role === "admin"

	console.log(`List of modules: ${module?.length}`);
	console.log(`List of Eligible_Student: ${eligible_students?.length}`);

	return (
		<div className="dark:bg-inherit bg-white mx-2 rounded-sm">
		    {(eligible_students as Ieligible_students[])?.map((eligibleStudents, index) => {
           
			return eligible_students                
			})}

		    {(module as IModules[])?.map((eligibleStudents, index) => {
           
			return module                
			})}
		</div>
	);
}
