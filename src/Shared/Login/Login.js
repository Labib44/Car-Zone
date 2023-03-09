import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {login}=useContext(AuthContext);
    const [loginError, setLoginError]=useState("");

    // redirect
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        login(data.email, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from, {replace:true});
            toast('User Login Successfully')
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message);
        })
    }
    return (
        <div>
            <div className="mx-auto max-w-4xl my-36">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: "Password Address is required", minLength: { value: 6, message: "Password must be 6 characters"} })} type="password" placeholder="password" className="input input-bordered" />
                                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}

                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div>
                                {loginError && <p className='text-red-500'>{loginError}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-primary" type="submit" value="Login" />
                                    <p>New to Car Zone Please<Link to='/signUp' className='text-emerald-700'>  Sign Up</Link></p>
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

export default Login;