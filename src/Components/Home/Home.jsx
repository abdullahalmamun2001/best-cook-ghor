import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { AuthContext } from '../Provider/AuthPRovider';
import Rooms from '../Rooms/Rooms';
import Chefs from '../Chefs/Chefs';
import Footer from '../Footer/Footer';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div><h1 className='text-5xl text-red-500 text-center my-6'>Welcome to Our Best Cook Ghor</h1>
            <Banner></Banner>
            <Chefs></Chefs>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;