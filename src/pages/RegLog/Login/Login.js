import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { googleSignIn, loginUser, resetPassword } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    // const [useremail, setUseremail] = useState('')

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');

        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                toast.success('login successfull');
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    // const handleforgotPassword = () => {
    //     resetPassword(useremail)
    //         .then(() => {
    //             toast.success('Password reset email sent!')
    //         })
    //         .catch(error => {
    //             toast.error(error.message)
    //         })
    // }

    return (

        <div className='h-[800px] flex justify-center items-center bg-slate-100'>
            <div className='p-8 w-96 rounded-2xl shadow-xl bg-white'>
                <h2 className='font-bold text-center text-3xl'>Login</h2>


                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full " />
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
                        <p   className='text-secondary cursor-pointer'>forget password?</p>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>


                    <input className='btn btn-success  w-full mt-4' value='Login' type="submit" />
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </form>
                <p className='my-2'>New to Musicly <Link className='text-info' to="/register">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>



            </div>
        </div>

    );
};

export default Login;