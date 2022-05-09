import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link to='/' className='active:bg-gray-700 active:text-white text-gray-600 md:py-2 md:px-6'>Home</Link></li>
        <li><Link to='/' className="active:bg-gray-700 active:text-white text-gray-600 md:py-2 md:px-6">About</Link></li>
        <li><Link to='/' className='active:bg-gray-700 active:text-white text-gray-600 md:py-2 md:px-6'>Appointment</Link></li>
        <li><Link to='/' className='active:bg-gray-700 active:text-white text-gray-600 md:py-2 md:px-6'>Reviews</Link></li>
        <li><Link to='/' className='active:bg-gray-700 active:text-white text-gray-600 md:py-2 md:px-6'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-white md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-gray-700">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl text-gray-800">Careify</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-gray-700">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                        <li>
                            <Link to='/' className="justify-between text-gray-700 active:bg-emerald-100">
                                Profile
                                <span className="badge text-xs bg-slate-50 text-gray-400 border-emerald-500">New</span>
                            </Link>
                        </li>
                        <li><Link to='/' className='text-gray-700 active:bg-emerald-100'>Settings</Link></li>
                        <li><Link to='/' className='text-gray-700 active:bg-emerald-100'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;