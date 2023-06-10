import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    const { createUser, loading, setLoading, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    useTitle('Sign Up')


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            setError('Password must be 6 characters')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                user.photoURL = photo;
                setUser(user)
                setSuccess('Sign Up successfully')
                setLoading(false)
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage == 'Firebase: Error (auth/email-already-in-use).') {
                    setLoading(false)
                    setError('This account already exist. Please login')
                } else if (errorMessage == 'Firebase: Error (auth/invalid-email).') {
                    setLoading(false)
                    setError('Invalid email address')
                }
                console.log(errorMessage)
            })
    }
    return (
        <>
            {
                loading && <Loader />
            }
            <div className="hero min-h-screen ">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered focus:outline-none" required />
                            <label className="label">
                                <p>You have no account? <Link to='/login'><span className='underline font-semibold'>Login</span></Link></p>
                            </label>
                        </div>
                        <p className='text-red-800'>{error}</p>
                        <p className='text-green-800'>{success}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;