"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddHabitsPage = () => {
	const [routineId, setRoutineId] = useState<string>("");
	const [habits, setHabits] = useState<
		{ title: string; time: string; icon: string }[]
	>([]);
	const router = useRouter();

	const addHabit = () => {
		setHabits([...habits, { title: "", time: "", icon: "" }]);
	};

	const updateHabit = (index: number, field: string, value: string) => {
		const updatedHabits = habits.map((habit, i) =>
			i === index ? { ...habit, [field]: value } : habit
		);
		setHabits(updatedHabits);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!routineId) {
			alert("Please enter a routine ID");
			return;
		}

		const res = await fetch("/api/habits", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ routineId, habits }),
		});

		if (res.ok) {
			alert("Habits added successfully");
			router.push("/"); // Redirect to homepage or wherever you want
		} else {
			alert("Error adding habits");
		}
	};

	return (
		<div>
			<h1>Add Habits to Routine</h1>
			<form onSubmit={handleSubmit}>
				{/* Input for Routine ID */}
				<div>
					<label>Routine ID:</label>
					<input
						type="text"
						value={routineId}
						onChange={(e) => setRoutineId(e.target.value)}
						required
					/>
				</div>

				{/* Dynamic Habit Fields */}
				{habits.map((habit, index) => (
					<div key={index}>
						<label>Habit Title:</label>
						<input
							type="text"
							value={habit.title}
							onChange={(e) => updateHabit(index, "title", e.target.value)}
							required
						/>
						<label>Time:</label>
						<input
							type="text"
							value={habit.time}
							onChange={(e) => updateHabit(index, "time", e.target.value)}
							required
						/>
						<label>Icon:</label>
						<input
							type="text"
							value={habit.icon}
							onChange={(e) => updateHabit(index, "icon", e.target.value)}
							required
						/>
					</div>
				))}

				{/* Button to add more habits */}
				<button type="button" onClick={addHabit}>
					Add Another Habit
				</button>

				{/* Submit button */}
				<button type="submit">Submit Habits</button>
			</form>
		</div>
	);
};

export default AddHabitsPage;
