import React from 'react';
import Image from '../../../assets/images/treatment.png';
import Button from '../../Button/Button';

const DentalCare = () => {
    return (
        <div className="shadow-xl mt-12 md:mt-20 px-4 py-4 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-20 xl:py-14 card md:card-side bg-white mx-2 xl:mx-20">
            <div className='w-full md:w-1/2 xl:w-1/3 flex justify-center items-center'>
                <figure><img src={Image} alt="Album" className='rounded-lg' /></figure>
            </div>
            <div className='card-body flex justify-center items-center w-full md:w-1/2 p-0 sm:pl-5 lg:pl-10 xl:pl-20 mt-5'>
                <div>
                    <h2 className="card-title text-gray-700 text-3xl lg:text-4xl xl:text-5xl leading-tight">Exceptional Dental Care, on Your Terms</h2>
                    <p className='my-5 lg:my-10 text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
// <div className='w-full px-20 py-20'>
//     <div className="card lg:card-side shadow-xl">
//         <figure className='w-1/3'>
//             <img src={Image} alt="Treatment" />
//         </figure>
//         <div className="card-body w-2/3 flex justify-center items-center px-40">
//             <div>
//                 <h2 className="card-title text-gray-700 text-5xl leading-tight">Exceptional Dental Care, on Your Terms</h2>
//                 <p className='my-10 text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
//                 <Button routeName='home'></Button>
//             </div>
//         </div>
//     </div>
// </div>