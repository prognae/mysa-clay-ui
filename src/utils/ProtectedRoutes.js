import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRotes = () => {
    const token = Cookies.get('access_token');

    return token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRotes;