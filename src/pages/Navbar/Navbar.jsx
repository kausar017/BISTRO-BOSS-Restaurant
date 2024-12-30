import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {


    const link = <>
        <NavLink className='lg:text-white font-bold sm:text-black'>HOME</NavLink>
        <NavLink className='lg:text-white font-bold sm:text-black'>CONTACT US</NavLink>
        <NavLink className='lg:text-white font-bold sm:text-black'>DASHBOARD</NavLink>
        <NavLink className='lg:text-white font-bold sm:text-black'>OUR MANUE</NavLink>
        <NavLink className='lg:text-white font-bold sm:text-black'>OUR SHOP</NavLink>
    </>

    return (
        <div className='bg-black/20 fixed z-10 w-full'>
            <div className="navbar container mx-auto min-h-28">
                <div className="flex-1">
                    <a className="flex flex-col text-white cursor-pointer">
                        <span className='text-xl font-bold'>BISTRO BOSS</span>
                        <span className='text-lg font-bold tracking-[4px]'>Restaurant</span>

                    </a>

                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end flex items-center gap-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-3">
                                {link}
                            </ul>
                        </div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">

                        </div>

                    </div>
                    <div className='mx-2 text-white'>
                        <Link>Sing Out</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm lg:hidden dropdown-content bg-base-100 rounded-box z-[1] space-y-3 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;