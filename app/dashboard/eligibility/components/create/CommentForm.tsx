"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
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


import { addComment } from "../../actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

const FormSchema = z.object({
	student_id: z.string(),
	coursename: z.string(),
	coursecode: z.string(),
	course_grade: z.string(), // Assuming grade is between 0 and 5
});

export default function CommentForm() {
	const [isPending, startTransition] = useTransition();
	

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			comment: "",
			
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		startTransition(async () => {
			const result = await addComment(data);
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
					title: "Failed to add comment",
					description: parsedResult.error.message,
				});
			} else {
				// Trigger any other necessary action
				document.getElementById("create-trigger")?.click();

				toast({
					title: "Comment successfully added",
				});
			}
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-4/4 space-y-6 "
			>
				

				<hr />

				


				<FormField
					control={form.control}
					name="coursename"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder="Comment here...."
									rows={4}
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
