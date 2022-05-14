import React, { useEffect } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loader from '../../Shared/Loader/Loader';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    if (error) {
        errorMessage = <p className='text-red-500 text-center'>{error?.message}</p>
    }

    if (loading) {
        return <Loader></Loader>;
    }

    return (
        <div className='h-full'>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-white shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-gray-800">Please Login</h2>
                        {errorMessage}
                        <form onSubmit={handleSubmit(onSubmit)} className='text-center mt-4'>
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
                            <div className='text-left mt-[-10px] mb-5'>
                                <Link to='/forgotPassword' style={{ fontSize: '16px', cursor: 'pointer' }} className='w-fit text-emerald-700 hover:underline mb-4'>Forgot Password?</Link>
                            </div>

                            <input type="submit" className='btn bg-gray-700 border-0 w-full hover:bg-gray-800 text-white' value="Login" />
                            <p style={{ fontSize: '16px' }} className='text-left mt-2'>Don't have any account? <Link className='text-emerald-600 cursor-pointer hover:underline' to='/signup'>Sign Up</Link></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;