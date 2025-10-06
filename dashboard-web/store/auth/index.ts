import { create } from "zustand";

//Todo
interface AuthState{
    username?: string;
    setUserName: (name: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    username: undefined,
    setUserName: (name: string) => set({username: name}),
}));


// to use this simple import useTestStore and extract data to use 
// for eg 
//const { username,setUserName } = useTestStore();