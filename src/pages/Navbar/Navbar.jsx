import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../Authentication/Provaider/AuthProvaider';
import Swal from 'sweetalert2';
import UseCard from '../../Hooks/useCard/UseCard';
const Navbar = () => {

    const [cart] = UseCard()
    // console.log(cart);

    const { user, logOut } = useContext(AuthContext)

    const handaleLogOut = async () => {
        try {
            await logOut()
            Swal.fire('logout successfully')
        } catch {
            Swal.fire('logout not successfully')
        }
    }

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };


    const link = <>
        <NavLink to={'/'} className='lg:text-white font-bold sm:text-black'>HOME</NavLink>
        <NavLink to={'contact'} className='lg:text-white font-bold sm:text-black'>CONTACT US</NavLink>
        <NavLink to={'dasbord'} className='lg:text-white font-bold sm:text-black'>DASHBOARD</NavLink>
        <NavLink to={'/manu'} className='lg:text-white font-bold sm:text-black'>OUR MANUE</NavLink>
        <NavLink to={'/ourshop/salad'} className='lg:text-white font-bold sm:text-black'>OUR SHOP</NavLink>
    </>

    return (
        <div className='bg-black/20 fixed z-10 w-full'>
            <div className="navbar container mx-auto min-h-28">
                <div className="flex-1">
                    <a className="flex flex-col text-white cursor-pointer">
                        <span className='text-xl font-bold'>BISTRO BOSS</span>
                        <span className='text-lg font-bold tracking-[4px]'>Restaurant</span>
                    </a>
                    <button
                        className="btn m-5 btn-ghost bg-white/20 backdrop-blur-lg "
                        onClick={toggleTheme}
                    >
                        {theme == 'light' ?

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                          
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>


                        }

                    </button>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end flex items-center gap-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-3">
                                {link}
                            </ul>
                        </div>
                        <Link
                            to={'dasbord/myCart'}
                            tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm bg-red-500 text-white indicator-item">+{cart.length}</span>
                            </div>
                        </Link>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">

                        </div>

                    </div>
                    <div className='mx-2 text-white'>
                        {
                            user ? <button className='max-sm:hidden' onClick={handaleLogOut}>Sing Out</button> : <Link to={'/login'}>Login</Link>
                        }

                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user ?
                                        <div>
                                            <img title={user?.displayName} referrerPolicy='no-referrer' className='w-full ' src={user?.photoURL} alt="" />
                                        </div>

                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>
                                }

                            </div>
                            <p className='text-white'>{user?.displayName}</p>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm lg:hidden dropdown-content border-2 bg-white/20 rounded-none z-[1] space-y-3 mt-3 w-52 p-2 shadow">
                            {link}
                            {
                                user ? <button className=' md:hidden max-sm:block text-left text-lg text-black font-bold' onClick={handaleLogOut}>Sing Out</button> : <Link to={'/login'}>Login</Link>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;