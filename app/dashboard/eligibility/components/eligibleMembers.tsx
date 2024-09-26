import { Button } from "@/components/ui/button";
import React from "react";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import ListOfMembers from "./ListOfMembers";
import Table from "@/components/ui/Table";

export default function EligibleMembers() {
	const tableHeader = ["Stu_Id", "Course_Name", "course_gpa","MinGPA"];

	return (
		<Table headers={tableHeader}>
			<ListOfMembers />
		</Table>
	);
}
