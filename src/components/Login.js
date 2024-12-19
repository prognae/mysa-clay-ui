import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [credentials, setCredentials] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/login', {
                credentials,
                password
            });

            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="form-container">
                <h1 className="text-3xl font-bold mb-1">Login</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label >Email or Username</label>
                        <input type="text" name="credentials" id="credentials" value={credentials} onChange={(e) => setCredentials(e.target.value)} required className="border border-input h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="example@gmail.com" />
                    </div>
                    <div className="flex flex-col">
                        <label >Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border border-input h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <button className="border w-full" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;