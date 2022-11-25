import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('login successfull');

            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full " />
                                {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                            </div>

                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text">Password</span></label>
                                <input type="password"
                                    {...register("password",
                                        {
                                            required: "Password is required",
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                    className="input input-bordered w-full max-w-xs" />
                                <Link to='#' className='text-secondary'>forget password?</Link>
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            </div>
                            {
                                loginError && <p className='text-red-600'>{loginError}</p>
                            }

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className=''>New to Musicly <Link className='text-blue-500' to="/register">Create new Account</Link></p>
                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;