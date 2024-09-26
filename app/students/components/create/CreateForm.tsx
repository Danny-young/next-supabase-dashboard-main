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
import { createMember} from "../../actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

const FormSchema = z
	.object({
		id: z.string(),
        name: z.string().min(2, {
			message: "Username must be at least 2 characters.",
		}),
		gender: z.enum(["Male", "Female"]),
		degree: z.string(),
		email: z.string().email(),
		module: z.string(),
		
	});

export default function MemberForm() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition()
	//const roles = ["admin", "user"];
	const gender = ["Male", "Female"];
	const modules = ["ENGL101","MGT101","MATH101","IT101","IT103","ENGL102","PHY101","CS103","MATH102",
"CS104","IT109","IT102","CS203","IT201","NT201","FRN101","CS205","FRN102","CS208","IT205","CS209","CS204",
"MATH204","CS304","IT301","MS101","NT301","CS309","IT303","CS303","IT306","CS310","IT302","CS312","IT304",
"IT401","CS402","IT403","CS401","IT404","CS403","TE303","CS456","IT454","IT450"];

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			id: "",
			name: "",
			gender: "Male",
            degree: "",
            email: "",
			module: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		startTransition(async () => {
			const result = await createMember(data);
			
			// Check if result is a non-empty string before parsing
			if (typeof result === 'string' && result.trim()) {
				try {
					const parsedResult = JSON.parse(result);
					const { error } = parsedResult;
					
					if (error?.message) {
						toast({
							title: "Failed:",
							description: (
								<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
									<code className="text-white">
										{error.message}
									</code>
								</pre>
							),
						});
					} else {
						//document.getElementById("create-trigger1")?.click();
						
						toast({
							title: "Successfully saved",
							
						});

						router.push('/');
					}
				} catch (parseError) {
					console.error('Error parsing result:', parseError);
					// Handle or show an error message to the user
				}
			} else {
				console.error('Invalid result format');
				// Optionally handle or show an error message to the user
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
					name="id"
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
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Student Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Kwame Mensah"
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
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="kwamemensah@gmail.com"
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
					name="degree"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Degree</FormLabel>
							<FormControl>
								<Input
									placeholder="BSc. Information Technology"
									onChange={field.onChange}
								/>
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				
				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Gender</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select user status" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{gender.map((gender, index) => {
										return (
											<SelectItem
												value={gender}
												key={index}
											>
												{gender}
											</SelectItem>
										);
									})}
								</SelectContent>
							</Select>
							<FormDescription>
								{/* status resign mean the user is no longer work
								here. */}
							</FormDescription>

							<FormMessage />
						</FormItem>
					)}
				/>
				<hr/>
				<h3 className="font-semibold">Preferred Module</h3>

				<FormField
					control={form.control}
					name="module"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Module</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select your preferred module to teach" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{modules.map((module, index) => {
										return (
											<SelectItem
												value={module}
												key={index}
											>
												{module}
											</SelectItem>
										);
									})}
								</SelectContent>
							</Select>
							<FormDescription>
								{/* status resign mean the user is no longer work
								here. */}
							</FormDescription>

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
