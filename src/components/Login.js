import { useState } from "react";
import axios from "axios";
import logo from '../images/mysa-logo.avif';
import Alert from './Alert';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const formData = {
        credentials: '',
        password: ''
    }

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(formData);
    const [alert, toggleAlert] = useState({ visible: false, status: '', message: '' });

    const handleLogin = async (e) => {
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/login', credentials);

            if (response.status === 200) {
                navigate('/shop');
            }
        } catch (error) {
            console.log(error.message);

            toggleAlert({ visible: true, status: error.status, message: error.response.data.message });
        }
    }

    return (
        <div className="flex justify-center items-center h-screen font-inter">
            <div className="login-form form-container rounded-xl shadow drop-shadow-lg p-12 bg-p-white w-[500px] h-[650px] test">
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

                    <p className="text-sm text-p-dpink font-semibold"><a href="/forgot">Forgot Password?</a></p>

                    <div className="flex justify-center">
                        <button className="h-9 w-full rounded-md text-p-white bg-p-pink font-semibold shadow" onClick={handleLogin}>Log in</button>
                    </div>

                    <p className="text-sm text-p-dpink">Don't have an account yet? <a href="/register" className="text-p-blue">Sign up for free!</a></p>
                </div>
            </div>

            {alert.visible && (
                <div className="fixed inset-0 bg-[#3f3f3f] bg-opacity-60 transition-opacity" onClick={(e) => toggleAlert({ visible: false })} ></div>
            )}

            {alert.visible && <Alert status={alert.status} message={alert.message} />}

        </div>
    )
}

export default Login;