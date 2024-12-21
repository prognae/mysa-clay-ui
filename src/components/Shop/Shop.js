import { useContext } from 'react';
import { ProfileContext } from '../../App';
import Navbar from '../Navbar/Navbar';

const Shop = () => {
    const profile = useContext(ProfileContext);

    return (
        <div>
            <Navbar username={profile.username} />
            {/* <h1 className="font-bold text-md h-[2000px]">HELLO {profile.username} | <a href="/logout" className="text-p-dpink">Logout</a></h1> */}
        </div>

    )
}

export default Shop;