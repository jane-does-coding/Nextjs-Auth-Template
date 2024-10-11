import getRoutineById from "@/app/actions/getRoutineById";
import Routine from "@/components/Pages/Routine";
import React from "react";

const page = async (params: any) => {
	const routine = await getRoutineById(params.params.routineId);
	console.log(routine);
	return (
		<div>
			<Routine routine={routine} />
		</div>
	);
};

export default page;
