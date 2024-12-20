import { useEffect, useState } from 'react';
import { getProfile } from '../helpers/Profile';

const Landing = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const profileData = async () => {
            setProfile(await getProfile());
        }

        profileData()
    }, []);

    return (
        <h1 className="font-bold text-md">HELLO {profile.username}</h1>
    )
}

export default Landing;