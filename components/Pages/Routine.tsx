"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import useRoutineModal from "@/app/hooks/useRoutineModal";
import { IoIosArrowBack } from "react-icons/io";

const Routine = ({ routine }: any) => {
	const [isOpen, setIsOpen] = useState(true);
	const RoutineModal = useRoutineModal();

	return (
		<div>
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<div
				className={`${
					isOpen ? "ml-[17.5rem] xl:ml-[20rem]" : "ml-[5rem] "
				} transition-all px-20`}
			>
				<h2 className="nunito text-[2.8rem] text-neutral-800 mb-4 pt-12 flex items-center justify-start gap-4">
					<a href="/routines">
						<IoIosArrowBack className="text-neutral-700" />
					</a>
					{routine.title}
				</h2>
				{routine.habits.length == 0 && (
					<div className="nunito text-[2rem] mt-4 mb-8 text-center">
						No Habits in this Routine
					</div>
				)}
				<div className={` gap-y-3 flex flex-col`}>
					{routine.habits.map((habit: any) => (
						<a
							href={`/routines/${habit.id}`}
							key={habit.id}
							className="w-full bg-neutral-300/30 border-neutral-300/75 border-2 px-6 py-2 rounded-[2rem] flex items-center justify-start gap-4"
						>
							<div className="flex items-center justify-between w-full gap-2">
								<h2 className="nunito text-[1.35rem] text-neutral-900 flex items-center justify-center gap-3">
									<span className="text-[2.25rem]">{habit.icon}</span>
									{habit.title}{" "}
								</h2>
								<p className="text-neutral-600 font-extralight text-[1rem]">
									{habit.time} time
								</p>
							</div>
						</a>
					))}
					<div
						onClick={() => RoutineModal.onOpen()}
						className="w-full bg-neutral-300/50 border-neutral-300/95 border-2 px-8 py-2 rounded-[2rem] flex items-center justify-center cursor-pointer"
					>
						<h2 className="nunito text-[2rem] text-neutral-600">+</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Routine;
