import { Navigate, Route, Routes } from "react-router-dom";
import WebPage from "../Pages/WebPage";
import Remisiones from "../Pages/Remisiones";
import Prueba from "../Pages/Prueba";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="home/*" element={<WebPage />} />
      <Route path="/" element={<Navigate to="/auth/home" />} />
      <Route path="/Remisiones" element={<Remisiones />} />
      <Route path="/Prueba" element={<Prueba />} />
    </Routes>
  );
}
export default AuthRoutes;
