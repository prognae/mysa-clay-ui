import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { getBanners } from './Banners';
import { getCollections } from './Collections';
import customBanner from '../../assets/images/ceramic_mug.webp';

const Shop = () => {
    const profile = useContext(ProfileContext);

    const [currentImageIndex, setImageIndex] = useState(0);
    const [banners, setBanners] = useState([]);
    const [collections, setCollections] = useState([]);

    const bannerLength = banners != null ? banners.length : 0;
    const collectionLength = collections.data != null ? collections.data.length : 0;

    const apiUrl = process.env.REACT_APP_API_URL;

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

    useEffect(() => {
        const collectionData = async () => {
            setCollections(await getCollections());
        }

        collectionData()
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
                                    className="object-cover max-sm:h-[100vh]"
                                />
                            ))}
                        </div>
                    </div>

                    {bannerLength > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="z-20 absolute left-4 top-1/2 transform -translate-y-1/2 bg-d-gray bg-opacity-50 text-p-white p-2 rounded-full max-sm:hidden"
                            >
                                &#8249;
                            </button>

                            <button
                                onClick={nextImage}
                                className="z-20 absolute right-4 top-1/2 transform -translate-y-1/2 bg-d-gray bg-opacity-50 text-p-white p-2 rounded-full max-sm:hidden"
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
                </>
            )}

            <div className="featured-collection">
                {collectionLength > 1 && (
                    <>
                        <div className="collection-title text-center font-ragazzibold font-extrabold sm:text-4xl max-sm:text-2xl mt-20 mb-5 text-p-ddpink">
                            <h2>Featured Collection</h2>
                        </div>

                        <div
                            className="flex justify-center items-center featured-container border-2 border-p-dpink rounded-md sm:w-[80vw] max-sm:w-[80vw] sm:h-[600px] max-sm:h-[300px] sm:min-h-10 justify-self-center bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${apiUrl + '/storage/' + collections.featured.thumbnail_banner_url})`,
                            }}
                        >

                            <div className="border-2 border-p-dpink rounded-md sm:min-w-[250px] sm:min-h-[150px] max-sm:min-w-[200px] max-sm:min-h-[100px] flex justify-center items-center flex-col bg-p-bg">
                                <p className="font-ragazzibold text-p-ddpink sm:text-3xl max-sm:text-xl font-semibold">{collections.featured.name}</p>
                                <button className="cursor-pointer transition-all bg-p-ddpink text-white px-4 py-2 rounded-lg
                                    border-p-brown
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-inter sm:text-2xl max-sm:text-sm font-semibold text-p-white">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="other-collection">
                {collectionLength > 1 && (
                    <>
                        <div className="collection-title text-center font-ragazzibold font-extrabold sm:text-4xl max-sm:text-2xl mt-20 mb-5 text-p-ddpink">
                            <h2>Other Collections</h2>
                        </div>

                        <div className="collection-container w-[80vw] justify-self-center flex justify-center">
                            {/* <div className="grid grid-cols-5 gap-10 w-100"> */}
                            <div className="grid sm:grid-cols-5 max-sm:grid-cols-1 gap-10 w-full">
                                {collections.data.map((collection, index) => (
                                    <a className="collection-item sm:h-[300px] max-sm:h-[300px] sm:w-[250px] max-sm:w-full border-2 border-p-dpink rounded-lg mb-5 shadow-md hover:shadow-inner" key={index} href="/">
                                        <div className="image-container rounded-md h-[100%] overflow-hidden mb-2 flex justify-center items-center">
                                            <div className="item-image">
                                                <img src={apiUrl + '/storage/' + collection.thumbnail_url} alt="" className="h-full w-full object-cover" />
                                            </div>
                                        </div>

                                        <div className="item-text text-center font-inter font-normal sm:text-md flex flex-col text-p-ddpink">
                                            <p className="sm:underline hover:text-p-dpink" href="/">{collection.name}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="pre-orders sm:mt-[100px]">
                <div className="collection-title text-center font-ragazzibold font-extrabold sm:text-4xl max-sm:text-2xl mt-20 mb-5 text-p-ddpink">
                    <h2>Custom Orders</h2>
                </div>

                <div
                    className="flex justify-center items-center featured-container border-2 border-p-dpink rounded-md sm:min-w-[30vw] sm:min-h-[600px] max-sm:min-h-[300px] max-sm:min-w-[80vw] justify-self-center bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${customBanner})`,
                    }}
                >
                </div>

                <div className="sm:w-[30vw] max-sm:w-[80vw] justify-self-center mt-1">
                    <a href='/' className="font-inter sm:text-lg max-sm:text-md text-p-ddpink sm:underline hover:text-p-dpink">Slot for custom and pre–orders</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Shop;
