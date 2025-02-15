import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Products from './components/Products/Products';
import Error404 from './components/Error404';
import ProtectedRotes from './utils/ProtectedRoutes';
import UnprotectedRotes from './utils/UnprotectedRoutes';
import React, { useEffect, useState } from 'react';
import { getProfile } from './helpers/Profile';
import Cookies from 'js-cookie';
import Logout from './utils/Logout';

export const ProfileContext = React.createContext();

function App() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const profileData = async () => {
      if (Cookies.get('access_token')) {
        setProfile(await getProfile());
      }
    }

    profileData()
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      <BrowserRouter>
        <Routes>

          <Route element={<UnprotectedRotes />} >
            <Route element={<Shop />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Route>

          <Route element={<ProtectedRotes />} >            
            <Route element={<Logout />} path="/logout" />
          </Route>
          
          <Route element={<Shop />} path="/shop" />
          <Route element={<Products />} path="/products" />
          <Route element={<Error404 />} path="*" />
        </Routes>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;
