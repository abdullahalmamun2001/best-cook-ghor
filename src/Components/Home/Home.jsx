import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { AuthContext } from '../Provider/AuthPRovider';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;