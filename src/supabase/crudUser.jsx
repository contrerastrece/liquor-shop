import { getIdSupabase } from "./globalSupabase";
import { supabase } from "./supabase.config";

export const InsertUser = async (dataProvider, idAuthSupabase) => {
  const p = {
    name: dataProvider.name,
    img: dataProvider.picture,
    email: dataProvider.email,
    id_auth_supabase: idAuthSupabase,
  };
  try {
    const { data } = await supabase.from("tbl_users").insert(p);
    // console.log(data);
    // if (error) {
    //   console.error("Error inserting user:", error);
    //   // lanzar una excepción o devolver un indicador de error aquí
    //   throw error;
    // }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const ShowUser = async ()=>{
  try {
    const idAuthSupabase = await getIdSupabase();
    const { error, data } = await supabase
      .from("tbl_users")
      .select()
      .eq("id_auth_supabase", idAuthSupabase)
    if (error) {
      alert("MostrarUsuarios", error);
    }
    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.error_description || error.message + "MostrarUsuarios");
  }
}

export const UpdateUser= async (p)=>{
console.log(p);
  try {
    const {data,error} = await supabase.from('tbl_users').update(p).eq('id',p.id);
    if (error) {
      console.error("Error updating user:", error);
      // Puedes manejar el error de manera más estructurada aquí
    }
    // alert("datos actualizados")
    return data;
  }catch (error){
    console.error("Unexpected error updating user:", error);
    // Puedes manejar el error de manera más estructurada aquí
    throw new Error("Failed to update user."); // Puedes personalizar el mensaje según tus necesidades
 
  }
}