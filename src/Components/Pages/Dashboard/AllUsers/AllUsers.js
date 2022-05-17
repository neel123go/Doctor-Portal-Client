import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader/Loader';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://intense-headland-27534.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader></Loader>;
    }

    const makeAdmin = (email) => {
        fetch(`https://intense-headland-27534.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You cannot make anyone admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make admin successfully');
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl'>All Users</h2>
            <div className="overflow-x-auto mt-5">
                {
                    users.length > 0 ?
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='bg-slate-100 border-1 border-gray-500'>No</th>
                                    <th className='bg-slate-100 border-1 border-gray-500'>Email</th>
                                    <th className='bg-slate-100 border-1 border-gray-500'>Role</th>
                                    <th className='bg-slate-100 border-1 border-gray-500'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr className='border-2' key={index}>
                                            <th className='bg-slate-100'>{index + 1}</th>
                                            <td className='bg-slate-100'>{user.email}</td>
                                            <td className='bg-slate-100'>{user.role !== 'admin' ? <button onClick={() => makeAdmin(user.email)} className="btn btn-xs">Make Admin</button> : 'Admin'}</td>
                                            <td className='bg-slate-100'><button className="btn btn-xs">Remove User</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table> : ''
                }
            </div>
        </div>
    );
};

export default AllUsers;