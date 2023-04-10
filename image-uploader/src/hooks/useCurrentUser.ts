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
    onEmail: (e: string) => set({ email: e }),
    onUsername: (u: string) => set({ username: u })
}))