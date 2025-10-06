import { create } from "zustand";

interface DataFrameState{
    showPromptBox: boolean,
    promptHistory: any,
    setShowPromptBox: any,
    setPromptHistory: any
}

export const useDataFrame = create<DataFrameState>((set) => ({
    showPromptBox: false,
    promptHistory: null,
    setShowPromptBox: (status: boolean) => set(() => ({showPromptBox: status})),
    setPromptHistory: (prompt: any) => set(() => ({promptHistory: prompt}))
}));