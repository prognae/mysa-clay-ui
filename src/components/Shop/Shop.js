import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';
import Banner4 from '../../assets/images/banner4.jpg';
import Banner5 from '../../assets/images/banner5.jpg';

const Shop = () => {
    const profile = useContext(ProfileContext);

    const [currentImageIndex, setImageIndex] = useState(0);

    const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval); // Clear interval on component unmount
    });

    return (
        <div>
            <Navbar username={profile.username} />

            <div className="relative h-[calc(100vh-75px)] w-full overflow-hidden z-10">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`, // Shift images horizontally based on index
                    }}
                >
                    {banners.map((banner, index) => (
                        <img
                            src={banner}
                            key={index}
                            alt="Banner"
                            className="object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevImage}
                className="z-20 absolute left-4 top-1/2 transform -translate-y-1/2 bg-d-gray bg-opacity-50 text-p-white p-2 rounded-full"
            >
                &#8249;
            </button>

            <button
                onClick={nextImage}
                className="z-20 absolute right-4 top-1/2 transform -translate-y-1/2 bg-d-gray bg-opacity-50 text-p-white p-2 rounded-full"
            >
                &#8250;
            </button>

            {/* Image Indicators */}
            <div className="z-20 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setImageIndex(index)} // Navigate to the clicked image
                        className={`w-3 h-3 rounded-full bg-p-white transition-all duration-300 ${currentImageIndex === index ? 'bg-opacity-100' : 'bg-opacity-50'
                            }`}
                    />
                ))}
            </div>

            <div className="h-[1000px]">
                <p>Next</p>
            </div>
        </div>
    );
};

export default Shop;
