import getRoutines from "@/app/actions/getRoutines";
import Routines from "@/components/Pages/Routines";
import React from "react";

const page = async () => {
	const routines = await getRoutines();
	console.log(routines);

	return (
		<div>
			<Routines routines={routines} />
		</div>
	);
};

export default page;
