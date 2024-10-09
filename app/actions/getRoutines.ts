import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getRoutines() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const routines = await prisma.routine.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});

		return routines;
	} catch (error) {
		console.error("Error fetching routines:", error);
		return { message: "Internal Server Error" };
	}
}
