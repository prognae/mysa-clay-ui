import { useState } from "react";
import axios from "axios";
import logo from '../images/mysa-logo.avif';
import Alert from './Alert';

const Register = () => {
    const formData = {
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        username: '',
        password: '',
        password_confirmation: '',
    }

    const [payload, setPayload] = useState(formData);
    const [alert, toggleAlert] = useState({ visible: false, status: '', message: '' });
    const [errorMessage, setErrorMessage] = useState({ visible: false, message: '' });

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/register', payload);

            if (response.status === 200) {
                payload.first_name = '';
                payload.last_name = '';
                payload.email = '';
                payload.contact_number = '';
                payload.username = '';
                payload.password = '';
                payload.password_confirmation = '';

                toggleAlert({ visible: true, status: response.data.status, message: response.data.message });
            }
        } catch (error) {
            console.log(error)

            setErrorMessage({ visible: true, message: error.response.data.message });
        }
    }

    return (
        < div className="flex justify-center items-center font-inter p-1" >
            <div className="login-form form-container rounded-xl shadow drop-shadow-lg p-12 bg-p-white maxw-[500px] maxh-[650px] test">
                <form>
                    <img src={logo} alt="logo" width={70} className="mb-5" />
                    <h1 className="text-2xl font-inter font-extrabold text-d-gray">Sign Up</h1>
                    <h2 className="mb-10 font-inter text-[gray] font-semibold">Welcome to Mysa Clay!</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-d-gray">First Name</label>
                                <input type="text" name="first_name" id="first_name" value={payload.first_name} onChange={(e) => setPayload({ ...payload, first_name: e.target.value })} required className="border border-[#a1a1a1] rounded h-9 p-3" placeholder="John" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-d-gray">Last Name</label>
                                <input type="text" name="last_name" id="last_name" value={payload.last_name} onChange={(e) => setPayload({ ...payload, last_name: e.target.value })} required className="border border-[#a1a1a1] rounded h-9 p-3" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-d-gray">Email</label>
                            <input type="email" name="email" id="email" value={payload.email} onChange={(e) => setPayload({ ...payload, email: e.target.value })} required className="border border-[#a1a1a1] rounded h-9 p-3" placeholder="johndoe@example.com" />
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold text-d-gray">Contact Number</label>
                                    <input type="number" name="contact_number" id="contact_number" value={payload.contact_number} onChange={(e) => setPayload({ ...payload, contact_number: e.target.value })} required className="border border-[#a1a1a1] rounded h-9 p-3" placeholder="" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-d-gray">Username</label>
                                <input type="text" name="username" id="username" value={payload.username} onChange={(e) => setPayload({ ...payload, username: e.target.value })} required minLength={4} className="border border-[#a1a1a1] rounded h-9 p-3" placeholder="johndoe" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-d-gray">Password</label>
                                <input type="password" name="password" id="password" value={payload.password} onChange={(e) => setPayload({ ...payload, password: e.target.value })} required minLength={8} className="border border-[#a1a1a1] rounded h-9 p-3" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-d-gray">Confirm Password</label>
                                <input type="password" name="password_confirmation" id="password_confirmation" value={payload.password_confirmation} onChange={(e) => setPayload({ ...payload, password_confirmation: e.target.value })} required className="border border-[#a1a1a1] rounded h-9 p-3" />
                            </div>
                        </div>

                        {errorMessage.visible &&
                            <p className="font-light text-[red] text-sm">{errorMessage.message}</p>
                        }

                        <div className="flex justify-center">
                            <button className="h-9 w-full rounded-md text-p-white bg-p-pink font-semibold shadow" onClick={handleRegister}>Register</button>
                            {/* <button className="h-9 w-full rounded-md text-p-white bg-p-pink font-semibold shadow mt-5" onClick={(e) => toggleAlert({ visible: true })}>Register</button> */}
                        </div>
                        <p className="text-sm text-p-dpink">Already have an account? <a href="/login" className="text-p-blue">Log in here!</a></p>
                    </div>
                </form>
            </div>

            {alert.visible && (
                <div className="fixed inset-0 bg-[#3f3f3f] bg-opacity-60 transition-opacity" onClick={(e) => toggleAlert({ visible: false })} ></div>
            )}

            {alert.visible && <Alert status={alert.status} message={alert.message} />}
        </div >
    )
}

export default Register;