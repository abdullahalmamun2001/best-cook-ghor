import React, { useEffect, useState } from 'react';
import Rev from '../Rev/Rev';

const Review = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://shape-server-abdullahalmamun2001.vercel.app/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
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