import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setsignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = data => {
        console.log(data);
        setsignUpError('');

        createUser(data.email, data.password, data.role)
       
            .then(result => {
                const user = result.user;
                console.log(user);
                // toast.success('User create Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(error => console.log(error))
                    toast.success('User create Successfully');
            })
            .catch(error => {
                // console.log(error);
                setsignUpError(error.message)
            });
    }

    // save the users to database
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log( 'save user check',name, email, role);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Save user in DB', data);
                navigate('/');
            })
    }
    return (
        <div>
            <div className="mx-auto max-w-4xl my-36">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up !</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input {...register("name", { required: "Email Address is required" })} type="text" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                                </div>

                                {/* Role */}
                                <label className="label">
                                    <span className="label-text">Select Your Role</span>
                                </label>
                                <select defaultValue={'DEFAULT'} name='role' className="select select-bordered w-full" {...register("role", { required: 'Select is required' })}>
                                    <option selected value='buyer'>Buyer</option>
                                    <option value='seller'>Seller</option>
                                </select>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: "Password Address is required", minLength: { value: 6, message: "Password must be 6 characters" } })} type="password" placeholder="password" className="input input-bordered" />
                                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}

                                </div>
                                <div>
                                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-primary" type="submit" value="Sign Up" />
                                    <p>Already have an account <Link to='/login' className='text-emerald-700'> Login</Link></p>
                                </div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                    <Link className='btn btn-outline btn-primary '>Login With Google</Link>
                                    <Link className='btn btn-outline btn-primary mt-5'>Login With Facebook</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;