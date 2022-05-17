import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Shared/Loader/Loader';

const ManageDoctor = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader></Loader>;
    };

    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctor;