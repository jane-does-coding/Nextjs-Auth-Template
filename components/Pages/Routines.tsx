"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import useRoutineModal from "@/app/hooks/useRoutineModal";

const Routines = ({ routines }: any) => {
	const [isOpen, setIsOpen] = useState(true);
	const RoutineModal = useRoutineModal();

	return (
		<div>
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<div
				className={`${
					isOpen ? "ml-[17.5rem] xl:ml-[20rem]" : "ml-[5rem] "
				} transition-all px-12`}
			>
				<h2 className="nunito text-[2.8rem] text-neutral-800 mb-4 pt-12">
					Your Routines
				</h2>
				<div
					className={`grid gap-6 gap-y-4 ${
						isOpen ? "grid-cols-2" : "grid-cols-3"
					}`}
				>
					{routines.map((routine: any) => (
						<a
							href={`/routines/${routine.id}`}
							key={routine.id}
							className="w-full bg-neutral-300/50 border-neutral-300/95 border-2 px-8 py-6 pt-4 rounded-[2rem] flex items-center justify-start gap-4"
						>
							<div className="">
								<h2 className="nunito text-[1.35rem] text-neutral-900 flex items-center justify-center gap-3">
									<span className="text-[2.25rem]">{routine.icon}</span>
									{routine.title}{" "}
								</h2>
								<p className="text-neutral-600 font-extralight text-[1rem]">
									{routine.habits.length} habits
								</p>
							</div>
						</a>
					))}
					<div
						onClick={() => RoutineModal.onOpen()}
						className="w-full bg-neutral-300/50 border-neutral-300/95 border-2 px-8 py-6 rounded-[2rem] flex items-center justify-center cursor-pointer"
					>
						<h2 className="nunito text-[2rem] text-neutral-600">+</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Routines;
