import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    let errorMessage;
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const Navigate = useNavigate();

    const onSubmit = async data => {
        const email = data.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email sent', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            Navigate('/login')
        }
    }

    if (error) {
        errorMessage = <p className='text-red-500 text-center'>{error?.message}</p>
    }

    return (
        <div className='h-full'>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-white shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-gray-800">Forgot Password</h2>
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

                            <input type="submit" className='btn bg-gray-700 border-0 w-full hover:bg-gray-800 text-white' value="Sent" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;