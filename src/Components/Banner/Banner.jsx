import React from 'react';
import banner from "./../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className='w-75 img-fluid'>
            <img className='w-10/12 mx-auto rounded my-10' src={banner} alt="" />
        </div>
    );
};

export default Banner;