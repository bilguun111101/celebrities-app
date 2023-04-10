import { create } from 'zustand';

interface LoginModalStore {
    email: string;
    username: string;
    onEmail: (e: string) => void;
    onUsername: (e: string) => void;
}

export const useLogInModal = create<LoginModalStore>((set) => ({
    email: '',
    username: '',
    onEmail: (email: string) => set({ email }),
    onUsername: (username: string) => set({ username })
}))