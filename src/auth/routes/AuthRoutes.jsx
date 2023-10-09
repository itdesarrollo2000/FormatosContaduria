import { Navigate, Route, Routes } from "react-router-dom";
import WebPage from "../Pages/WebPage";


function AuthRoutes () {
    return (
        <Routes>
            <Route path="home" element={<WebPage/>}/>

            <Route path="/" element={<Navigate to="/auth/home"/>}/>
        </Routes>
    )
}
export default AuthRoutes;