import React from 'react';

const Recipe = ({ recipe }) => {
    console.log(recipe);
    const { id, picture, name, rating, making_details } = recipe
    // console.log(picture);
    return (
        <div className='flex m-4'>
            <div className='w-96'>
                <img className='' src={picture} alt="" />
                <h1 className='text-center text-3xl'>{name}</h1>
                <p>Ratings : {rating}</p>
            </div>
            <div className='m-10 border border-spacing-1 p-5 border-red-400 text-2xl my-auto w-10/12'>
                <p>Cooking Policy :{making_details}</p>
            </div>
        </div>
    );
};

export default Recipe;