"use client";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { createMember } from "../../actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

const FormSchema = z.object({
	student_id: z.string(),
	coursename: z.string(),
	coursecode: z.string(),
	course_grade: z.string(), // Assuming grade is between 0 and 5
});

export default function MemberForm() {
	const [isPending, startTransition] = useTransition();
	const modules = [
		"ENGL101", "MGT101", "MATH101", "IT101", "IT103", "ENGL102", "PHY101",
		"CS103", "MATH102", "CS104", "IT109", "IT102", "CS203", "IT201", "NT201",
		"FRN101", "CS205", "FRN102", "CS208", "IT205", "CS209", "CS204", "MATH204",
		"CS304", "IT301", "MS101", "NT301", "CS309", "IT303", "CS303", "IT306",
		"CS310", "IT302", "CS312", "IT304", "IT401", "CS402", "IT403", "CS401",
		"IT404", "CS403", "TE303", "CS456", "IT454", "IT450",
	];

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			student_id: "",
			coursecode: "",
			coursename: "",
			course_grade: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		startTransition(async () => {
			const result = await createMember(data);
			let parsedResult;

			try {
				parsedResult = JSON.parse(result);
			} catch (e) {
				toast({
					title: "Error",
					description: "Failed to parse server response.",
				});
				return;
			}

			if (parsedResult?.error) {
				toast({
					title: "Failed to create member",
					description: parsedResult.error.message,
				});
			} else {
				// Trigger any other necessary action
				document.getElementById("create-trigger")?.click();

				toast({
					title: "Course successfully added",
				});
			}
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-2/4 space-y-6 "
			>
				<FormField
					control={form.control}
					name="student_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Student Id</FormLabel>
							<FormControl>
								<Input
									placeholder="ADS22B00000Y"
									type="text"
									{...field}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<hr />

				<FormField
    control={form.control}
    name="coursecode"
    render={({ field }) => (
        <FormItem>
            <FormLabel>Course Code</FormLabel>
            <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
            >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select module" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-48 overflow-y-auto"> {/* Make the Select scrollable */}
                    {modules.map((module, index) => (
                        <SelectItem value={module} key={index}>
                            {module}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>
    )}
/>


				<FormField
					control={form.control}
					name="coursename"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Course Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Cyber Security"
									type="text"
									{...field}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="course_grade"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Course Grade</FormLabel>
							<FormControl>
								<Input
									placeholder="2.5"
									type="text"
									{...field}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full flex gap-2 items-center"
					variant="outline"
				>
					Submit{" "}
					{isPending && (
						<AiOutlineLoading3Quarters className="animate-spin" />
					)}
				</Button>
			</form>
		</Form>
	);
}
