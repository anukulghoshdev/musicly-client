import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setsignupError] = useState('');

    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)



    const navigate = useNavigate();

    if (token) {
        navigate("/")
    }
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
                const userGoogle = { name: user.displayName, email: user.email, role: 'Buyer' };
                // const { name, email, role } = userGoogle;

                saveUserToDbForGoogle(userGoogle)

            })
            .catch(error => console.log(error))
    }
    const saveUserToDbForGoogle = (user) => {
        console.log(user);

        fetch(`https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/googleusers?email=${user.email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(user.email)
            })

    }



    const saveUserToDb = (name, email, role) => {
        // console.log("from saveUserDb function",name, email, role);
        const user = { name, email, role };
        fetch('https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // getUserToken(email);
                setCreatedUserEmail(email)
            })


        // const getUserToken = email => {
        //     fetch(`https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/jwt?email=${email}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             if(data.accessToken){
        //                 localStorage.setItem('musiclyToken', data.accessToken)
        //                 navigate('/')
        //             }
        //         })
        // }
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
            <div className="h-[800px] flex justify-center items-center bg-slate-100">

                <div className="px-7 py-7 w-96 rounded-2xl shadow-xl bg-white">

                    <h2 className='font-bold text-center text-3xl'>Register</h2>

                    <form onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email is required"
                            })} type="email" className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>

                       

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "passward is required", // asdAE32#
                                minLength: { value: 6, message: 'passward must be in 6 characters', },
                                pattern: { value: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})/, message: 'Password must be strong' }
                            })} type="password" className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>


                        <div className="form-control w-full ">
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
                            <button className="btn btn-neutral text-white">Signup</button>
                            <p >Already have an account? <Link className=' text-blue-500' to="/login">Login</Link></p>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <div >
                        <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;