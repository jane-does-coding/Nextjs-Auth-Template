"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateRoutinePage = () => {
	const [title, setTitle] = useState<string>("");
	const [icon, setIcon] = useState<string>("");
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!title || !icon) {
			alert("Please enter a title and icon for the routine");
			return;
		}

		const res = await fetch("/api/routines", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title, icon }),
		});

		if (res.ok) {
			const data = await res.json();
			alert("Routine created successfully");
			router.push(`/add-habits?routineId=${data.id}`);
		} else {
			alert("Error creating routine");
			console.log(res);
		}
	};

	return (
		<div>
			<h1>Create a New Routine</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Title:</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Icon:</label>
					<input
						type="text"
						value={icon}
						onChange={(e) => setIcon(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Create Routine</button>
			</form>
		</div>
	);
};

export default CreateRoutinePage;
