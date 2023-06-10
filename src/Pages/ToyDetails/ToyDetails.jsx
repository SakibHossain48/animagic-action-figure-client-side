import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    useTitle('Toy Details')

    return (
        <div className='p-10 my-5 w-full h-full'>
            <p className='text-4xl font-bold mb-5 text-center'>Detail information of {toyDetails?.toyName}</p>
            <img className='md:w-9/12 mx-auto' style={{height: '80vh'}} src={toyDetails?.photo} alt="" />
            <div className='space-y-5 my-5 '>
                <p className='text-xl font-semibold'>Toy Name : <span className='text-lg font-normal'>{toyDetails?.toyName}</span></p>
                <p className='text-xl font-semibold'>Seller Name : <span className='font-normal text-lg'>{toyDetails?.sellerName}</span></p>
                <p className='text-xl font-semibold'>Seller Email : <span className='font-normal text-lg'>{toyDetails?.email}</span></p>
                <p className='text-xl font-semibold'>Description : <span className='font-normal text-lg'>{toyDetails?.description}</span></p>
                <p className='text-xl font-semibold'>Available Quantity : <span className='font-normal text-lg'>{toyDetails?.quantity}</span></p>
                <p className='text-xl font-semibold'>Price : <span className='font-normal text-lg'>{toyDetails?.price} $</span></p>
                <p className='text-xl font-semibold flex items-center'>Ratings : <span className='font-normal text-lg flex items-center mx-2'>{toyDetails?.ratings} <FaStar className='h-6 w-6 mx-2 text-yellow-500'/></span></p>
            </div>
        </div>
    );
};

export default ToyDetails;