import { supabase } from "./supabase.config";

export const ShowCategories = async ()=>{
  try {
    const { error, data } = await supabase
      .from("tbl_categories")
      .select()
    if (error) {
      alert("MostrarCategories", error.message);
    }
    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.error_description || error.message + "MostrarCategories");
  }
}