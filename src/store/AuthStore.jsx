import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

const signInGoogle = async (set) => {
  console.log("set");
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log("Ocurrió un error al iniciar session");
      set({ isAuth: true });
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const signOutGoogle = async (set) => {
  try {
    const { error } = await supabase.auth.signOut();
    set({ isAuth: false });
    if (error) {
      console.log("Ocurrió un error al cerrar la session");
    }
  } catch (error) {
    console.log(error);
  }
};

export const useAuthStore = create((set) => ({
  isAuth: false,
  signIn: () => signInGoogle(set),
  signOut: () => signOutGoogle(set),
}));
