"use client";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
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
import { createModule } from "../../actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

const FormSchema = z
	.object({
		course_code: z.string().min(2, {
			message: "Username must be at least 2 characters.",
		}),
		course_name: z.string(),
		mingpa: z.string(),
		prerequisite: z.string(),
			})


export default function MemberForm() {
	const [isPending, startTransition] = useTransition()
	

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			course_code: "",
			course_name: "",
			mingpa: "",
			prerequisite: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		startTransition(async () => {
         const result =  await createModule(data);

		 const {error} = JSON.parse(result);
		 if (error?.message){
				console.log(error.message);
			toast({
				title: "Failed to create module:",
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">
							{error.message}
						</code>
					</pre>
				),
			});
		 }  else {

		 

		 document.getElementById("create-trigger")?.click();    
		
		 toast({
			 title: "Successfully create module",
			 
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
							<FormLabel>Course Code</FormLabel>
							<FormControl>
								<Input
									placeholder="course code"
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
					name="course_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Course Name</FormLabel>
							<FormControl>
								<Input
									placeholder="course name"
									type="text"
									onChange={field.onChange}
								/>
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
							<FormLabel>Minimum GPA</FormLabel>
							<FormControl>
								<Input
									placeholder="Minimum GPA"
									onChange={field.onChange}
								/>
							</FormControl>
							<FormDescription>
								
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

<FormField
					control={form.control}
					name="prerequisite"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Prerequisite</FormLabel>
							<FormControl>
								<Input
									placeholder="Prerequisite"
									type="text"
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
					<AiOutlineLoading3Quarters
						className={cn("animate-spin", { hidden: !isPending })}
					/>
				</Button>
			</form>
		</Form>
	);
}
