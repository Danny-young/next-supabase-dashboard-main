import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import EditMember from "./edit/EditMember";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/lib/store/user";
import { readMembers } from "../actions";
import { IModules, IPermission } from "@/types";
import DeleteMember from "./edit/DeleteMember";

export default async function Listofmodules() {
	const {data: modules} = await readMembers();

	const user = useUserStore.getState().user;
	const isAdmin = user?.user_metadata.role === "admin"

	console.log("List of modules: ",  modules?.length);

	return (
		<div className="dark:bg-inherit bg-white mx-2 rounded-sm">
		    {(modules as IModules[])?.map((module, index) => {
           
				return (
					<div
						className=" grid grid-cols-5  rounded-sm  p-2 align-middle font-normal"
						key={index}
					>
						<h1>{module.course_code}</h1>
			
						<div>
						<h1>{module.course_name.slice(0,20)}...</h1>
						</div>
						<h1>{module.min_gpa}</h1>
						<div>
						<h1>{module.required_courses}</h1>
						</div>

						<div className="flex gap-2 items-center">
							{isAdmin && 
								<DeleteMember user_id = {module.id} />
							}
							<EditMember isAdmin={isAdmin} module={module} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
