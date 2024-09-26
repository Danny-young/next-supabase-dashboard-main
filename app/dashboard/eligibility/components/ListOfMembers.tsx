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
import Eligibleboard from "@/components/eligibleboard";
import { Folder, Newspaper, User } from "lucide-react";
import Link from "next/link";

export default async function Listofeligible() {
	const {data: eligible_students} = await readMembers();
console.log(eligible_students);
	const user = useUserStore.getState().user;
	const isAdmin = user?.user_metadata.role === "admin"

	console.log(`List of modules: ${eligible_students?.length}`);

	return (
		<div className="grid grid-cols-3 justify-between
   					 gap-2 mb-5ex mb-3">
		    {(eligible_students as Ieligible_students[])?.map((eligibleStudents, index) => {
           
				return (
					<div key={index} className="">
					<Link href={`/dashboard/eligibility/${eligibleStudents?.student_id}-${eligibleStudents?.course_code}`}>
					 <Eligibleboard stu_id={eligibleStudents?.student_id} 
					IdNo={eligibleStudents?.id}
					module={eligibleStudents?.course_code}
					avatar={eligibleStudents?.avatar}/>	
					
					</Link>
					</div>
					
				)
			 
			
			})}
		</div>
	);
}
