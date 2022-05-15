import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-5">
                <h2 className='text-3xl font-bold text-gray-700'><span className='text-red-500'>Welcome</span>, to your Dashboard</h2>
                <div className='mt-2 text-gray-600'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 border-r-2 text-base-content">
                    <li><Link to='/dashboard' className='mb-5 bg-gray-700 text-lg hover:bg-gray-800 text-white'>My Appointments</Link></li>
                    <li><Link to='myReviews' className='mb-5 bg-gray-700 text-lg hover:bg-gray-800 text-white'>My Reviews</Link></li>
                    {admin && <li><Link to='users' className='bg-gray-700 text-lg hover:bg-gray-800 text-white'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;