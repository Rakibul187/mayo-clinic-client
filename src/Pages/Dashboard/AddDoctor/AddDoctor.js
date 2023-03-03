import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/appointmentSpecialty")
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    const handleAddDoctor = data => {
        const image = data.img[0]
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((imgData) => {
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }

                fetch('http://localhost:5000/doctors', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `bearer ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify(doctor)

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("Doctor added successfully.")
                            reset()
                            navigate("/dashboard/managedoctors")
                        }
                    })
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    return (
        <div>
            <div className='w-96 mx-auto shadow-2xl py-4 px-16 rounded-xl mt-6 hover:border border-primary'>
                <h2 className="text-3xl">Add A Doctor</h2>
                <form
                    onSubmit={handleSubmit(handleAddDoctor)}
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
                        <span className='block'>Specialty</span>
                        <select className="select select-bordered w-full "
                            {...register("specialty")}
                        >
                            {
                                specialties &&
                                specialties?.map(specialty =>
                                    <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >{specialty.name}</option>
                                )
                            }
                        </select>
                        <div>
                            <span className='block'>Photo</span>
                            <input
                                {...register("img", { required: "Photo is required" })}
                                type="file" className='input w-full mt-2' />
                            {errors?.img && <p className='text-red-600 text-sm'>{errors.img.message}</p>}
                        </div>
                    </div>
                    <button className="btn w-full btn-primary text-white ">Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;