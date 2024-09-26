import React from "react";
import ListOfTodo from "./ListOfTodo";
import Table from "@/components/ui/Table";

export default function TodoTable() {
	const tableHeader = ["Course_code", "Name","Prerequisites", "GPA"];

	return (
		<Table headers={tableHeader}>
			<ListOfTodo />
		</Table>
	);
}
