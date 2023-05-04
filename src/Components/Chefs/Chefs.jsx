import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { useLoaderData, useParams } from 'react-router-dom';

const Chefs = () => {
    const paramsData=useParams();
    const loaderData=useLoaderData();
    // console.log(paramsData);
    // console.log(loaderData);
    const [chefs,setChefs]=useState([]);
    // console.log(chefs);


    useEffect(()=>{
        fetch('https://shape-server-abdullahalmamun2001.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl text-fw-bold my-10 text-bg-slate-400'>OUR SPECIAL CHEFS</h1>
            <div className='grid md:grid-cols-3 gap-6 justify-center my-10 mx-auto'>
            {
                chefs.map(chef=><Chef
                key={chef.id}
                chef={chef}>
                  </Chef>)
            }
            </div>
        </div>
    );
};

export default Chefs;