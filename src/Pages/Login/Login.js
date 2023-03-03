import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext)
    const [signError, setSignError] = useState(null)
    const [loginUser, setLoginUser] = useState('')
    const [token] = useToken(loginUser)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setSignError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                setLoginUser(data.email)
                console.log(user)

                reset()
            })
            .catch(e => {
                setSignError(e.message)

            })
    }
    return (
        <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
            <div className='w-96 shadow-xl rounded-xl mx-auto px-10 py-8'>
                <h1 className='text-xl font-bold text-center text-gray-700 my-2'>Login</h1>
                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="grid grid-cols-1 gap-4"
                >
                    <div>
                        <span className='block'>Email</span>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email" placeholder='Your email' className='input input-bordered w-full mt-2' />
                        {errors.email && <p className='text-red-600 text-sm'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <span className='block'>Password</span>
                        <input
                            {...register("password", { required: "password is required" })}
                            type="password" placeholder='Your password' className='input input-bordered w-full mt-2' />
                        {errors.password && <p className='text-red-600 text-sm'>{errors.password?.message}</p>}
                    </div>
                    <button className="btn w-full btn-primary text-white ">Login</button>
                    <div>
                        {
                            signError && <p className='text-xs text-red-600'>{signError}</p>
                        }
                    </div>
                    <p className='text-sm'>New to <strong>mayo clinic</strong> <Link className='text-secondary' to="/signup">Please signup</Link></p>
                </form>
                <div className='w-full h-10 flex justify-center mt-0'><div className='divider w-1/2 text-center'>or </div></div>
                <button className='mb-4 btn btn-outline w-full mt-2 mx-auto '>Continiue with Google </button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Login;