import { create } from "zustand";

interface RoutineModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useRoutineModal = create<RoutineModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useRoutineModal;
