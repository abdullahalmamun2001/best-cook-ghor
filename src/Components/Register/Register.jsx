import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthPRovider';



const Register = () => {
    // const [error,setError]=useState('');
    const { createUser,updateUserData,loader} = useContext(AuthContext)

    const handleRegisterForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const name = form.name.value
        const url = form.url.value
        const password = form.password.value;
        

        // if(password.length<6){
        //     return setError('Please Strong Password')
        // }
        // console.log(url);

        createUser(email, password)
        
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                updateUserData(result.user,name,url)
            })
            
            .catch(error => {
                (error.massage);
            })
    }
    // const updateUseData=(user,name)=>{
    //     updateProfile(user,{
    //         displayName:name
    //     })
    //     .then(console.log('user data us update'))
    //     .catch(error=>console.log(error.massage))
    // }
    
    return (
        <div>
            {/* <p>{error}</p> */}
            <div className="hero min-h-screen bg-base-200">
                <h1>Register</h1>
                <div className="hero-content ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"></h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegisterForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your User Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">URL</span>
                                </label>
                                <input type="url" name='url' placeholder="Enter Your URL Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                {/* <label className="label">
                                    <span className="label-text">Confirm</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Enter Confirm Password" className="input input-bordered" /> */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <Link to='/login'>Already account? Please <strong>Login</strong></Link>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;