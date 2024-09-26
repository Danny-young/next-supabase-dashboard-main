import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import EditMember from "./edit/EditMember";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/lib/store/user";
import { readMembers } from "../actions";
import { Ieligible_students} from "@/types";
import DeleteMember from "./edit/DeleteMember";

export default async function Listofeligible() {
	const {data: eligible_students} = await readMembers();

	const user = useUserStore.getState().user;
	const isAdmin = user?.user_metadata.role === "admin"

	console.log(`List of modules: ${eligible_students?.length}`);

	return (
		<div className="dark:bg-inherit bg-white mx-2 rounded-sm">
		    {(eligible_students as Ieligible_students[])?.map((eligibleStudents, index) => {
           
				return (
					<div
						className=" grid grid-cols-5  rounded-sm  p-3 align-middle font-normal"
						key={index}
					>
						<h1>{eligibleStudents.student_id}</h1>
			
						<div>
						<h1>{eligibleStudents.course_name}</h1>
						</div>
						<h1>{eligibleStudents.course_grade}</h1>
						<div>
						<h1>{eligibleStudents.min_gpa}</h1>
						</div>

						<div className="flex gap-2 items-center">
							{isAdmin && 
								<DeleteMember user_id = {module.id} />
							}
							{/* <EditMember isAdmin={isAdmin} permission={Permissions} /> */}
						</div>
					</div>
				);
			})}
		</div>
	);
}
