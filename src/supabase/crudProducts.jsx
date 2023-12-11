import { supabase } from "./supabase.config";

export const ShowProducts = async ()=>{
  try {
    const { error, data } = await supabase
      .from("tbl_products")
      .select()
    if (error) {
      alert("MostrarProductos", error.message);
    }
    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.error_description || error.message + "MostrarProductos");
  }
}