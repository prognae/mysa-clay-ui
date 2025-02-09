import { useState, useEffect } from 'react';
import fullLogo from '../../assets/images/mysa-logo-full.avif';

const Navbar = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const toggleBurger = () => {
        setIsToggled(!isToggled)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-[100vw] fixed bg-p-pink sm:flex sm:justify-center max-sm:justify-start font-inter text-sm font-bold text-p-brown top-0 z-50 transition-colors duration-400 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'}`} >
            <div className="h-[75px] flex justify-between items-center max-sm:w-[100vw] sm:w-[80vw] relative">
                <div className="w-1/3">
                    <ul className="flex flex-row gap-3 max-sm:hidden">
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/shop'>Browse</a></li>
                        <li><a href='/shop'>Products</a></li>
                        <li><a href='/about'>About</a></li>
                    </ul>

                    <div className="sm:hidden ml-5">
                        <button data-collapse-toggle="navbar-default" type="button" onClick={toggleBurger}>
                            {!isToggled ? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>

                <div className="w-1/3 max-sm:w-2/3 max-sm:justify-start flex justify-center">
                    <img src={fullLogo} alt="full logo" className="h-12 max-sm:h-9" />
                </div>

                <div className="flex-1 flex justify-end max-sm:hidden">
                    <ul className="flex flex-row gap-3 relative">
                        <div className="flex flex-row gap-3 mr-5">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </li>

                            <button onClick={toggleDropdown} className="focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && props.username && (
                                <div className="absolute right-0 mt-8 w-48 bg-p-dwhite rounded-md shadow-lg z-10 font-medium">
                                    <ul>
                                        <li className="px-4 py-2">Logged in as: <span className="font-semibold text-p-dpink ml-1"> {props.username}</span></li>
                                        <li className="border-t border-p-dgray"></li>

                                        <a href="/"><li className="px-4 py-2 hover:bg-p-dgray cursor-pointer">Profile</li></a>
                                        <a href="/"><li className="px-4 py-2 hover:bg-p-dgray cursor-pointer">Settings</li></a>
                                        <a href="/logout"><li className="px-4 py-2 hover:bg-p-dgray cursor-pointer">Logout</li></a>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            </div>

            <div className={`h-[100vh] z-60 relative w-full bg-p-pink ${!isToggled ? 'hidden' : null}`}>
                <div className="top-menu h-4/6">
                    <div className="p-5">
                    {/* <label htmlFor="search" className="text-sm mb-1 font-semibold text-d-gray">Search</label>
                    <input type="text" name="search" id="search" className="border border-[#a1a1a1] rounded h-9 p-3" placeholder="example@gmail.com" /> */}
                        <ul className="flex flex-col gap-5 justify-center items-center">
                            <li><a href='/home'>Home</a></li>
                            <li><a href='/shop'>Browse</a></li>
                            <li><a href='/shop'>Products</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/about'>Cart</a></li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-menu border-t-2 border-t-p-ddpink h-2/6 p-5">
                    {!props.username && (
                        <div className="flex flex-col gap-2 mt-2">
                            <a href="/login">
                                <button className="border-2 border-p-dwhite w-full rounded-3xl p-2">
                                    <span className="text-p-white">Sign In</span>
                                </button>
                            </a>

                            <a href="/register">
                                <button className="border-2 border-p-dwhite bg-p-dwhite w-full rounded-3xl p-2">
                                    <span className="text-p-dpink">Register</span>
                                </button>
                            </a>
                        </div>
                    )}

                    {props.username && (
                        <div className="flex flex-col gap-2 mt-2">
                            <a href="/profile">
                                <button className="border-2 border-p-dwhite w-full rounded-3xl p-2">
                                    <span className="text-p-white">Profile</span>
                                </button>
                            </a>

                            <a href="/logout">
                                <button className="border-2 border-p-dwhite bg-p-dwhite w-full rounded-3xl p-2">
                                    <span className="text-p-dpink">Log out</span>
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            
        </div >

    )
}

export default Navbar;