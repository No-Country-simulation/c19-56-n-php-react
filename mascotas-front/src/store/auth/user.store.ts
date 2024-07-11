import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface IAppState {
  user: IUser | null;
  token: string;
  setToken: (value: string) => void;
  setUser: (value: IUser | null) => void;
}

const authUser: StateCreator<IAppState, [["zustand/devtools", never]]> = (
  set
) => ({
  user: null,
  token: "",
  setToken: (value: string) => set({ token: value }, false, "setToken"),
  setUser: (value: IUser | null) => set({ user: value }, false, "setUser"),
});

export const useAuthStore = create<IAppState>()(
  devtools(
    persist(authUser, {
      name: "auth",
    })
  )
);
