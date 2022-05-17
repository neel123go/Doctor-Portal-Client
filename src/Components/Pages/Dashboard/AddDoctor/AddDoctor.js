import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader/Loader';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: treatments, isLoading } = useQuery('treatments', () => fetch('http://localhost:5000/treatment').then(res => res.json()));
    const imageStorageKey = "70f09fbd10e67daf3577b0ecd3b6ea41";

    /**
     * 3 ways to store image
     * 1. Third party storage //Free open public storage is ok for practice project
     * 2. Your own storage in your own server
     * 3. Database: MongoDB
     * 
     * YUP: to validate file: search: yup file validation for react hook form
    */

    const onSubmit = async (data) => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imgUrl = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgUrl
                    }
                    // send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully');
                                reset();
                            } else {
                                toast.error('Something error happened, please try again');
                            }
                        });
                }
            })
    };

    if (isLoading) {
        return <Loader></Loader>;
    }

    return (
        <div>
            <h2 className='text-2xl'>Add A new doctor</h2>
            <div className='h-full py-5'>
                <div className='flex justify-center items-center h-screen'>
                    <div className="card w-96 bg-white shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold text-gray-800">Add Doctor</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className='text-center mt-4'>
                                <label className="label">
                                    <span className="label-text text-gray-800 text-md">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Your name must be contain at least 3 characters'
                                        }
                                    })}
                                    autoComplete='off'
                                    name="name"
                                    className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                                <label className="label mt-[-18px]">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>


                                <label className="label">
                                    <span className="label-text text-gray-800 text-md">Profile Picture</span>
                                </label>
                                <input
                                    type="file"
                                    {...register("photo", {
                                        required: {
                                            value: true,
                                            message: 'Profile Image is required'
                                        }
                                    })}
                                    name="photo"
                                    className="rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                                <label className="label mt-[-18px]">
                                    {errors.photo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photo.message}</span>}
                                </label>


                                <label className="label">
                                    <span className="label-text text-gray-800 text-md">Email</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                    autoComplete='off'
                                    name="email"
                                    className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                                <label className="label mt-[-18px]">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>


                                <label className="label">
                                    <span className="label-text text-gray-600 text-md">Specialty</span>
                                </label>
                                <select {...register("specialty")} className="border-solid border-2 border-gray-500 bg-white text-gray-700 select w-full mb-6">
                                    {/* <option disabled defaultValue>Pick your Specialty</option> */}
                                    {
                                        treatments.map(treatment => <option
                                            key={treatment._id}
                                            value={treatment.name}
                                        >{treatment.name}</option>)
                                    }
                                </select>

                                <input type="submit" className='btn bg-gray-700 border-0 w-full hover:bg-gray-800 text-white' value="Add" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;