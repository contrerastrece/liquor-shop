import { create } from "zustand";
import { ShowCategories } from "../supabase/crudCategories";

export const useCategoriesStore = create((set) => ({
  datacategories: [],
  showCategories: async () => {
    const response = await ShowCategories();
    set({ datacategories: response });
    if (response) {
      return response;
    } else {
      return [];
    }
  },

}));
