import { create } from "zustand";

// Define types for the store state
interface PlayerState {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

// Create the zustand store
export const useKickStore = create<PlayerState>((set) => ({
  isPlaying: false,
  setIsPlaying: (playing: boolean) => set(() => ({ isPlaying: playing })),
}));
