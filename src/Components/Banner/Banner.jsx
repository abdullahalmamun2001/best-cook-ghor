import React from 'react';
import banner from "./../../../assets/banner.jpg"
import pik from "./../../../assets/chiken.jpeg"


const Banner = () => {

  // const lazy = () => {
  //   return <div>Hello, World!</div>;
  // }
  return (
    <div>

      <div className='border border-spacing-6 border-red-800 bg-gray-300 rounded-3xl w-11/12 mx-auto'>
        <div>
          <div className='w-full bg-no-repeat bg-center h-full mx-auto my-20' style={{ backgroundImage: `url(${pik})` }}>
            <h1 className='text-center text-black text-4xl p-10'>WelCome to Bangladeshian Restaurant</h1>
            {/* <h1>hello vay</h1> */}
            <p className='text-lg text-black-border-spacing-2 p-5 m-20'>Bangladesh has a rich culinary heritage, with a diverse <br />range of regional  specialties and cooking techniques. <br /> Bangladeshi chefs are known <br /> for their expertise in using spices and flavors <br /> to create complex and delicious dishes.<br />One of the most well-known Bangladeshi chefs is Atul Kochhar, <br />who is based in the UK. He has earned two Michelin<br /> stars for his contemporary Indian cuisine at Benares in London, <br />and is also the head chef at Rang Mahal in Dubai.</p>
            <button className='btn btn-secondary p-3 m-6'>Order Now</button>
          </div>
        </div>
        
      </div>
     
    </div>

  );
};

export default Banner;