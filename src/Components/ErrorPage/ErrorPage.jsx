import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (

        <div>
            <img
                src="https://cdn-icons-png.flaticon.com/512/595/595067.png"
                alt=""
                className="w-4/6 mx-auto"
            />
            <h1 className="text-red-500 font-semibold text-3xl text-center">Oops!</h1>
            <p className="text-center my-5 text-red-500 text-2xl">
                Sorry, you enter a invalid path, please enter valid path
            </p>
            <div className='text-center p-10'>
                <Link className='btn btn-secondary' to='/'>GO To Home Page</Link>
            </div>

        </div>

    );
};

export default ErrorPage;