import { create } from "zustand";

interface IngestFormState{
    ingestForm?: any;
    setIngestForm: (ingestForm: any) => void;
}

export const useIngestFormStore = create<IngestFormState>((set) => ({
  ingestForm: null,
  
  setIngestForm: (ingestForm: any) => set({ingestForm: ingestForm}),
}));