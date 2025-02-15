import { useContext, useState } from 'react';
import { ProfileContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import testBanner from '../../assets/images/home-banner-edited.jpg'
import Dropdown from '../Dropdown';

const Products = () => {
    const profile = useContext(ProfileContext);
    // const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <Navbar username={profile.username} />

            <div className="banner h-[70vh] flex justify-center items-center"
                style={{
                    backgroundImage: `url(${testBanner})`,
                }}
            >
                <h1 className="font-inter text-5xl font-semibold text-p-dwhite">Products</h1>
            </div>

            <div className="w-[80vw] flex justify-self-center mt-5">
                <div className="filters flex w-full justify-between max-h-10">
                    <div className="left flex gap-5">
                        <Dropdown
                            options={['Available', 'Unavailable']}
                            title='Availability'
                        />

                        <Dropdown
                            options={['Option 1', 'Option 2']}
                            title='Collection'
                        />

                        <Dropdown
                            options={['Option 1', 'Option 2']}
                            title='Category'
                        />
                    </div>

                    <div className="right flex gap-5">
                        <Dropdown
                            options={[
                                'All',
                                'Popular',
                                'Price: Low to High',
                                'Price: High to Low',
                                'A-Z',
                                'Z-A',
                                'Oldest to Newest',
                                'Newest to Oldest',
                            ]}
                            title='Sort By'
                            width={56}
                        />

                        {/* <input type="text border-2 border-p-dwhite" className="" /> */}
                        <input type="text" name="search" id="search" className="font-inter px-4 py-2 text-sm" placeholder="Search" />
                    </div>
                </div>

                <div className="h-[1000px]">

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Products;