import { useState } from "react";
import axios from "axios";
import logo from '../../assets/images/mysa-logo.avif';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
    const navigate = useNavigate();

    const formData = {
        credentials: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(formData);
    const [errorMessage, setErrorMessage] = useState({ visible: false, message: '' });

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/api/auth/login', credentials);

            if (response.status === 200) {
                Cookies.set('access_token', response.data.data.access_token);
                Cookies.set('token_type', response.data.data.token_type);

                navigate('/shop');
            }
        } catch (error) {
            console.log(error.message);

            credentials.credentials = '';
            credentials.password = '';

            setErrorMessage({ visible: true, message: error.response.data.message });
        }
    }

    return (
        <div className="flex justify-center items-center sm:h-screen font-inter">
            <div className="login-form form-container sm:rounded-xl shadow drop-shadow-lg p-12 bg-p-white w-[500px] h-[650px] max-sm:w-full max-sm:h-[100vh]">
                <form>
                    <img src={logo} alt="logo" width={70} className="mb-5" />
                    <h1 className="text-2xl font-inter font-extrabold text-d-gray">Log in</h1>
                    <h2 className="mb-10 font-inter text-[gray] font-semibold">Welcome to Mysa Clay!</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="credentials" className="text-sm mb-1 font-semibold text-d-gray">Email / Username</label>
                            <input type="text" name="credentials" id="credentials" value={credentials.credentials} onChange={(e) => setCredentials({ ...credentials, credentials: e.target.value })} required className="border border-[#a1a1a1] rounded h-9 p-3" placeholder="example@gmail.com" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-sm mb-1 font-semibold text-d-gray">Password</label>
                            <input type="password" name="password" id="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required className="border border-[#a1a1a1] rounded h-9 p-3" />
                        </div>

                        {errorMessage.visible &&
                            <p className="font-light text-[red] text-sm">{errorMessage.message}</p>
                        }

                        <p className="text-sm text-p-dpink font-semibold"><a href="/forgot">Forgot Password?</a></p>

                        <div className="flex justify-center">
                            <button className="h-9 w-full rounded-md text-p-white bg-p-pink font-semibold shadow" onClick={handleLogin}>Log in</button>
                        </div>

                        <p className="text-sm text-p-dpink">Don't have an account yet? <a href="/register" className="text-p-blue">Sign up for free!</a></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;