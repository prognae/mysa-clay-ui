import axios from "axios";
import Cookies from "js-cookie";

export async function getProfile() {
    const accessToken = Cookies.get('access_token');
    const tokenType = Cookies.get('token_type');

    try {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/auth/profile', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `${tokenType} ${accessToken}`
            }
        });

        if (response.status === 200) {
            return response.data.data;
        }
    } catch (error) {
        console.log(error.message);

        if (error.status === 401) {
            Cookies.remove('access_token');
            Cookies.remove('token_type');
        }

        return error.message;
    }
}