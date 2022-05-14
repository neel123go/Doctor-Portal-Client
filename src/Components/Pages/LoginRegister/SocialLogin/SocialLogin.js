import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLoader from '../../../Pages/Shared/SocialLoader/SocialLoader';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessage;

    if (user) {
        console.log(user);
    }


    if (loading) {
        return <SocialLoader></SocialLoader>;
    }

    if (error) {
        errorMessage = <p className='text-red-500 text-center mb-2'>{error?.message}</p>
    }

    return (
        <div>
            <div className="divider">OR</div>
            {errorMessage}
            <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:bg-gray-800 hover:text-white w-full text-gray-700">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;