"use client";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import useRoutineModal from "@/app/hooks/useRoutineModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import EmojiPicker from "emoji-picker-react";

const RoutineModal = () => {
	const registerModal = useRegisterModal();
	const RoutineModal = useRoutineModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [isEmojisOpen, setIsEmojisOpen] = useState(false);
	const [chosenEmoji, setChosenEmoji]: any = useState("😁");
	const [routineTitle, setRoutineTitle] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		const handleSubmit = async () => {
			if (!routineTitle || !chosenEmoji) {
				alert("Please enter a title and icon for the routine");
				return;
			}

			const res = await fetch("/api/routines", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: routineTitle, icon: chosenEmoji }),
			});

			if (res.ok) {
				const data = await res.json();
				alert("Routine created successfully");
				RoutineModal.onClose();
				router.push(`/routines`);
			} else {
				alert("Error creating routine");
				console.log(res);
			}
		};

		handleSubmit();

		console.log(chosenEmoji, routineTitle);
	};

	const bodyContent = (
		<div className="flex flex-col gap-3">
			<Heading title="Routine" subtitle="Create a new routine" center />
			<div className="flex items-center justify-center gap-4">
				<div
					className="text-[2.5rem] bg-neutral-200 rounded-md w-[3.5rem] h-[3.5rem] flex items-center justify-center cursor-pointer"
					onClick={() => setIsEmojisOpen(!isEmojisOpen)}
				>
					{chosenEmoji ? chosenEmoji : "😁"}
				</div>
				<h3 className="nunito text-[1.5rem] text-neutral-600">Choose Icon</h3>
			</div>

			<div className="z-[999] flex items-center justify-center">
				<EmojiPicker
					height={350}
					open={isEmojisOpen}
					className="transition-all"
					previewConfig={{
						showPreview: false,
					}}
					onEmojiClick={(emojiData, event) => {
						setChosenEmoji(emojiData.emoji);
						/* 						setIsEmojisOpen(false);
						 */
					}}
				/>
			</div>

			<div className="w-full relative">
				<input
					value={routineTitle}
					onChange={(e) => setRoutineTitle(e.target.value)}
					placeholder="Routine Title"
					className={`text-neutral-800 peer w-full p-3 pl-4 font-light bg-neutral-400/20 border-2 border-neutral-400/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative placeholder-neutral-500
   
        `}
				/>
			</div>
		</div>
	);
	/* 
	const footerContent = (
		<div className="flex flex-col text-center items-center justify-center py-1 pt-3 relative">
			<p className="flex flex-row gap-2 text-neutral-600">
				Don&apos;t have an account?
				<span
					onClick={switchModal}
					className="hover:cursor-pointer flex  transition hover:underline"
				>
					Sign up
				</span>
			</p>
		</div>
	); */

	return (
		<Modal
			disabled={isLoading}
			isOpen={RoutineModal.isOpen}
			title="Routine"
			actionLabel="Routine"
			onClose={RoutineModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	);
};

export default RoutineModal;
