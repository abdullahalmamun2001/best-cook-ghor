import React from 'react';

const Room = ({roomData}) => {
    const {id,city,address,name,img}=roomData
    // console.log(id);
    return (
        <div className='md:m-10 mx-auto text-center'>
           <img className='h-96 w-11/12 rounded-3xl m-10' src={img} alt="" />
           <h3 className='text-2xl text-bg-info'>{name}</h3>
           <p>{address}</p>
           <p>{city}</p>
        </div>
    );
};

export default Room;