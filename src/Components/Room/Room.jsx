import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Room = ({roomData}) => {
    const {city,address,name,img}=roomData;
    return (
        <div className='md:m-10 mx-auto text-center'>
           {/* <img className='h-96 w-11/12 rounded-3xl m-10' src={img} alt="" /> */}
           <LazyLoadImage className='h-96 w-11/12 rounded-3xl m-10' src={img} effect='blur'></LazyLoadImage>
           <h3 className='text-2xl text-bg-info'>{name}</h3>
           <p>{address}</p>
           <p>{city}</p>
        </div>
    );
};

export default Room;