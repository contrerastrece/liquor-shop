import  { createContext, useState ,useContext, useEffect} from 'react'
import { supabase } from '../supabase/supabase.config';
import { InsertUser, UpdateUser } from '../supabase/crudUser';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {

    const {data:authListener} = supabase.auth.onAuthStateChange(
      async (event,session)=>{
        if (session==null){
          setUser(null);
        }else{
          setUser(session?.user?.user_metadata);
          InsertUser(session?.user.user_metadata,session?.user.id);
          // UpdateUser(session?.user.user_metadata)

        }
      }
    )
    return () => {
      authListener.subscription;
    };

  }, []);


  return (
   <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
  )
}

export const UserAuth=() =>{
  return useContext(AuthContext);
}
