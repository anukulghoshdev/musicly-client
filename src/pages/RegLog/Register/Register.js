import React, { useContext, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setsignupError] = useState('');

    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignup = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                setsignupError('');
                const user = userCredential.user;
                console.log(user);

                toast.success('User Created Successfully.')

                const userInfo = {
                    displayName: data.name
                }
                updateUserProfile(userInfo)
                    .then(() => {
                        saveUserToDb(data.name, data.email, data.role)
                    })
                    .catch(err => console.log(err));


                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setsignupError(errorMessage);
            });
    }


    const handleGoogleSignin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created with google Successfully.')
                // navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const saveUserToDb = (name, email, role) => {
        // console.log("from saveUserDb function",name, email, role);
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getUserToken(email);
                // 
            })


        const getUserToken = email => {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.accessToken){
                        localStorage.setItem('musiclyToken', data.accessToken)
                        navigate('/')
                    }
                   
                })
        }
    }


// createUser -> updateProfile -> saveUsertoDB -> getUserToken


    const roles = [
        {
            id: 1,
            name: 'Buyer'
        },
        {
            id: 2,
            name: 'Seller'
        }
    ];

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignup)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body pb-0">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: "Email is required"
                                })} type="email" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: "passward is required", // asdAE32#
                                    minLength: { value: 6, message: 'passward must be in 6 characters', },
                                    pattern: { value: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})/, message: 'Password must be strong' }
                                })} type="password" className="input input-bordered w-full max-w-xs" />
                                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>

                                <select {...register("role", { required: "role is required" })} className="select select-bordered">
                                    {
                                        roles.map(role => <option
                                            key={role.id}
                                            value={role.name}
                                            defaultValue={roles[0].name}
                                        >{role.name}</option>)
                                    }

                                </select>
                            </div>

                            {
                                signupError && <p className='text-red-600'>{signupError}</p>
                            }

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p >Already have an account? <Link className=' text-blue-500' to="/login">Login</Link></p>
                            </div>


                        </div>
                        <div className="divider">OR</div>
                        <div className='px-5 pb-5 pt-0 '>
                            <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;