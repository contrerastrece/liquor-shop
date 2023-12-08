import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routes/MyRoutes";
import "./app.css";
import { useUsuariosStore } from "./store/UserStore";
import { useEffect, useState } from "react";
function App() {
  const { datausuarios, showUser } = useUsuariosStore();
  const [theme, setTheme] = useState("mytheme");
  const themebd = datausuarios[0].theme === "0" ? "light" : "dark";
  const htmlElement = document.documentElement;
  htmlElement.setAttribute("data-theme", themebd);

  useEffect(() => {
    setTheme(themebd);
    showUser();
  }, [showUser]); //

  // console.log(datausuarios, "🫤");
  return (
    <div className="p-0 m-0 ">
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
