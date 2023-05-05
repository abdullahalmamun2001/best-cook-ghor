import React from 'react';
import banner from "./../../../assets/banner.jpg"


const Banner = () => {

  // const lazy = () => {
  //   return <div>Hello, World!</div>;
  // }
  return (
    <div>

      <div className=''>
      <div className='w-full h-full mx-auto text-green-800 my-20' style={{ backgroundImage: `url(${banner})` }}>
        <h1 className='text-center text-slate-100 text-4xl p-10'>WelCome to Bangladeshian Restaurant</h1>
        {/* <h1>hello vay</h1> */}
        <p className='text-lg'>Bangladesh has a rich culinary heritage, with a diverse <br />range of regional  specialties and cooking techniques. <br /> Bangladeshi chefs are known <br /> for their expertise in using spices and flavors <br /> to create complex and delicious dishes.<br />One of the most well-known Bangladeshi chefs is Atul Kochhar, <br />who is based in the UK. He has earned two Michelin<br /> stars for his contemporary Indian cuisine at Benares in London, <br />and is also the head chef at Rang Mahal in Dubai</p>
        <button className='btn btn-secondary p-3 m-16'>Order Now</button>
      </div>
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