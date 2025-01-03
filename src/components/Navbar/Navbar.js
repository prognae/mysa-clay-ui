import { useState, useEffect } from 'react';
import fullLogo from '../../assets/images/mysa-logo-full.avif';

const Navbar = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full fixed bg-p-pink flex justify-center font-inter text-sm font-bold text-p-brown top-0 z-50 transition-colors duration-400 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'}`} >
            <div className="h-[75px] flex justify-between items-center max-sm:w-full sm:w-[80vw] relative">
                <div className="flex-1 flex justify-start">
                    <ul className="flex flex-row gap-3 max-sm:hidden">
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/shop'>Browse</a></li>
                        <li><a href='/shop'>Products</a></li>
                        <li><a href='/about'>About</a></li>
                    </ul>

                    <div className="sm:hidden ml-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>
                </div>

                <img src={fullLogo} alt="full logo" className="h-12 justify-self-center" />

                <div className="flex-1 flex justify-end">
                    <ul className="flex flex-row gap-3 relative">
                        <div className="flex flex-row gap-3 max-sm:mr-5">
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
                            {isDropdownOpen && (
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
        </div >

    )
}

export default Navbar;