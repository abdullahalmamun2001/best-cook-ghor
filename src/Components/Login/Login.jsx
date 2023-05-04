import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthPRovider';

const Login = () => {
    const [error,setError]=useState();
    const { signIn, googleRegister, githubSignIn } = useContext(AuthContext)

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password);
        setError('')
        if(password.length<6){
            return setError("Please give strong password")
        }
        
        signIn(email, password)
            .then(result => { console.log(result.user) })
            .catch(error => console.log(error.message))
        }
    const handleGooglePopup = () => {
            googleRegister()
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    
    const handleGithubSignIn = () => {
            githubSignIn()
                .then(result => {
                    const logInUser = result.user;
                    console.log(logInUser);
                })
                .catch(error => console.log(error.message))
        }

    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <h1>Please Login</h1>
                <div className="hero-content ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"></h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link to='/register'>Are you new user? Please <strong>Register</strong></Link>
                        </form>
                        <div className='flex gap-16'>
                            <button className="btn btn-primary w-1/3" onClick={handleGithubSignIn}>Github</button>
                            <button onClick={handleGooglePopup} className='btn btn-primary w-1/3'>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;