import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const UnprotectedRotes = () => {
    const token = Cookies.get('access_token');

    return token ? <Navigate to="/shop" /> : <Outlet />
}

export default UnprotectedRotes;