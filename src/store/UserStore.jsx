import { create } from "zustand";
import { ShowUser, UpdateUser } from "../supabase/crudUser";

export const useUsuariosStore = create((set, get) => ({
  idusuario: 0,
  datausuarios: [],

  showUser: async () => {
    const response = await ShowUser();
    set({ datausuarios: response });
    if (response) {
      set({ idusuario: response.id });
      return response;
    } else {
      return [];
    }
  },
  updateUser: async (p) => {
    await UpdateUser(p);
    const { showUser } = get();
    set(showUser);
  },
}));
