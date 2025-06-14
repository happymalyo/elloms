import { create } from "zustand";

interface ImageStore {
  imageStatus: string;
  setImageStatus: (status: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  imageStatus: "",
  setImageStatus: (status) => set({ imageStatus: status }),
  images: [],
  setImages: (images) => set({ images }),
}));
