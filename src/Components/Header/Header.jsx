import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Banner from '../Banner/Banner';
import { AuthContext } from '../Provider/AuthPRovider';

const Header = () => {
    const [showElement,setShowElement]=useState(true)
    const {user,logOut}=useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(result=>{})
        .catch(error=>{})
    }
    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' activeClassName="text-blue-500">Home</NavLink></li>
                        <li><NavLink to='/review' activeClassName="text-blue-500">Review</NavLink></li>
                        <li tabIndex={0}></li>
                        <li><NavLink to='/blogs' activeClassName="text-blue-500">Blogs</NavLink></li>
                        <li><NavLink to='/login' activeClassName="text-blue-500">Login</NavLink></li>
                        {
                            user? '':<li><NavLink to='/registers' activeClassName="text-blue-500">Register</NavLink></li>
                        }
                        {
                            user? <div className='flex gap-8 justify-between tooltip tooltip-bottom'  data-tip={user.displayName}><img className='rounded-full w-14 h-14 mt-5' src={user.photoURL} alt="" /><button className="btn btn-outline mt-6" onClick={handleLogOut}>logOut</button></div>:<li><NavLink to='/login'>Login</NavLink></li>
                        }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Best Cook Ghor</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' activeClassName="text-blue-500">Home</NavLink></li>
                        <li><NavLink to='/review' activeClassName="text-blue-500">Review</NavLink></li>
                        <li tabIndex={0}></li>
                        <li><NavLink to='/blogs' activeClassName="text-blue-500">Blogs</NavLink></li>
                        {/* <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a> */}
                        
                        {
                            user? '':<li><NavLink to='/registers' activeClassName="text-blue-500">Register</NavLink></li>
                        }
                        {
                            user? <div className='flex gap-8 justify-between tooltip tooltip-bottom'  data-tip={user.displayName}><img className='rounded-full w-14 h-14 mt-5' src={user.photoURL} alt="" /><button className="btn btn-outline mt-6" onClick={handleLogOut}>logOut</button></div>:<li><NavLink to='/login' activeClassName="text-blue-500">Login</NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Get started</a> */}
                </div>
            </div>
        </div>
    );
};

export default Header;