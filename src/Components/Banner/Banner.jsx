import React from 'react';
import banner from "./../../../assets/vavver.webp"

const Banner = () => {
    return (
       <div>
         <div className='h-100 bg-no-repeat w-full' style={{ backgroundImage: `url(${banner})` }}>
      Hello World
    </div>
        {/* <div style={{ 
        backgroundImage: `url("file:///C:/React/assaignment-ten/assets/vavver.webp")` 
      }}></div> */}
      {/* <div style={{ 
        backgroundImage:{banner} 
      }}></div> */}
       </div>
        
    );
};

export default Banner;