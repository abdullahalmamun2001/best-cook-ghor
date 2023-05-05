import React from 'react';
import { StarIcon,HeartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Rev = ({ rev }) => {
    const { name, image, rating } = rev;
    return (
        <div className='w-9/12 mx-auto'>
            {/* <img className='h-52 w-96' src={image} alt="" /> */}
            <LazyLoadImage className='h-52 w-96' src={image} effect='blur'></LazyLoadImage>
            <h1 className='text-center'>{name}</h1>
            <div className="flex justify-between">
                <p>Rating :{rating}</p>
                <div className='flex'>
                <p>Likes : 1500</p>
                <HeartIcon className='h-6 w-6 text-red-600'></HeartIcon>
                </div>
            </div>
            <div className='flex'>
                <StarIcon className="h-6 w-6 text-green-400" />
                <StarIcon className="h-6 w-6 text-green-400" />
                <StarIcon className="h-6 w-6 text-green-400" />
                <StarIcon className="h-6 w-6 text-green-400" />
                <StarIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className='text-center'>
                <div className='flex items-center gap-16'>
                <input type="text" name="" id="" placeholder='Enter Your Name' className='h-8 w-48 my-10 p-3 border border-black' />
                <Link to='/' className='btn btn-secondary'>Review</Link>
                </div>
                <h1 className='text-xl'>Rate this app</h1>
                <div className='flex justify-center'>
                <StarIcon className="h-8 w-8 text-gray-600" />
                <StarIcon className="h-8 w-8 text-gray-600" />
                <StarIcon className="h-8 w-8 text-gray-600" />
                <StarIcon className="h-8 w-8 text-gray-600" />
                <StarIcon className="h-8 w-8 text-gray-600" />
            </div>
            </div>
        </div>
    );
};

export default Rev;