import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getHabits() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const habits = await prisma.habit.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});

		return habits;
	} catch (error) {
		console.error("Error fetching habits:", error);
		return { message: "Internal Server Error" };
	}
}
