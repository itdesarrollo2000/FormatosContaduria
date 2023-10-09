import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../../auth/routes/AuthRoutes";

function AppRouter() {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>

        <Route path="/*" element={<AuthRoutes/>}/>

    </Routes>
  )
}
export default AppRouter;