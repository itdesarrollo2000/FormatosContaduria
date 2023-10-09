import { Navigate, Route, Routes } from "react-router-dom";
import WebPage from "../Pages/WebPage";
import Remisiones from "../Pages/Remisiones";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="home/*" element={<WebPage />} />
      <Route path="/" element={<Navigate to="/auth/home" />} />
      <Route path="/Remisiones" element={<Remisiones />} />
    </Routes>
  );
}
export default AuthRoutes;
