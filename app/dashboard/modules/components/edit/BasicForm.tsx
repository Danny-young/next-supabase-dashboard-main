"use client";

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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { IPermission, IModules } from "@/types";
import { updateMemberBasicById } from "../../actions";
import { useTransition } from "react";

const FormSchema = z.object({
	course_name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	course_code: z.string(),
	mingpa: z.string(),
	prerequisite: z.string()
});

export default function BasicForm({permission}:{permission: IModules}) {
	
	const [isPending, startTransition] = useTransition();
	
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			course_code: permission?.course_code || '',
			course_name: permission?.course_name || '',
			mingpa: permission?.min_gpa ? permission.min_gpa.toString() : '',
			prerequisite: permission?.required_courses ? permission.required_courses : '' // Use empty string if undefined
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		 
		startTransition(async ()=>{

			const {error} = JSON.parse(await updateMemberBasicById(permission.id,data));

				if(error?.message) {
					toast({
						title: "Fail to update:",
						description: (
							<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
								<code className="text-white">
								error?.message
								</code>
							</pre>
						),
					});

				}else {
					toast({
						title: "successfully update",
						
					});

				}
						});
		
		
		
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-6"
			>
				<FormField
					control={form.control}
					name="course_code"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Course code</FormLabel>
							<FormControl>
								<Input placeholder="Course code" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="course_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Course name</FormLabel>
							<FormControl>
								<Input placeholder="Course name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="mingpa"
					render={({ field }) => (
						<FormItem>
							<FormLabel>minimum gpa</FormLabel>
							<FormControl>
								<Input placeholder="minimum gpa" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="prerequisite"
					render={({ field }) => (
						<FormItem>
							<FormLabel>prerequisite</FormLabel>
							<FormControl>
								<Input placeholder="prerequisite" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="flex gap-2 items-center w-full"
					variant="outline"
				>
					Update{" "}
					<AiOutlineLoading3Quarters
						className={cn(" animate-spin", "hidden")}
					/>
				</Button>
			</form>
		</Form>
	);
}
