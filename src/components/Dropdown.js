import { useState } from "react";
import DropArrow from "../assets/icons/DropArrow";

const Dropdown = ({ options, title, onSelect, width }) => {
    const [isOpen, setIsOpen] = useState(false);

    // const [isClicked, setIsClicked] = useState(false);

    const click = () => {
        console.log(1);
    }

    return (
        <div className="relative inline-block font-inter text-p-brown">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-white font-medium px-4 py-2 border-2 border-p-dwhite transition w-${width != null ? 48 : '36'}`}
            >
                <span className="flex items-center justify-between"><span className="text-sm">{title || "Select an option"}</span> <DropArrow /></span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute right-0 mt-1 w-full bg-white border border-p-dwhite rounded-md shadow-lg z-50">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                // onSelect(option);
                                click();
                                setIsOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition font-normal text-sm"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
