import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { title, icon } = body;
	const user = await getCurrentUser();
	const userId = user?.id;

	if (!userId || !title) {
		return new NextResponse("Missing required fields", { status: 400 });
	}

	const routine = await prisma.routine.create({
		data: {
			title,
			userId,
			icon,
			/* 			habits: [],
			 */
		},
	});

	return NextResponse.json(routine);
}
