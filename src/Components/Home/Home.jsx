import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { AuthContext } from '../Provider/AuthPRovider';
import Rooms from '../Rooms/Rooms';
import Chefs from '../Chefs/Chefs';
import Footer from '../Footer/Footer';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Rooms></Rooms>
            <Footer></Footer>
        </div>
    );
};

export default Home;