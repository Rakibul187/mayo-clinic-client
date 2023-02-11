import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { createUser, userUpdate } = useContext(AuthContext)
    const [signUpError, setSignError] = useState(null)

    const handleSignUp = data => {
        setSignError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }

                userUpdate(userInfo)
                    .then(() => {
                        reset()
                        toast.success("User updated successfully")
                    })
                    .then(e => console.log(e))
            })
            .catch(e => {
                setSignError(e.message)

            })
    }
    return (
        <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
            <div className='w-96 shadow-xl rounded-xl mx-auto px-10 py-2'>
                <h1 className='text-xl font-bold text-center text-gray-700 my-4'>Login</h1>
                <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="grid grid-cols-1 gap-2"
                >
                    <div>
                        <span className='block'>Name</span>
                        <input
                            {...register("name", { required: "name is required" })}
                            type="name" placeholder='Your name' className='input input-bordered w-full mt-2' />
                        {errors.name && <p className='text-red-600 text-sm'>{errors.name?.message}</p>}
                    </div>
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
                    <button className="btn w-full btn-primary text-white ">SignUp</button>
                    <div>
                        {
                            signUpError && <p className='text-xs text-red-600'>{signUpError}</p>
                        }
                    </div>
                    <p className='text-sm'>Already have an account <Link className='text-secondary' to="/login">Please login</Link></p>
                </form>
                <div className='w-full h-10 flex justify-center mt-0'><div className='divider w-1/2 text-center'>or </div></div>
                <button className='mb-4 btn btn-outline w-full mt-2 mx-auto '>Continiue with Google </button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SignUp;