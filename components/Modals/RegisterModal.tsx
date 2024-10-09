"use client";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import checkPassword from "@/app/actions/checkPassword";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		try {
			const isValidPassword = await checkPassword(data.password);

			if (isValidPassword.error) {
				toast.error(isValidPassword.error);
				console.log(isValidPassword);
				setIsLoading(false);
				return;
			}

			await axios.post("/api/register", data);

			registerModal.onClose();

			const callback = await signIn("credentials", {
				...data,
				redirect: false,
			});

			setIsLoading(false);

			if (callback?.ok) {
				toast.success("Logged in");
				router.push("/");
				router.refresh();
				loginModal.onClose();
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		} catch (err) {
			console.log(err);
			toast.error("Something went wrong");
			setIsLoading(false);
		}
	};

	const switchModal = () => {
		registerModal.onClose();
		loginModal.onOpen();
	};

	const bodyContent = (
		<div className="flex flex-col gap-3">
			<Heading title="Register" subtitle="Create an account" />
			<div className="flex gap-3">
				<Input
					id="name"
					label="Full Name"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<Input
					id="username"
					label="Username"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
			</div>
			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col text-center items-center justify-center py-1 pt-3 relative">
			<p className="flex flex-row gap-2">
				Already have an account?{" "}
				<span
					onClick={switchModal}
					className="hover:cursor-pointer flex block transition hover:underline"
				>
					Login
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel="Register"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
