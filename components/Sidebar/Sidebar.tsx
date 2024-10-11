"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { TbChevronLeftPipe } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";

const Sidebar = ({ isOpen, setIsOpen }: any) => {
	/* 	const [isOpen, setIsOpen] = useState(true);
	 */

	return (
		<div>
			<div
				className={`${
					isOpen
						? "w-[17.5rem] xl:w-[20rem] px-2 xl:px-4 py-2 xl:py-4"
						: "w-[5rem] px-2 pt-8 pb-6"
				} bg-neutral-300/50 border-r-2  transition-all border-neutral-300 h-screen flex flex-col justify-center gap-2 fixed`}
			>
				<button>
					<div
						className={`flex items-center justify-start  hover:bg-neutral-400/25 rounded-lg relative text-neutral-600 transition-all mx-auto ${
							isOpen ? " px-8 py-6 bg-neutral-400/15" : "w-fit p-0 mb-2"
						}`}
					>
						<h3
							className={`${
								isOpen ? "opacity-100 flex" : "opacity-0 hidden m-0"
							} mr-auto transition-all z-[1] text-neutral-600 nunito text-[1.2rem]`}
						>
							Organize
						</h3>
						<div className="">
							<div
								className={`loader ${isOpen ? "loader-mini" : "loader-tiny"}`}
							>
								<div className="square"></div>
								<div className="square"></div>
								<div className="square"></div>
								<div className="square"></div>
							</div>
						</div>
					</div>
				</button>

				<button onClick={() => setIsOpen(!isOpen)}>
					<div
						className={`flex items-center justify-start bg-neutral-400/15 hover:bg-neutral-400/35 rounded-lg relative text-neutral-600 transition-all mx-auto ${
							isOpen ? " px-8 py-2" : "w-fit px-3 py-3"
						}`}
					>
						<h3
							className={`${
								isOpen ? "opacity-100 flex" : "opacity-0 hidden"
							} mr-auto transition-all z-[1] text-neutral-600 nunito text-[1.2rem]`}
						>
							Collapse
						</h3>
						{isOpen ? (
							<TbChevronLeftPipe size={32} />
						) : (
							<IoIosArrowForward size={32} />
						)}
					</div>
				</button>
				<button>
					<div
						className={`flex items-center justify-start bg-neutral-400/15 hover:bg-neutral-400/35 rounded-lg relative text-neutral-600 transition-all mx-auto ${
							isOpen ? " px-8 py-2" : "w-fit px-3 py-3"
						}`}
					>
						<h3
							className={`${
								isOpen ? "opacity-100 flex" : "opacity-0 hidden"
							} mr-auto transition-all z-[1] text-neutral-600 nunito text-[1.2rem]`}
						>
							Routines
						</h3>
						<FaSun className="" size={32} />
					</div>
				</button>
				<button>
					<div
						className={`flex items-center justify-start bg-neutral-400/15 hover:bg-neutral-400/35 rounded-lg relative text-neutral-600 transition-all mx-auto ${
							isOpen ? " px-8 py-2" : "w-fit px-3 py-3"
						}`}
					>
						<h3
							className={`${
								isOpen ? "opacity-100 flex" : "opacity-0 hidden"
							} mr-auto transition-all z-[1] text-neutral-600 nunito text-[1.2rem]`}
						>
							Tasks
						</h3>
						<FaBoxOpen className="" size={32} />
					</div>
				</button>
				<button>
					<div
						className={`flex items-center justify-start bg-neutral-400/15 hover:bg-neutral-400/35 rounded-lg relative text-neutral-600 transition-all mx-auto ${
							isOpen ? " px-8 py-2" : "w-fit px-3 py-3"
						}`}
					>
						<h3
							className={`${
								isOpen ? "opacity-100 flex" : "opacity-0 hidden"
							} mr-auto transition-all z-[1] text-neutral-600 nunito text-[1.2rem]`}
						>
							Pomodoro
						</h3>
						<LuClock2 className="" size={32} />
					</div>
				</button>
				<button>
					<div
						className={`flex items-center justify-start bg-neutral-400/15 hover:bg-neutral-400/35 rounded-lg relative text-neutral-600 transition-all mx-auto ${
							isOpen ? " px-8 py-2" : "w-fit px-3 py-3"
						}`}
					>
						<h3
							className={`${
								isOpen ? "opacity-100 flex" : "opacity-0 hidden"
							} mr-auto transition-all z-[1] text-neutral-600 nunito text-[1.2rem]`}
						>
							Profile
						</h3>
						<IoPerson className="" size={32} />
					</div>
				</button>
				<button className="mt-auto">
					<div
						className={`flex items-center justify-start bg-neutral-400/15 hover:bg-neutral-400/35 rounded-lg relative text-neutral-600 transition-all mx-auto ${
							isOpen ? " px-8 py-2" : "w-fit px-3 py-3"
						}`}
					>
						<h3
							className={`${
								isOpen ? "opacity-100 flex" : "opacity-0 hidden"
							} mr-auto transition-all z-[1] text-neutral-600 nunito text-[1.2rem]`}
						>
							Logout
						</h3>
						<TbLogout className="" size={32} />
					</div>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
