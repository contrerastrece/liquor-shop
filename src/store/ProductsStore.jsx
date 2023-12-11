import { create } from "zustand";
import { ShowProducts } from "../supabase/crudProducts";

export const useProductsStore = create((set) => ({
  dataproducts: [],
  showProducts: async () => {
    const response = await ShowProducts();
    set({ dataproducts: response });
    if (response) {
      return response;
    } else {
      return [];
    }
  },

}));
