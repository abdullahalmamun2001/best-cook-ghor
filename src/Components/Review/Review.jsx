import React, { useContext, useEffect, useState } from 'react';
import Rev from '../Rev/Rev';
import { AuthContext } from '../Provider/AuthPRovider';

const Review = () => {
    const {loader}=useContext(AuthContext)
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://shape-server-abdullahalmamun2001.vercel.app/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    if(loader){
        <progress className="progress progress-warning w-56" value="40" max="100"></progress>
    }
    return (
        <div className='grid grid-cols-2 gap-10'>
           {
            review.map(rev=><Rev key={rev.id}
                rev={rev}></Rev>)
           }
        </div>
    );
};

export default Review;