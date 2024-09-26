import { Button } from "@/components/ui/button";
import React from "react";
import DailogForm from "../DialogForm";
import CreateForm from "./CreateForm";

export default function CreateMember() {
	return (
		<DailogForm
			id="create-trigger1"
			title="Apply for TA"
			Trigger={<Button variant="outline">Apply+</Button>}
			form={<CreateForm />}
		/>
	);
}
