import React from "react";
import DailogForm from "../DialogForm";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import EditForm from "./EditorForm";
import { IPermission, IModules } from "@/types";

export default function EditMember({isAdmin, permission}:{isAdmin:boolean, permission:IModules}) {
	return (
		<DailogForm
			id="update-trigger"
			title="Edit Module"
			Trigger={
				<Button variant="outline">
					<Pencil1Icon />
					Edit
				</Button>
			}
			form={<EditForm isAdmin={isAdmin} permission={permission}/>}
		/>
	);
}
