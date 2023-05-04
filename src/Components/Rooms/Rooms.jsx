import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [roomsData, setRoomsData] = useState([])
    useEffect(() => {
        fetch('https://shape-server-abdullahalmamun2001.vercel.app/room')
            .then(res => res.json())
            .then(data => setRoomsData(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-gray-400 text-3xl my-10'>Our Others Shop</h1>
            <div className='grid md:grid-cols-2 rounded-2xl-'>
                {
                    roomsData.map(roomData => <Room key={roomData.id}
                        roomData={roomData}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;