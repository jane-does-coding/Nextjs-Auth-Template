import getHabits from "./actions/getHabits";
import getRoutines from "./actions/getRoutines";

export default async function Home() {
	const routines = await getRoutines();
	const habits = await getHabits();

	console.log(routines, habits);

	return (
		<div className="">
			<h1 className="text-9xl text-white jura text-center mt-36">
				Auth Template
			</h1>
		</div>
	);
}
