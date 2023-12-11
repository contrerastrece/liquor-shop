import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routes/MyRoutes";
import "./app.css";
import { useUsuariosStore } from "./store/UserStore";
import { useEffect, useState } from "react";
import { useProductsStore } from "./store/ProductsStore";
import { useCategoriesStore } from "./store/CategoriesStore";
function App() {
  const { datausuarios, showUser } = useUsuariosStore();
  const [tema, setTema] = useState("mytheme");
  const themebd = datausuarios[0]?.theme === "0" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", themebd);

  const showProducts=useProductsStore((state)=>state.showProducts);

  const showCategories=useCategoriesStore((state)=>state.showCategories);

  useEffect(() => {
    setTema(themebd);
    showUser();
    showProducts();
    showCategories();
  }, [showUser,showProducts,showCategories]); //

  return (
    <div className="p-0 m-0 ">
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
