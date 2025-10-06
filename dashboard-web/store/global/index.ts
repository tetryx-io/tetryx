import { create } from "zustand";

//Todo
interface GlobalState{
    username?: string;
    setUserName: (name: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
    username: undefined,
    setUserName: (name: string) => set({username: name}),
}));