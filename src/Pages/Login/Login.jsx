import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { googleLoginUser, loginInUser, loading, setLoading, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    useTitle('Login')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            setError('Password must be 6 characters')
            return;
        }
        loginInUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Login successfully')
                setLoading(false)
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage == 'Firebase: Error (auth/user-not-found).') {
                    setLoading(false)
                    setError('You have no account. Please Sign Up')
                } else if (errorMessage == 'Firebase: Error (auth/wrong-password).') {
                    setLoading(false)
                    setError('Wrong password')
                }
                console.log(errorMessage)
            })
    }
    const handleGoogleLogin = () =>{
        googleLoginUser()
        .then(result =>{
            const user = result.user;
            setLoading(false)
            setUser(user)
            navigate(from, { replace: true })
        })
        .catch(error =>{
            const errorMessage = error.message;
        })
    }
    return (
        <>
            {
                loading && <Loader />
            }
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered focus:outline-none" required />
                            <label className="label">
                                <p>You have no account? <Link to='/signUp'><span className='underline font-semibold'>Sign Up</span></Link></p>
                            </label>
                        </div>
                        <p className='text-red-800'>{error}</p>
                        <p className='text-green-800'>{success}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleLogin} className="btn hover:bg-transparent bg-transparent flex items-center justify-center"><FcGoogle className='w-7 h-7 mx-5' /> Login with google</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;