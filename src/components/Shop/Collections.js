import axios from "axios";
import Cookies from "js-cookie";

export async function getCollections() {
    const accessToken = Cookies.get('access_token');
    const tokenType = Cookies.get('token_type');

    try {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/shop/collections', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `${tokenType} ${accessToken}`
            }
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error.message);
    }
}