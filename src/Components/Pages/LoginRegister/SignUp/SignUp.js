import React, { useEffect } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';
import Loader from '../../Shared/Loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, pUpdateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name, photoURL: data.photo });
    };

    if (error || pUpdateError) {
        errorMessage = <p className='text-red-500 text-center'>{error?.message || pUpdateError?.message}</p>
    }

    if (loading || updating) {
        return <Loader></Loader>;
    }

    return (
        <div className='h-full py-5'>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-white shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-gray-800">Create an account</h2>
                        {errorMessage}
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
                                <span className="label-text text-gray-800 text-md">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: 'Profile Image is required'
                                    }
                                })}
                                autoComplete='off'
                                name="photo"
                                className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
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
                                <span className="label-text text-gray-800 text-md">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be contain at least 8 characters'
                                    }
                                })}
                                autoComplete='off'
                                name="password"
                                className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                            <label className="label mt-[-18px]">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                            <input type="submit" className='btn bg-gray-700 border-0 w-full hover:bg-gray-800 text-white' value="Sign Up" />
                            <p style={{ fontSize: '16px' }} className='text-left mt-2'>Already have any account? <Link className='text-emerald-600 cursor-pointer hover:underline' to='/login'>Login</Link></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;