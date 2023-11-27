import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routes/MyRoutes";
import './app.css';
function App() {
  return (
    <div className="p-0 m-0 ">
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
