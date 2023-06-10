import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const ErrorPage = () => {
    useTitle('404 Error')
    return (
            <div className='flex relative justify-center'>
                <img className='h-screen w-full' src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/47ae8417ee638d039a4b7300439ea061.gif" alt="" />
                <Link className='absolute bottom-10' to='/'><button className='btn'><HiArrowLeft className='w-5 h-5 mx-2'/>Back To Home</button></Link>
            </div>
    );
};

export default ErrorPage;