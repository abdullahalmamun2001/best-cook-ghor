import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    // const [chefs,setChefs]=useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/chefs')
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    //     .catch(error=>console.log(error))
    // },[])
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
        </div>
    );
};

export default Home;