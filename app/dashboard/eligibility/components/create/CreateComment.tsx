import { Button } from "@/components/ui/button";
import React from "react";
import DailogForm from "../DialogForm";
import CreateComment from "@/app/dashboard/eligibility/components/create/CommentForm";

export default function CreateMember() {
	return (
		<DailogForm
			id="create-trigger"
			title="Add Comment"
			Trigger={<Button variant="outline">Comment+</Button>}
			form={<CreateComment/>}
		/>
	);
}
