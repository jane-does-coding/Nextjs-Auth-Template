import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { routineId, habits } = body;

	if (!routineId || !habits || !Array.isArray(habits)) {
		return new NextResponse("Missing required fields", { status: 400 });
	}

	const updatedRoutine = await prisma.routine.update({
		where: { id: routineId },
		data: {
			habits: {
				create: habits.map(
					(habit: { title: string; time: string; icon: string }) => ({
						title: habit.title,
						time: habit.time,
						icon: habit.icon,
					})
				),
			},
		},
	});

	return NextResponse.json(updatedRoutine);
}
