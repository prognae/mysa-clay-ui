import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import { getBanners } from './Banners'

const Shop = () => {
    const profile = useContext(ProfileContext);

    const [currentImageIndex, setImageIndex] = useState(0);
    const [banners, setBanners] = useState([]);
    const bannerLength = banners != null ? banners.length : 0;

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % bannerLength);
    };

    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + bannerLength) % bannerLength);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        const bannerData = async () => {
            setBanners(await getBanners());
        }

        bannerData()
    }, []);

    return (
        <div>
            <Navbar username={profile.username} />

            {bannerLength > 0 && (
                <>
                    <div className="relative h-[100vh] w-full overflow-hidden z-10">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(-${currentImageIndex * 100}%)`, // Shift images horizontally based on index
                            }}
                        >
                            {banners.map((banner, index) => (
                                <img
                                    src={process.env.REACT_APP_API_URL + '/storage/' + banner.path}
                                    key={index}
                                    alt="Banner"
                                    className="object-cover"
                                />
                            ))}
                        </div>
                    </div>

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
                </>
            )}

            <div className="h-[1000px]">
                <p>Next</p>
            </div>
        </div>
    );
};

export default Shop;
