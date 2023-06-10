import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { HiUserCircle } from "react-icons/hi";

const NavBar = () => {
    const { user, signOutUser, setLoading } = useContext(AuthContext)
    const location = useLocation();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="flex justify-between navbar md:px-5 bg-base-300 h-20">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className='md:space-x-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28'>
                        <Link className={location.pathname === '/' && 'text-white'} to='/'>Home</Link>
                        <Link className={location.pathname === '/allToys' && 'text-white'} to='/allToys'>All Toys</Link>
                        {
                            user && <>
                                <Link className={location.pathname === '/myToys' && 'text-white'} to='/myToys'>My Toys</Link>
                                <Link className={location.pathname === '/addToy' && 'text-white'} to='/addToy'>Add A Toy</Link>
                            </>
                        }
                        <Link className={location.pathname === '/blog' && 'text-white'} to='/blog'>Blog</Link>
                    </div>
                </div>
                <div className='flex items-center'>
                    {/* <img className='hidden md:block md:w-28 -ml-5 md:-mr-5' src="https://i.ibb.co/HhcwTD4/logo.png" alt="logo" border="0" /> */}

                    <p className=" text-xl md:text-3xl md:font-bold bg-gradient-to-l from-[#eeaeca] to-[#94bbe9] text-transparent bg-clip-text">Animagic Action Figure</p>
                </div>
            </div>
            <div className='md:space-x-8 font-bold hidden md:flex'>
                <Link className={location.pathname === '/' && 'text-white'} to='/'>Home</Link>
                <Link className={location.pathname === '/allToys' && 'text-white'} to='/allToys'>All Toys</Link>
                {
                    user && <>
                        <Link className={location.pathname === '/myToys' && 'text-white'} to='/myToys'>My Toys</Link>
                        <Link className={location.pathname === '/addToy' && 'text-white'} to='/addToy'>Add A Toy</Link>
                    </>
                }
                <Link className={location.pathname === '/blog' && 'text-white'} to='/blog'>Blog</Link>
            </div>
            {
                user ? <div>
                    <div className="tooltip hover:tooltip-open tooltip-bottom" data-tip={user?.displayName ? user?.displayName : 'No UserName'}>
                        {
                            user?.photoURL ? <img className='w-6 h-6 md:w-8 md:h-8 mx-3 md:mx-5 rounded-full' src={user?.photoURL} alt="" /> : <HiUserCircle className='w-6 h-6 md:w-8 md:h-8 mx-3 md:mx-5 rounded-full' />
                        }
                    </div>
                    <button onClick={handleSignOut} className='btn md:font-bold rounded-lg'>Sign Out</button>
                </div> : <Link to='/login'><button className='btn md:font-bold rounded-lg'>Login</button></Link>
            }

        </div>
    );
};

export default NavBar;