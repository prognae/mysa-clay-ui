import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const accessToken = Cookies.get('access_token');
    const tokenType = Cookies.get('token_type');
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const handleLogout = async () => {
                const response = await axios.get(process.env.REACT_APP_API_URL + '/auth/logout', {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `${tokenType} ${accessToken}`
                    }
                });

                if (response.status === 200) {
                    Cookies.remove('access_token');
                    Cookies.remove('token_type');

                    navigate('/login');
                }
            }

            handleLogout()
        } catch (error) {
            console.log(error)
        }
    }, [accessToken, navigate, tokenType])
}

export default Logout;