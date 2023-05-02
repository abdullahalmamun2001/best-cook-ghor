import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Chefs = () => {
    const [chefs,setChefs]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h2>this is chef page</h2>
            {
                chefs.map(chef=> <Chef
                key={chef.id}
                chef={chef}>
                    
                </Chef>)
            }
        </div>
    );
};

export default Chefs;